import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Container, Button, Modal  } from 'semantic-ui-react';

//Component Imports
import Header from './Header';
import DisplayDatabase from './DisplayDatabase';
import AddTreatment from './AddTreatment';

class MainGrid extends Component {
  render() {
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Container textAlign='center'>
              <h2>Column</h2>
            </Container>
          </Grid.Column>
          <Grid.Column width={10}>
            <Container textAlign='center'>
              <Header />
              <DisplayDatabase treatments={this.props.treatments} />
            </Container>
          </Grid.Column>
          <Grid.Column width={3}>
            <Container textAlign='center'>
              <h2>Column</h2>
              <button onClick={this.props.loadTreatments}>Load Sample Treatments</button>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <Container textAlign='center'>
              <h2>Column</h2>
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Container textAlign='center'>
              <h2>Column</h2>
              <Modal trigger={<Button color='green'>Add Treatment</Button>}>
                <Modal.Header>Add a Treatment</Modal.Header>
                <Modal.Content>
                  <AddTreatment />
                </Modal.Content>
              </Modal>
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Container textAlign='center'>
               <h2>Column</h2>
               <Button primary>Find Treatment</Button>     
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Container textAlign='center'>
              <h2>Column</h2>
              <Button color='red'>Delete Treatment</Button>
            </Container>
          </Grid.Column>
          <Grid.Column width={2}>
            <Container textAlign='center'>
              <h2>Column</h2>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default MainGrid;