
var HttpMethod = {
    Post: "Post",
    Get: "Get"
}

var AddressType = {
    Home: "Home",
    Work: "Work",
    Other: "Other"
}

var signForAngular = {
    LeftAngular: "¶Ø",
    LeftClosedAngular: "¶¶",
    RightAngular: "ØØ",
    RightClosedAngular: "Ø¶"
}

//Fill dropdown data via ajax call
//url           : url along with input data, if any in querystring format
//dropdownId    : ID of the Dropdown to which data needs to be filled
//defaultValue  : Default value to be displayed
//defaultText   : Default text to be displayed - Eg: Any, Select One etc
//selectedvalue : Value of the option that needs to be selected after load - Pass '' - empty string if no data need to be selected. In this case first item is selected
//async         : true/false to specify ig the call is asynchronous or not
//dataColumnId  : Property name from json bound to Value field of dropdown
//dataColumnText: Property name from json bound to Text field of dropdown
//initialText   : Text to be displayed in dropdown till ajax call is complete. Eg: Loading. Pass '' - empty string if no text needs to be displayed
function BindDropdownData(url, dropdownId, defaultValue, defaultText, selectedValue, async, dataColumnId, dataColumnText, initialText) {
    var idPrefix = "#";
    dropdownId = idPrefix + dropdownId;
    $(dropdownId).empty();

    if ($.trim(initialText) != "") {
        //Set Loading value
        var value = "<option value=''>" + initialText + "</option>";
        $(value).appendTo(dropdownId);
    }

    //Default async call
    if (async == undefined || async == "") {
        async = true;
    }
    var noData = false;
    $.ajax({
        url: url,
        type: HttpMethod.Get,
        async: async,
        success: function (data) {
            if (data != null && data != undefined && data != "") {
                ////Set default value
                //// If defaultText passed as empty, it will not add ino the object.
                //// If defaultText passed as blank string it will be added (Ex:" ")
                if (defaultText != "") {
                    var value = "<option value=" + defaultValue + ">" + defaultText + "</option>";
                    $(value).appendTo(dropdownId);
                }
                //Fill data
                $.each(data, function (i, row) {
                    var value = "<option value=" + $.trim(row[dataColumnId]) + ">" + $.trim(row[dataColumnText]) + "</option>";
                    $(value).appendTo(dropdownId);
                });
            }
            else {
                noData = true;
                //Remove the first - default - Loading.. - only if it is passed
                if ($.trim(initialText) != "") {
                    $(dropdownId + ' option:first-child').remove();
                }

                ////Set NoData as option
                var value = "<option value='-1'>No Data</option>";
                $(value).appendTo(dropdownId);
            }
        },
        error: function (err) {
            //To do: log 
        }
    }).done(function (e) {
        if (!noData) {
            //Remove the first - default - Loading.. - only if it is passed
            if ($.trim(initialText) != "") {
                $(dropdownId + ' option:first-child').remove();
            }
            //Set selected value
            if ($.trim(selectedValue) != "") {
                $(dropdownId).val($.trim(selectedValue));
            }
        }
    });


    //To validate the given input is numeric
    //value     : input value (example: 123,123,xx,yy)
    //
    //function isNumericInput(value, errMessage) {
    //    var arr = value.split(',');
    //    if (value.length > 0) {
    //        if (arr.length > 0) {
    //            for (var i = 0; i < arr.length; i++) {
    //                if (isNaN(arr[i])) {
    //                    errorMessage = errorMessage + "<li>" + errMessage + "</li>";
    //                    return false;
    //                    break;
    //                }
    //            }
    //        }
    //        else {
    //            if (isNaN(value)) {
    //                errorMessage = errorMessage + "<li>" + errMessage + "</li>";
    //                return false;
    //            }
    //        }
    //    }
    //}

}

//Function to parse json date format to display in mm/dd/yyyy hh:mm:ss format
function ParseJsonDateTime(value) {
    var dateString = value.substr(6);
    var dateVar = new Date(parseInt(dateString));
    var date = new Date(dateVar);
    return date;
}

//Function to display success or error message
function DisplayMessage(message, messageType, divId) {
    //Display error message
    var dismissAnchor = "<a href=\"#\" class=\"close alert-close\" aria-label=\"close\">&times;</a>";
    $(divId).show();
    $(divId).html(dismissAnchor + message);
    $(divId).removeAttr("class");
    if (message != "") {
        if (messageType.toLowerCase() == "success") {
            $(divId).addClass("alert success_message_box fade in");
        }
        else if (messageType.toLowerCase() == "error") {
            $(divId).addClass("alert error_message_box fade in");
        }
        else if (messageType.toLowerCase() == "info") {
            $(divId).addClass("alert info_message_box fade in");
        }
    }
}

