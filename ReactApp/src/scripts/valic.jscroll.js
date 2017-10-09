/*
 * jScroll - jQuery Plugin for Infinite Scrolling / Auto-Paging
 * @version 2.3.9
 * @requires jQuery v1.4.3+
 * The jscroll libary is customized based on Non factor grid infinite-scroll functionality.
 * Note: Upgrade customized functionality if going for higher version.
 */

//Global variables
var _infiniteScrollUrl = '';
var _gridEmptyMessage = '';
var _infiniteScrollContainer = '#contentBodyContainer';


(function ($) {
    'use strict';

    // Define the jscroll namespace and default settings
    $.jscroll = {
        defaults: {
            debug: false,
            autoTrigger: true,
            autoTriggerUntil: false,
            loadingHtml: '<small>Loading...</small>',
            loadingFunction: false,
            padding: 0,
            nextSelector: 'a:last',
            contentSelector: '',
            pagingSelector: '',
            callback: false,
            gridName: '',
            url: '',
            emptyText: '',
            scrollMoreMessage: ''            
        }
    };

    // Constructor
    var jScroll = function ($e, options) {
        //Set url
        _infiniteScrollUrl = options.url;
        _gridEmptyMessage = options.emptyText;
        
        // Private vars and methods
        var _data = $e.data('jscroll'),
            _userOptions = (typeof options === 'function') ? { callback: options } : options,
            _options = $.extend({}, $.jscroll.defaults, _userOptions, _data || {}),
            _isWindow = ($e.css('overflow-y') === 'visible'),
            _$window = $(window),
            _$body = $('body'),
            _$scroll = _isWindow ? _$window : $e,

            // Check if a loading image is defined and preload
            _preloadImage = function () {
                var src = $(_options.loadingHtml).filter('img').attr('src');
                if (src) {
                    var image = new Image();
                    image.src = src;
                }
            },

            // Wrap inner content, if it isn't already
            _wrapInnerContent = function () {
                if (!$e.find('.jscroll-inner').length) {
                    $e.contents().wrapAll('<div class="jscroll-inner" />');
                }
            },

            // Find the next link's parent, or add one, and hide it
            _nextWrap = function ($next) {
                var $parent;
                if (_options.pagingSelector) {
                    $(_options.pagingSelector).hide();
                } else {
                    $parent = $next.parent().not('.jscroll-inner,.jscroll-added').addClass('jscroll-next-parent').hide();
                    if (!$parent.length) {
                        $next.wrap('<div class="jscroll-next-parent" />').parent().hide();
                    }
                }
            },

            // Remove the jscroll behavior and data from an element
            _destroy = function () {
                return _$scroll.unbind('.jscroll')
                    .removeData('jscroll')
                    .find('.jscroll-inner').children().unwrap()
                    .filter('.jscroll-added').children().unwrap();
            },

            // Observe the scroll event for when to trigger the next load
            _observe = function () {
                if ($e.is(':visible')) {
                    _wrapInnerContent();
                    var $inner = $e.find('div.jscroll-inner').first(),
                        data = $e.data('jscroll'),
                        borderTopWidth = parseInt($e.css('borderTopWidth'), 10),
                        borderTopWidthInt = isNaN(borderTopWidth) ? 0 : borderTopWidth,
                        iContainerTop = parseInt($e.css('paddingTop'), 10) + borderTopWidthInt,
                        iTopHeight = _isWindow ? _$scroll.scrollTop() : $e.offset().top,
                        innerTop = $inner.length ? $inner.offset().top : 0,
                        iTotalHeight = Math.ceil(iTopHeight - innerTop + _$scroll.height() + iContainerTop);

                    if (!data.waiting && iTotalHeight + _options.padding >= $inner.outerHeight()) {
                        _debug('info', 'jScroll:', $inner.outerHeight() - iTotalHeight, 'from bottom. Loading next request...');
                        return _load();
                    }
                }
            },

            // Check if the href for the next set of content has been set
            _checkNextHref = function (data) {
                data = data || $e.data('jscroll');

                if ($('.table tbody tr').hasClass('jscroll-added')) {
                    $('.jscroll-added > tr').unwrap();
                }
                if (!data || !data.nextHref) {

                    _debug('warn', 'jScroll: nextSelector not found - destroying');
                    _destroy();
                    return false;
                } else {
                    _setBindings();
                    return true;
                }
            },

            _setBindings = function () {
                var $next = $e.find(_options.nextSelector).first();
                if (!$next.length) {
                    return;
                }
                if (_options.autoTrigger && (_options.autoTriggerUntil === false || _options.autoTriggerUntil > 0)) {
                    _nextWrap($next);
                    var scrollingBodyHeight = _$body.height() - $e.offset().top,
                        scrollingHeight = ($e.height() < scrollingBodyHeight) ? $e.height() : scrollingBodyHeight,
                        windowHeight = ($e.offset().top - _$window.scrollTop() > 0) ? _$window.height() - ($e.offset().top - $(window).scrollTop()) : _$window.height();
                    if (scrollingHeight <= windowHeight) {
                        _observe();
                    }

                    _$scroll.unbind('.jscroll').bind('scroll.jscroll', function () {
                        return _observe();
                    });
                    if (_options.autoTriggerUntil > 0) {
                        _options.autoTriggerUntil--;
                    }
                } else {
                    _$scroll.unbind('.jscroll');
                    $next.bind('click.jscroll', function () {
                        _nextWrap($next);
                        _load();
                        return false;
                    });
                }
            },

            //Get query string values.
            _queryStringValue = function (name) {
                var sURLVariables = _infiniteScrollUrl.split('?')[1].split('&');
                var paramValue = '';
                for (var i = 0; i < sURLVariables.length; i++) {
                    var sParameterName = sURLVariables[i].split('=');
                    if (sParameterName[0] == name) {
                        paramValue = sParameterName[1];
                        break;
                    }
                }
                return paramValue;
            },

            // Load the next set of content, if available
            _load = function () {                
                var $inner = $e.find('div.jscroll-inner').find('.table > tbody').first(),
                    data = $e.data('jscroll');
                
                if ($.trim(_infiniteScrollUrl) == "") {
                    return _destroy();
                }
                
                //Display message if there is no data.
                if (Number(_queryStringValue(_options.gridName + '-Page')) > Number(_queryStringValue('gridTotalPages'))) {
                    _infiniteScrollUrl = "";
                    data.nextHref = false;
                    if (_gridEmptyMessage != '') {
                        $inner.append("<tr class=\"jscroll-added\"><td colspan=\"30\" align=\"center\">" + _gridEmptyMessage + "</td></tr>");
                    }
                    return _destroy();
                }

                //Remove previous scroll more message if there is more data.
                $('.jscroll-added').remove();
              
                data.waiting = true;
                $inner.append("<tr class=\"jscroll-added\">")
                    .children('.jscroll-added').last()
                    .html('<td colspan=\"30\" align=\"center\"> <div class="jscroll-loading" id="jscroll-loading">' + _options.loadingHtml + '</div></td></tr>')
                    .promise()
                    .done(function () {
                        if (_options.loadingFunction) {
                            _options.loadingFunction();
                        }
                    });

                  return $e.animate({ scrollTop: $inner.outerHeight() }, 0, function () {
                    var nextHref = _infiniteScrollUrl + ' ' + _options.contentSelector;

                    $inner.find('tr.jscroll-added').last().load(nextHref, function (r, status) {
                        var paramCurrentPage = 1;
                        var paramGridTotalPages = 0;
                        var pageNumber = 0;

                        if (status === 'error') {
                            return _destroy();
                        }

                        var $next = $(this).find(_options.nextSelector).first();
                        data.waiting = false;

                        //Get page number.
                        paramCurrentPage =_queryStringValue(_options.gridName + '-Page');
                        paramGridTotalPages = _queryStringValue('gridTotalPages');
                        pageNumber = Number(paramCurrentPage) + 1;

                        if (Number(paramCurrentPage) >= Number(paramGridTotalPages)) {
                            //Set message, if there is no more data to fetch.
                            _infiniteScrollUrl = "";
                            data.nextHref = false;

                            if (_gridEmptyMessage != '') {
                                $inner.append("<tr class=\"jscroll-added\"><td colspan=\"30\" align=\"center\">" + _gridEmptyMessage + "</td></tr>");
                            }
                           
                        }
                        else {
                            //Set page number for next request.
                            _infiniteScrollUrl = _infiniteScrollUrl.toString().replace(_options.gridName + '-Page=' + paramCurrentPage, _options.gridName + '-Page=' + pageNumber);
                            //Display scroll more message.
                            $inner.append("<tr class=\"jscroll-added\"><td colspan=\"30\" align=\"center\">" + _options.scrollMoreMessage + "</td></tr>");
                        }

                        $('.jscroll-next-parent', $e).remove(); // Remove the previous next link now that we have a new one                        

                        _checkNextHref();
                        if (_options.callback) {
                            _options.callback.call(this, nextHref);
                        }
                        _debug('dir', data);
                    });
                });
            },

            _debug = function (m) {
                if (_options.debug && typeof console === 'object' && (typeof m === 'object' || typeof console[m] === 'function')) {
                    if (typeof m === 'object') {
                        var args = [];
                        for (var sMethod in m) {
                            if (typeof console[sMethod] === 'function') {
                                args = (m[sMethod].length) ? m[sMethod] : [m[sMethod]];
                                console[sMethod].apply(console, args);
                            } else {
                                console.log.apply(console, args);
                            }
                        }
                    } else {
                        console[m].apply(console, Array.prototype.slice.call(arguments, 1));
                    }
                }
            };

        // Initialization
        $e.data('jscroll', $.extend({}, _data, { initialized: true, waiting: false, nextHref: _infiniteScrollUrl }));
        _wrapInnerContent();
        _preloadImage();
        _setBindings();

        // Expose API methods via the jQuery.jscroll namespace, e.g. $('sel').jscroll.method()
        $.extend($e.jscroll, {
            destroy: _destroy
        });
        return $e;
    };

    // Define the jscroll plugin method and loop
    $.fn.jscroll = function (m) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('jscroll');

            // Instantiate jScroll on this element if it hasn't been already
            if (data && data.initialized) {
                return;
            }
            jScroll($this, m);
        });
    };

})(jQuery);

