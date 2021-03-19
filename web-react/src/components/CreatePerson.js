/*eslint-disable*/
import React, { Component } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Paper,
    TableSortLabel,
    TextField,
    Button,
    Grid

} from '@material-ui/core'

// import Grid from '@material-ui/core/Grid';

import Title from './Title'

import { MultiStepForm, Step } from 'react-multi-form';

import ImgPrev from "./ImgPrev";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export default function AddTodo() {
    let input;
    const [addTodo, { data }] = useMutation(ADD_TODO);

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({ variables: { type: input.value } });
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

// class CreatePerson extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             step: 1,

//         }
//     }


//     render() {
//         return (
//             <Paper >
//                 <Title>Create Person Database</Title>
//                 <Table>
//                     <TableBody>
//                         <TableRow >
//                             <TableCell>
//                                 <MultiStepForm activeStep={this.state.step}>
//                                     <Step label="Basic">
//                                         <p>Basic Details</p>

//                                         <Grid container spacing={2}>
//                                             <Grid item xs={12} sm={6} lg={3}>
//                                                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                                                     <ImgPrev />
//                                                     {/* <img src="img/user_default_avata.png" style={{ width: '50%' }} /> */}
//                                                 </div>
//                                             </Grid>
//                                             <Grid item xs={12} sm={6} lg={3}>
//                                                 <Grid container spacing={2}>
//                                                     <Grid item xs={12} sm={12} lg={12}>
//                                                         <TextField
//                                                             id="standard-full-width"
//                                                             label="first name"
//                                                             style={{ margin: 8 }}
//                                                             placeholder="Please input your first Name"
//                                                             // helperText="Full width!"
//                                                             fullWidth
//                                                             margin="normal"
//                                                             InputLabelProps={{
//                                                                 shrink: true,
//                                                             }}
//                                                         />
//                                                     </Grid>
//                                                     <Grid item xs={12} sm={12} lg={12}>
//                                                         <TextField
//                                                             id="standard-full-width"
//                                                             label="DOB"
//                                                             style={{ margin: 8 }}
//                                                             placeholder="Please input your Date of Birthday"
//                                                             // helperText="Full width!"
//                                                             fullWidth
//                                                             margin="normal"
//                                                             InputLabelProps={{
//                                                                 shrink: true,
//                                                             }}
//                                                         />
//                                                     </Grid>
//                                                 </Grid>
//                                             </Grid>
//                                             <Grid item xs={12} sm={6} lg={6}>
//                                                 <Grid container spacing={2}>
//                                                     <Grid item xs={12} sm={6} lg={6}>
//                                                         <TextField
//                                                             id="standard-full-width"
//                                                             label="Middle Name"
//                                                             style={{ margin: 8 }}
//                                                             placeholder="Please input your Middle Name"
//                                                             // helperText="Middle Name"
//                                                             fullWidth
//                                                             margin="normal"
//                                                             InputLabelProps={{
//                                                                 shrink: true,
//                                                             }}
//                                                         />
//                                                     </Grid>
//                                                     <Grid item xs={12} sm={6} lg={6}>
//                                                         <TextField
//                                                             id="standard-full-width"
//                                                             label="Last Name"
//                                                             style={{ margin: 8 }}
//                                                             placeholder="Please input your Last Name"
//                                                             // helperText="Full width!"
//                                                             fullWidth
//                                                             margin="normal"
//                                                             InputLabelProps={{
//                                                                 shrink: true,
//                                                             }}
//                                                         />
//                                                     </Grid>
//                                                     <Grid item xs={12} sm={12} lg={12}>
//                                                         <TextField
//                                                             id="standard-full-width"
//                                                             label="Location"
//                                                             style={{ margin: 8 }}
//                                                             placeholder="Please input your Location"
//                                                             // helperText="Middle Name"
//                                                             fullWidth
//                                                             margin="normal"
//                                                             InputLabelProps={{
//                                                                 shrink: true,
//                                                             }}
//                                                         />
//                                                     </Grid>
//                                                 </Grid>
//                                             </Grid>
//                                         </Grid>

//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', float: 'right' }}>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 2 }) }} style={{ background: '#3f51b5', color: 'white' }}>Next</Button>
//                                         </div>
//                                     </Step>
//                                     <Step label="Professional">
//                                         <p>Professional Details</p>
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 1 }) }} style={{ background: '#3f51b5', color: 'white' }}>Before</Button>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 3 }) }} style={{ background: '#3f51b5', color: 'white' }}>Next</Button>
//                                         </div>
//                                     </Step>
//                                     <Step label="Contact">
//                                         <p>Contact Details</p>
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 2 }) }} style={{ background: '#3f51b5', color: 'white' }}>Before</Button>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 4 }) }} style={{ background: '#3f51b5', color: 'white' }}>Next</Button>
//                                         </div>
//                                     </Step>
//                                     <Step label="Social">
//                                         <p>Social Details</p>
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 3 }) }} style={{ background: '#3f51b5', color: 'white' }}>Before</Button>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 5 }) }} style={{ background: '#3f51b5', color: 'white' }}>Next</Button>
//                                         </div>
//                                     </Step>
//                                     <Step label="Work Exp">
//                                         <p>Work Experience Informations</p>
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 4 }) }} style={{ background: '#3f51b5', color: 'white' }}>Before</Button>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 6 }) }} style={{ background: '#3f51b5', color: 'white' }}>Next</Button>
//                                         </div>
//                                     </Step>
//                                     <Step label="Education">
//                                         <p>Education Details</p>
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 5 }) }} style={{ background: '#3f51b5', color: 'white' }}>Before</Button>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 7 }) }} style={{ background: '#3f51b5', color: 'white' }}>Next</Button>
//                                         </div>
//                                     </Step>
//                                     <Step label="Reference">
//                                         <p>Reference Details</p>
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 6 }) }} style={{ background: '#3f51b5', color: 'white' }}>Before</Button>
//                                             <Button color="primary" onClick={() => { this.setState({ step: 7 }) }} style={{ background: '#3f51b5', color: 'white' }}>Complete</Button>
//                                         </div>
//                                     </Step>
//                                 </MultiStepForm>
//                             </TableCell>
//                         </TableRow>
//                     </TableBody>
//                 </Table>
//             </Paper>
//         )
//     }
// }


// export default CreatePerson