$(document).on('click', '.alert-close', function () {
    $(this).parent().hide();
})


//Function to bind and apply styles to page level sub menu
function BindSubMenus(submenuctrl) {
    $(submenuctrl).hide();
    var menuKey = $(submenuctrl).attr('id');
    var menuDiv = $(submenuctrl).next('div');
    var menuDivId = $(menuDiv).attr('id');
    var urlString = "/4Sight/Shared/LoadPageSubMenu?pageName=" + menuKey;
    $.get(urlString, function (result) {
        $(menuDiv).html(result);

        if ($("#" + menuDivId + ' ul').length > 0 && $("#" + menuDivId + ' ul').hasClass('dropMenuList')) {
            $(submenuctrl).show();
        }
        //Triggered after sub menu loaded to implement page specific sub menu logic
        $.event.trigger('htmlchanged', { element: menuDiv.attr('id') });//defined in calling page
    });
    //TO load submenu on anchor click
    $(submenuctrl).click(function () {
        if (menuDiv.attr('class') == "noShow") {
            //Hide adjacent opened menus.
            $('.dropMenu').attr('class', "noShow");
            menuDiv.attr('class', "dropMenu");
        }
        else if (menuDiv.attr('class') == "dropMenu") {
            menuDiv.attr('class', "noShow");
        }
    });

}

//Function to load header and footer to Nbc related grids
function LoadHeaderAndFooter(grdName, colSpanLeft, colSpanRight) {
    var parentDiv = '#' + $(grdName).parent('.dataDiv').attr('id');
    var headerDiv = parentDiv + " .header";
    var headerDivMob = parentDiv + " .headerMob";
    $(headerDiv).html($(parentDiv + " #headerText").val());
    $(headerDivMob).html($(parentDiv + " #headerTextSmall").val());

    if (!$(grdName + " table td").hasClass("mvc-grid-empty"))//Load footer only if grid has data
    {
        if (!$(grdName + " table td").hasClass("AwdSearchGrid"))//Load only when it is not for AWD search results
        {
            var totalTransAmt = $(parentDiv + " #totalTransactionAmount").val();
            $(grdName + " .gridFooter").html("<td colspan='" + colSpanLeft + "' style='padding:2px;text-align:right;'>Total: </td><td style='padding: 2px 2px 2px 8px;' class='rightAlign'>" + totalTransAmt + "</td><td colspan='" + colSpanRight + "'></td>");
        }
        else
        {
            $(grdName + " .gridFooter").html("<td colspan='9'>&nbsp;</td>");
        }
    }
}


function LoadCustomGridFooter(grdName, footerText) {

    if (!$(grdName + " table td").hasClass("mvc-grid-empty"))//Load footer only if grid has data
    {
        $(grdName + " .gridFooter").html(footerText);
    }
}

function IsCommentsEntered(txtId) {
    //Validate Comments for data
    if ($.trim($(txtId).val()) == "") {
        window.errorMsg = "Please enter valid comments";
        return false;
    }
    return true;
}

function validateInputBox(divId, maxlength, errorMsg) {

    var txtResponse = $(divId).val();
    var textLength = $(divId).val().length;
    if ((maxlength - parseInt(textLength)) < 0) {
        window.errorMsg = "Response should not exceed " + maxlength + " characters";
        return false;
    }
    //replace out-of-range chars and replace with known chars in the comments box
    var correctedComments = replaceoutofrangechars(txtResponse);
    //validate if there are any more out of range chars
    var x;
    var str = correctedComments.replace(/\s/g, "");
    for (idx = 0; idx < str.length; idx++) {
        x = str.charCodeAt(idx);
        if (x <= 31 || x >= 127) { //&& !(x == 8211) && !(x >= 8216 && x <= 8223)
            window.errorMsg = 'The comments text contains an invalid character  ' + str.charAt(idx) + '. This may happen if you copy/paste text into the comments box. To fix this, please remove all occurrences of that character and type it manually using your keyboard.';
            return false;
        }
    }
    return true;
}
function replaceoutofrangechars(str) {
    str = str.replace(/–/g, "-");
    str = str.replace(/—/g, "-");
    str = str.replace(/‘/g, "'");
    str = str.replace(/’/g, "'");
    str = str.replace(/‚/g, ",");
    str = str.replace(/“/g, "'");
    str = str.replace(/”/g, "'");
    str = str.replace(/„/g, ",");
    str = str.replace(/•/g, "-");
    str = str.replace(/…/g, "...");
    return str;
}

//Method to check if user is logged in mobile or not.
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function (a) { (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) })(navigator.userAgent || navigator.vendor || window.opera);

