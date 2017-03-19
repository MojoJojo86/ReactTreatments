import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

//Component import
import Treatment from './Treatment';

class DisplayDatabase extends Component {
    render() {
        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Date of Entry</Table.HeaderCell>
                        <Table.HeaderCell>Hospital No</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Firstname</Table.HeaderCell>
                        <Table.HeaderCell>Treatment Site</Table.HeaderCell>
                        <Table.HeaderCell>Oncologist</Table.HeaderCell>
                        <Table.HeaderCell>Energy</Table.HeaderCell>
                        <Table.HeaderCell>Treatment Type</Table.HeaderCell>
                        <Table.HeaderCell>Staff Member</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {
                    Object
                        .keys(this.props.treatments)
                        .map(key => <Treatment key={key} details={this.props.treatments[key]} />)
                }
            </Table>
        );
    }
}

export default DisplayDatabase;
