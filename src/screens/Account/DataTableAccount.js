import React from 'react';
import { MDBContainer, MDBDataTable, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import $ from 'jquery';


const DataTableAccount = ({ posts }) => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'id',
                sort: 'disabled',
                width: 1
            },
            {
                label: 'Description',
                field: 'description',
                sort: 'asc',
                width: '40'
            },
            {
                label: 'Currency',
                field: 'currency',
                sort: 'dsc',
                width: 40
            },
            {
                label: 'Transaction date',
                field: 'transactionDate',
                sort: 'asc',
                width: 40
            },
            {
                label: 'Effected Date',
                field: 'effectedDate',
                sort: 'asc',
                width: 40
            },
            {
                label: 'Credit Amt',
                field: 'creditAmt',
                sort: 'disabled',
                width: 50,
                height: 5
            },
            {
                label: 'Debit Amt',
                field: 'debitAmt',
                sort: 'disabled',
                width: 50,
                height: 5
            },
            {
                label: 'Balance',
                field: 'balance',
                sort: 'disabled',
                width: 50,
                height: 5
            }
        ],
        rows: posts
    };

    return (
        <MDBContainer>
            <MDBTable 
                scrollY
                maxHeight="300px"
                id="idforSubscription"
                small = {true}
                searching="false"
                paging="true"
                theadColor = "white" 
                responsiveXl 
                responsiveSm  
                striped 
                data={data } 
                sortable="true"
                bordered
                >
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
            </MDBTable>
        </MDBContainer>
    );
};

export default DataTableAccount;