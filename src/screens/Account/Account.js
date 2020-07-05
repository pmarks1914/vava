import React, { Component, Fragment } from 'react';
import DataTableAccount from './DataTableAccount';
import AccountTransfer from './AccountTransfer';
import { MDBIcon, MDBBtn, MDBBtnGroup } from 'mdbreact';
import { Spinner } from 'reactstrap';
// import "../Channel/channel.css";
import axios from 'axios';
import * as APP_CONFIG from '../../config/config';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import $ from 'jquery';
import DataTable from 'datatables.net';
import CreatableSelect from 'react-select/creatable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Form, Label, Input, Card } from 'reactstrap';
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseTwoDigitYear } from 'moment';
import FormText from 'reactstrap/lib/FormText';
import swal from 'sweetalert2'


const moment = require('moment');

let loading = <Spinner color="danger" />;

export class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ProductData: [],
            FilterData: [],
            channelData: [],
            campaignData: [],
            selectedSubscriptionId: "",
            loading: true,
            currentUserErrorCode: null,
            startDate: null,
            endDate: null

        }
    }

    componentDidMount() {

        let _that = this;

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        var request = new XMLHttpRequest();





        this.setState({ loading: true }, () => {

            axios.get(APP_CONFIG[APP_CONFIG.REACT_APP_ENVIRONMENT].API_GET_SUBSCRIPTION,
                {
                    headers: {
                        ContentType: "application/json",
                        Authorization: currentUser.token,

                    }
                }
            )
                .then(res => {

                    let currentUserErrorCode = res?.data?.errCode;

                    let postSubscriptionResults = res?.data?.subscriptions || [];

                    let postSubscriptions = postSubscriptionResults;
                    // console.log("Sub Data ==>", postSubscriptions);
                    const postList = postSubscriptions?.length ? (
                        postSubscriptions.map((post, id) => {

                            let dateCreated = new Date(post.createdOn);
                            let dateUpdated = new Date(post.updatedOn);
                            return (
                                {
                                    id: id + 1,
                                    channel: post?.channel?.label,
                                    campaign: post?.campaign?.label,
                                    msisdn: (post?.msisdn),
                                    createdOn: moment(post?.createdOn).format('DD/MM/YYYY'),
                                    expiresOn: moment(post?.expiresOn).format('DD/MM/YYYY'),
                                    action:
                                        <Fragment>

                                        </Fragment>
                                }
                            )
                        })
                    ) : []

                    _that.setState(
                        {
                            ProductData: postList,
                            currentUserErrorCode: currentUserErrorCode
                        }
                    )
                })
        });

    }


    // unhide Date Picker To
    selectedDateTo(e) {
        // e.preventDefault();

        if (document.querySelector("#dateFrom")) {

            document.querySelector('#hideDateTo').style.display = 'block';
        }

    }
    handleChangeFrom = (e) => {
        this.setState({
            startDate: e
        });
    };

    handleChange = (e) => {
        this.setState({
            endDate: e
        });
    };


    render() {
        const createOption = (label, dataId) => ({
            label,
            value: dataId,
        });
        const channelOptions =
            this.state?.channelData?.map((post, id) => {
                return createOption(post?.label, post?.id)
            });

        const campaignOptions =
            this.state?.campaignData?.map((post, id) => {
                return createOption(post?.label, post.id)
            });

        const today = moment();
        // if (this.state?.currentUserErrorCode == "200") {
        //     window.location.href = "/login";
        //     localStorage.removeItem("currentUser")
        // }

        return (
            <div className="container">
                {/* <Card style={{ backgroundColor: "#a8a7a3", padding: "10px 0 10px 10px", width: '100%' }}> */}

                    <AccountTransfer channelData={this.state?.channelData} campaignData={this.state?.campaignData} />
                {/* </Card> */}
                <hr />

                {/* <div style={{ paddingRight: "20px", height: "1px" }}>
                    <ReactHTMLTableToExcel
                        className="btn btn-outline-info btn-sm m-0  waves-effec float-right"
                        table="idforSubscription"
                        filename="ReportExcel"
                        sheet="Sheet"
                        buttonText="Export excel"
                        
                    />
                </div> */}
                <br /><br />
                <DataTableAccount posts={this.state.ProductData} />

            </div>
        )
    }
}

export default Account  