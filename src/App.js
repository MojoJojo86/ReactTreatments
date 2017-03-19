import React, { Component } from 'react';


//Import Components
import MainGrid from './Components/MainGrid';
import SampleTreatments from './Sample-Treatments';
import AddTreatment from './Components/AddTreatment';
//import Treatment from './Treatment';

class App extends Component {
  constructor() {
    super();
    this.addTreatment = this.addTreatment.bind(this);
    this.loadTreatments = this.loadTreatments.bind(this);
    this.state = {
      treatments: {}
    };
  }

  loadTreatments() {
    this.setState({
      treatments: SampleTreatments
    });
  }

  addTreatment(treatment) {
        //update our state
        const treatments = {...this.state.treatments};
        //add in our new treatment
        const timestamp = Date.now();
        treatments[`treatment-${timestamp}`] = treatment;
        //set state
        this.setState({ treatments });
    }


  render() {
    return (
      <div className="App">
        <MainGrid treatments={this.state.treatments} loadTreatments={this.loadTreatments} addTreatment={this.addTreatment} />
      </div>
    );
  }
}

export default App;
