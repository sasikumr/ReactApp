import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabContainer, Tab } from '../../shared/TabContainerComponent/TabContainerComponent';
import $ from 'jquery';
import ValicValidationMessage from '../../shared/ValicValidationMessageComponent/ValicValidationMessageComponent';
import Loader from '../../shared/LoaderComponent/LoaderComponent';
import { validateFormField } from '../../shared/utility/Utility';
import { PersonalInformationContainer } from './PersonalInformationContainer';
import { InvestorProfileContainer } from './InvestorProfileContainer';
import { IncomeSourceContainer } from './IncomeSourceContainer';
import { agileneturl } from '../../constants';
import { AddErrorMessage } from '../../actions/ValidationMessageAction';
//import {ProspectAPI} from '../api/prospectApi';
//import * as ActionTypes from '../actions/actionTypes';
import * as ProspectAction from '../../actions/ProspectAction';
import './ProspectEditContainer.css';
import { ApplicationState } from '../../store';
import * as ProspectStore from '../../store/Prospect'
import * as StateStore from '../../store/States';
import * as LoaderStore from '../../store/Loader';
import * as ValidationMessageStore from '../../store/validationMessage';

type ProspectEditProps = ProspectStore.ProspectState
    & typeof ProspectStore.actionCreators
    & typeof ProspectStore.actionCreatorsAgentCode
    & typeof StateStore.actionCreators
    & typeof LoaderStore.actionCreators
    & RouteComponentProps<{}>
    & prospectProps
    ;

export class ProspectEditContainer extends Component<any, any> {
    componentDidMount() {
        this.props.componentDidMount();
    }
    componentDidCatch(error, info) {
        //const {dispatch} = this.props;
        //dispatch()
        //console.log('componentcath');
    }
    render() {
        const { formErrors, isLoading } = this.props;
        if (formErrors !== undefined && formErrors !== null && formErrors.length >0) {
            let errors = formErrors.filter(error => error.errorMessage !== '' && error.fieldName === '');
            //console.log(errors);
            if (errors.length > 0) {
                //throw new Error("failed component")
                return (<AppError error={errors[0].errorMessage} />)

            }
        }

        return (

            <div>               
                <ValicValidationMessage formErrors={formErrors} className="form-errors" />
                <form>
                    <TabContainer>
                        <Tab name="Personal Information" isDefaultTab>
                            <PersonalInformationContainer />
                        </Tab>
                        <Tab name="Investor Profile">
                            <InvestorProfileContainer />
                        </Tab>
                        <Tab name="Income Source">
                            <IncomeSourceContainer />
                        </Tab>
                    </TabContainer>
                    <button type="submit" className="btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        this.props.saveProspect(e);
                    }} >Save</button>
                    &nbsp;<button type="button" className="btn btn-default" onClick={(e) => {
                        e.preventDefault();
                        this.props.cancelProspect();
                    }} >Cancel</button>
                </form>
            </div>
        );
    }
    static propTypes = {
        saveProspect: PropTypes.func.isRequired,
        componentDidMount: PropTypes.func.isRequired,
        formErrors: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired
    }
}
const mapStateToProps = (state: ApplicationState) => ({
    formErrors: state.errors,
    isLoading: state.isLoading
})
const mapDispatchToProps = (dispatch) => ({
    saveProspect: function () {
        let inputs = document.getElementsByTagName('input') as any;
        for (let index = 0; index < inputs.length; ++index) {
            let inputField = inputs[index];
            validateFormField(inputField);

            if (inputField.isValid === false || inputField.isFormatValid === false) {
                dispatch(AddErrorMessage(inputField.name, inputField.errorMessage));
                $(inputField).parent().addClass('has-error has-feedback');
            }
            else {
                dispatch(AddErrorMessage(inputField.name, ''));
                $(inputField).parent().removeClass('has-error has-feedback');
            }

        }
        dispatch(ProspectStore.actionCreators.updateProspectRequest());
    },
    cancelProspect: function (e) {
        if (window.confirm('Are you sure want to cancel?')) {
            (document as any).location = agileneturl + "Dashboard/Advisor/ClientProspectListing.aspx?agentId=03499";
        }
    },
    componentDidMount: function () {
        dispatch(LoaderStore.actionCreators.loaderBegin());
        dispatch(ProspectStore.actionCreatorsAgentCode.setAgentCode((window as any).__agentCode__));
        dispatch(StateStore.actionCreators.fetchStateRequest());
        dispatch(ProspectStore.actionCreators.fetchProspectRequest((window as any).__PROSPECTID__));        
    }
})


interface prospectProps {
    cancelProspect: () => void;
    saveProspect: () => void;
    formErrors: any;
    isLoading: boolean;
    componentDidMount: () => void;
}



const AppError = (props: any) => {
    return (<div>
        Something went wrong!!! {props.error}
    </div>);
}
export default connect(mapStateToProps, mapDispatchToProps)(ProspectEditContainer) as typeof ProspectEditContainer;
