import React, { useState, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner, Col, FormGroup, Form, Label, Input, Card } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as APP_CONFIG from '../../config/config';
import axios from 'axios';


toast.configure()

const AccountTransfer = (props) => {
    const {
        buttonLabelView,
        className,
        errorInput = "",
        currentUser = ""
    } = props;

    const [modal, setModal] = useState(false);
    const [ subscriptionTypes, subscriptionDataTypes] = useState();

    function passSubscriptionData(){
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const createdBy = currentUser?.role;

        // Get subscription types 
        let _that = this
        
        axios.get(APP_CONFIG[APP_CONFIG.REACT_APP_ENVIRONMENT].API_GET_SUBSCRIPTION_TYPE,
            {
                headers: {
                    ContentType: "application/json",
                    Authorization: currentUser.token
                }

            }
        ).then(res=>{

            let postSubscriptionResults = res?.data;
            // console.log("subscription types Data  ==>", postSubscriptionResults);
    
            subscriptionDataTypes(postSubscriptionResults);
        
        })
    }
    function addSubscriptionClick(e) {
        e.preventDefault();


        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const createdBy = currentUser?.role;

        let formID = document.querySelector("#channelData");
        const formData = new FormData(formID);

        var subscriptionType = formData.get('subscriptionType');
        var msisdn = formData.get('msisdn');
        var channelId = formData.get('channelId');
        var campaignId = formData.get('campaignId');
        var subscriptionRemarks = formData.get('subscriptionRemarks');

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (this.readyState === 4 & this.status === 200) {
                alert('Uploaded!');
            }
        };

        let errorInputType = "* Type field may be empty";
        let errorInputMsisdn = "* Account Number field may be empty";
        let errorInputChannelId = "* Account name field may be empty";
        
        if (subscriptionType == "") {
            
            toast.error(errorInputType);
        }
        if (msisdn == "") {
            toast.error(errorInputMsisdn);
        }
        if (channelId === null) {
            toast.error(errorInputChannelId);
        }
        else {
            const campaignForm = new FormData();
            campaignForm.append('CampaignForm', '{"msisdn": "' + msisdn + '","channelId": " ' + channelId + '"} ');

            let _that = this;
            let urlParamData = "?" + "campaignId" + "=" + campaignId + "&" + "channelId" + "=" + channelId + "&" + "msisdn" + "=" + msisdn + "&" + "type" + "=" + subscriptionType;

            axios.post(APP_CONFIG[APP_CONFIG.REACT_APP_ENVIRONMENT].API_CREATE_SUBSCRIPTION + urlParamData, 
                {
                    "remarks": subscriptionRemarks
                },
                {
                    headers: {

                        ContentType: "application/json",
                        Authorization: currentUser.token
                    }
                }).then(function (res) {
                    //handle success
                    toast.success('Added Campaign Successfully');
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000)
                }).catch(function (error) {
                    if (error.response) {
                        /*
                         * The request was made and the server responded with a
                         * status code that falls out of the range of 2xx
                         */
                        toast.error('Error Adding Campaign **');
                    } else if (error.request) {
                        /*
                         * The request was made but no response was received, `error.request`
                         * is an instance of XMLHttpRequest in the browser and an instance
                         * of http.ClientRequest in Node.js
                         */
                        toast.error('Error Adding Campaign ***');
                    } else {
                        // Something happened in setting up the request and triggered an Error
                        
                        toast.error('Error Adding Campaign ****');
                    }
                });

        }


    }
    // Intialize modal
    const toggle = () => setModal(!modal);

    return (
        <div className="container">
            {/* Button to Create Subscription */}
            {/* <br /> */}

            <button className="btn btn-outline btn-sm m-2 " onClick={function(event){ toggle(); passSubscriptionData()}} style={{ backgroundColor: 'blue', color: '#fff', borderRadius: 0, paddingLeft: 5, paddingRight: 10, paddingTop: 5, paddingBottom: 5, float: 'right' }} role="button">
                <a style={{ fontFamily: 'Roboto' }}> Fund Transfer </a>
            </button>


            <br />
            {/* Create Subscription modal */}
            <Modal isOpen={modal} size="lg" toggle={toggle} className={className}>
                <Form id="channelData" onSubmit={addSubscriptionClick}>
                    {/* modal content for the head section */}
                    <ModalHeader toggle={toggle}><a style={{ fontFamily: 'Roboto' }}> Funds Transfer </a>

                    </ModalHeader>
                    <ModalBody>
                        <ToastContainer closeButton={false} style={{ color: '#fff' }} />

                        <a style={{ color: 'black' }} className="float-left">
                            * Required
                        </a>
                        <br />
                        <br />
                        <div className="container">

                            <FormGroup row>
                                <Label htmlFor="subscriptionType" sm="12" md={{ size: 2, offset: 1 }} style={{ color: '#E60000' }}><a style={{ color: 'black' }}>*</a>Type:</Label>
                                <Col sm="12" md={{ size: 8, offset: 0 }} style={{ paddingLeft: '15px' }}>
                                    <Input type="select" name="subscriptionType" id="subscriptionType" defaultValue="Please select subscription type" required>
                                        <option disabled>Select account type</option>
                                        <option key="1" value="internal"> Internal</option>
                                        <option key="2" value="External"> External</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="msisdn" sm="12" md={{ size: 2, offset: 1 }} style={{ color: '#E60000' }}><a style={{ color: 'black' }}>*</a>A/C #:</Label>
                                <Col sm="12" md={{ size: 8, offset: 0 }} style={{ paddingLeft: '15px' }}>
                                    <Input type="text" name="msisdn" id="msisdn" placeholder="Provide A/C number" required />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="campaignId" sm="12" md={{ size: 2, offset: 1 }} style={{ color: '#E60000' }}><a style={{ color: 'black' }}>*</a>A/C Name:</Label>
                                <Col sm="12" md={{ size: 8, offset: 0 }}>
                                    <Input type="text" name="campaignId" id="campaignId" defaultValue="Please select campaign" required />
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Label htmlFor="subscriptionRemarks" sm="12" md={{ size: 2, offset: 1 }} style={{ color: '#E60000', paddingLeft: '25px' }}>Remarks:</Label>
                                <Col sm="12" md={{ size: 8, offset: 0 }} style={{ paddingLeft: '15px'}}>
                                    <Input type="textarea" name="subscriptionRemarks" id="subscriptionRemarks" placeholder="Please provide remarks" style={{ height: '200px' }}/>
                                </Col>
                            </FormGroup>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="btn-group">
                            <a style={{ paddingRight: '5px' }}>
                                <button className="btn btn-lg" onClick={toggle} style={{ backgroundColor: '#000', color: '#fff', borderColor: 'green', borderRadius: 10, paddingLeft: 5, paddingRight: 5, paddingTop: 0, paddingBottom: 0, textTransform: 'unset' }}>Cancel</button>{' '}
                            </a>

                            <button type="submit" onClick={addSubscriptionClick} className="btn btn-lg" style={{ backgroundColor: '#E60000', color: '#fff', borderColor: 'green', borderRadius: 10, paddingLeft: 5, paddingRight: 5, paddingTop: 0, paddingBottom: 0, textTransform: 'unset' }} >Confirm</button>
                        </div>
                    </ModalFooter>
                </Form>

            </Modal>

        </div>
    );
}

export default AccountTransfer;