//Method to add or update querystring parameters. Read comments inline for usage
//If paramValue is to be set as null then pass the value as string - "null" 
function AddOrUpdateParams(queryStringText, paramName, paramValue) {
    var queryParameters = {};
    queryParameters = GetQueryParams(queryParameters, queryStringText)
    //// Add new parameters or update existing ones
    //queryParameters['newParameter'] = 'new parameter';
    //queryParameters['existingParameter'] = 'new value';
    queryParameters[paramName] = paramValue;

    /*
     * Replace the query portion of the URL.
     * jQuery.param() -> create a serialized representation of an array or
     *     object, suitable for use in a URL query string or Ajax request.
     */
    return $.param(queryParameters);
}

function RemoveParams(queryStringText, paramName) {

    var queryParameters = {};
    queryParameters = GetQueryParams(queryParameters, queryStringText)

    delete queryParameters[paramName];

    return $.param(queryParameters);
}

function GetQueryParams(queryParameters, queryStringText) {

    /*
        * queryParameters -> handles the query string parameters
        * queryString -> the query string without the fist '?' character
        * re -> the regular expression
        * m -> holds the string matching the regular expression
    */

    var queryString = queryStringText,
       re = /([^&=]+)=([^&]*)/g, m;

    // Creates a map with the query string parameters
    while (m = re.exec(queryString)) {
        queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return queryParameters;
}

//Function to clear filter, sorting and rowsPerPage values from grid query so thats it loads in its initial state during reload
function ResetFilterSortPaging(queryStringText, grdName) {
    var queryParameters = {};
    queryParameters = GetQueryParams(queryParameters, queryStringText);
    for (var property in queryParameters) {
        if (queryParameters.hasOwnProperty(property)) {
            if (property.lastIndexOf(grdName, 0) === 0)
                queryStringText = RemoveParams(queryStringText, property);
        }
    }
    return queryStringText;
}

//Function to switch tabs from active to inactive.
function switchTabs(clicked_id) {
    for (i = 0; i < tabName.length; i++) {

        classTest = tabName[i].className;
        contentClassTest = tabCon[i].className;

        var newClass = classTest.replace("activeTab", "");
        var newContentClass = contentClassTest.replace("activeContent", "inActiveContent");

        tabName[i].className = newClass;
        tabCon[i].className = newContentClass;

        idTest = tabName[i].id;


        if (idTest == clicked_id) {
            newClass = newClass + " activeTab";

            newContentClass = contentClassTest.replace("inActiveContent", "activeContent");

            document.getElementById(idTest).className = newClass;
            document.getElementById(idTest + "Box").className = newContentClass;
        }
    }
}


//Function to validate the date and date format
function ValidateDate(inputDate) {
    var isValidDate = false;
    var dtRegex = new RegExp(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

    if (!dtRegex.test(inputDate) || ValidDate(dtRegex, inputDate)) {
        isValidDate = true;
    }
    return isValidDate;
}

function ValidDate(regexExp, selectedDate) {
    var isValid = false;
    var dateArray = selectedDate.match(regexExp);
    var d = new Date(dateArray[3], dateArray[1] - 1, dateArray[2]);
    if (d.getFullYear() != dateArray[3] || d.getMonth() + 1 != dateArray[1] || d.getDate() != dateArray[2]) {
        isValid = true;
    }
    return isValid;
}

//Post pdf document html data for render pdf.
//htmlData: The data as html string to render pdf. 
//fileName: Name of the Pdf.
function postPdfDocumentData(htmlData,fileName) {
    var url = "/4Sight/Common/Pdf/ViewPdf";
    //Html parsing.
    var parsedData = new DOMParser().parseFromString($(htmlData).html(), 'text/html');
    var pdfData = new XMLSerializer().serializeToString(parsedData);

    //Replace angular to its corresponding sign.
    pdfData = pdfData.replace(new RegExp("<", 'g'), signForAngular.LeftAngular).replace(new RegExp("/>", 'g'), signForAngular.RightClosedAngular).replace(new RegExp("</", 'g'), signForAngular.LeftClosedAngular).replace(new RegExp(">", 'g'), signForAngular.RightAngular);

    //Post pdf data to the action method.
    var form = document.createElement("form");
    form.setAttribute("action", url);
    form.setAttribute("method", "post");
    form.setAttribute("target", "_blank");
    var dataInput = document.createElement("input");
    dataInput.setAttribute("type", "hidden");
    dataInput.setAttribute("name", "html");
    dataInput.setAttribute("value", pdfData);
    
    fileInput = document.createElement("input");
    fileInput.setAttribute("type", "hidden");
    fileInput.setAttribute("name", "fileName");
    fileInput.setAttribute("value", fileName);

    form.appendChild(dataInput);
    form.appendChild(fileInput);
    document.body.appendChild(form);
    form.submit(function (e) {
        return false;
    });
}