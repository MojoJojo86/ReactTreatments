import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class Treatment extends Component {
    render() {
        return(
            <Table.Row>
                <Table.Cell>{this.props.details.key}</Table.Cell>
                <Table.Cell>{this.props.details.date}</Table.Cell>
                <Table.Cell>{this.props.details.hospnum}</Table.Cell>
                <Table.Cell>{this.props.details.ptsurname}</Table.Cell>
                <Table.Cell>{this.props.details.ptfirstname}</Table.Cell>
                <Table.Cell>{this.props.details.treatmentsite}</Table.Cell>
                <Table.Cell>{this.props.details.oncologist}</Table.Cell>
                <Table.Cell>{this.props.details.energy}</Table.Cell>
                <Table.Cell>{this.props.details.treatmenttype}</Table.Cell>
                <Table.Cell>{this.props.details.staffmember}</Table.Cell>
            </Table.Row>
        );
    }
}

export default Treatment;