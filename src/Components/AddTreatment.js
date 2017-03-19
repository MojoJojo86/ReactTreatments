import React, { Component } from 'react';
import { Button, Header, Form } from 'semantic-ui-react'


const oncologists = [
        { key: 'opp', text: 'OPP', value: 'OPP' },
        { key: 'osd', text: 'OSD', value: 'OSD' },
        { key: 'cjf', text: 'CJF', value: 'CJF' },
        { key: 'mya', text: 'MYA', value: 'MYA' },
        { key: 'vs', text: 'VS', value: 'VS' },
        { key: 'jl', text: 'JL', value: 'JL' },
        { key: 'bhf', text: 'BHF', value: 'BHF' },
        { key: 'opp', text: 'OPP', value: 'MQH' },
        { key: 'opp', text: 'OPP', value: 'PMF' },
        { key: 'opp', text: 'OPP', value: 'RC' },
        { key: 'opp', text: 'OPP', value: 'SDP' },
        { key: 'opp', text: 'OPP', value: 'JEM' },
        { key: 'opp', text: 'OPP', value: 'SR' },
        { key: 'opp', text: 'OPP', value: 'KSD' },
        { key: 'opp', text: 'OPP', value: 'CEL' },
        { key: 'opp', text: 'OPP', value: 'CHB' },
        { key: 'opp', text: 'OPP', value: 'TD' },
    ]

const treatsites = [
        { key: 'lt breast', text: 'Lt Breast', value: 'Lt Breast' },
        { key: 'lt cwall', text: 'Lt CWall', value: 'Lt Cwall' },
        { key: 'rt breast', text: 'Rt Breast', value: 'Rt Breast' },
        { key: 'rt cwall', text: 'Rt Cwall', value: 'Rt Cwall' },
        { key: 'prost/pelvis', text: 'Prostate/Pelvis', value: 'Prostate/Pelvis' },
        { key: 'prost chhip', text: 'Prostate CHHIP', value: 'Prostate CHHIP' },
        { key: 'prost bed', text: 'Prostate Bed', value: 'Prostate Bed' },
        { key: 'lt lung', text: 'Lt Lung', value: 'Lt Lung' },
        { key: 'rt lung', text: 'Rt Lung', value: 'Rt Lung' },
        { key: 'cervix', text: 'Cervix', value: 'Cervix' },
        { key: 'vulva', text: 'Vulva', value: 'Vulva' },
        { key: 'rectum', text: 'Rectum', value: 'Rectum' },
        { key: 'anus', text: 'Anus', value: 'Anus' },
        { key: 'brain', text: 'Brain', value: 'Brain' },
        { key: 'oeso', text: 'Oesophagus', value: 'Oesophagus' },
        { key: 'nasopharynx', text: 'Nasopharynx', value: 'Nasopharynx' },
        { key: 'oropharynx', text: 'Oropharynx', value: 'Orophaynx' },
        { key: 'tonsil', text: 'Tonsil', value: 'Tonsil' },
        { key: 'parotid', text: 'Parotid', value: 'Parotid' },
        { key: 'limb', text: 'Limb', value: 'Limb' },
        { key: 'thyroid eye', text: 'Thyroid Eye', value: 'Thyroid Eye' },
        { key: 'sabr lung', text: 'SABR Lung', value: 'SABR Lung' },

    ]

const treattypes = [
        { key: 'simple', text: 'Simple', value: 'Simple' },
        { key: 'convmlc', text: 'Conventional-MLC', value: 'Conventional-MLC' },
        { key: 'finf', text: 'Field in Field', value: 'FieldinField' },
        { key: 'imrt', text: 'IMRT', value: 'IMRT' },
        { key: 'rapidarc', text: 'Rapid Arc', value: 'Rapid Arc' },
]

class AddTreatment extends Component {
    createTreatment(event) {
        event.preventDefault();
        const treatment = {
            key: Date.now(),
            date: Date.UTC(),
            hospnum: this.hospnum.value,
            ptsurname: this.ptsurname.value,
            ptfirstname: this.ptfirstname.value,
            treatmentsite: this.treatmentsite.value,
            oncologist: this.oncologist.value,
            energy: this.energy.value,
            treatmenttype: this.treatmenttype.value,
            staffmember: this.staffmember.value,
        }
        this.props.addTreatment(treatment);
        this.treatmentForm.reset();
    }
    
    render() {
        return(
            <Form ref={(input) => this.treatmentForm = input} className="add-treatment" onSubmit={(e) => this.createTreatment(e)}>
                <Form.Input ref={(input) => this.hospnum = input} type="text" placeholder="AB1234" />
                <Form.Input ref={(input) => this.ptsurname = input} type="text" placeholder="Doe" />
                <Form.Input ref={(input) => this.ptfirstname = input} type="text" placeholder="John" />              
                <Form.Select ref={(input) => this.treatmentsite = input} options={treatsites} placeholder="Lt Breast" />
                <Form.Select ref={(input) => this.oncologist = input} options={oncologists} placeholder="OSD" />
                
                <Form.Select ref={(input) => this.treatmenttype = input} options={treattypes} placeholder="Rapid Arc" />
                <Form.Input ref={(input) => this.staffmember = input} type="text" placeholder="Staff Initals" />
                <Form.Checkbox label='All data is filled in' />
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}

export default AddTreatment;