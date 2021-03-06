import React, { Component } from 'react'
import { FormInput, ReactForm, GroupBox } from 'nform'
import './index.css'
import {
  firstName,
  lastName,
  email,
  password, 
  confirmPassword, 
  submitButton,
  password1,
  confirmPassword1,
  checkBoxes1,
  checkBoxes2,
  checkBoxes3,
  radioBox1,
  radioBox2,
  radioBox3,
  radioBox4,
  custom,
  checkBoxGroupError,
  radioBoxGroupError
} from './FormJson';

export default class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e,formObj,errorObj,isError){
    /**
     * you can write
     * your logic here
     */
    console.log(isError);
  }
  handleBlur(e) {
    console.log("Blur called")
  }
  handleChange(e) {
    console.log("change called")
  }
  render() {
    return (
      <React.Fragment>
        <ReactForm
          onSubmit={this.handleSubmit}
          inputProps={{className:"formWrapper",name:"formWrapper",method:"POST"}}
        >
          <div className="mb5 relative">
            <FormInput inputTypeJson={firstName}  />
          </div>
          <div className="mb5 relative">
            <FormInput inputTypeJson={lastName}  />
          </div>
          <div className="mb5 relative">
            <FormInput
              inputTypeJson={email} 
              checkValidationFunc={()=>{}}
            />
          </div>
          <div className="mb5 relative">
            <FormInput inputTypeJson={password}  />
          </div>
          <div className="mb10 relative">
            <FormInput inputTypeJson={confirmPassword} />
          </div>
          <GroupBox inputTypeJson={checkBoxGroupError}>
          <div className="mb5">
            <span>Select your Favorite Pet</span>
          </div>
          <div className="mb5">
            <FormInput inputTypeJson={checkBoxes1} />
          </div>
          <div className="mb5">
            <FormInput inputTypeJson={checkBoxes2} />
          </div>
          <div className="mb10">
            <FormInput inputTypeJson={checkBoxes3} />
          </div>
          </GroupBox>
          <GroupBox inputTypeJson={radioBoxGroupError}>
          <div className="mb5">
            <span>Select your Gender</span>
          </div>
          <div className="mb10">
              <FormInput inputTypeJson={radioBox1} />
              <FormInput inputTypeJson={radioBox2} />
          </div>
          </GroupBox>
          <div className="mb5">
            <FormInput
              inputTypeJson={custom}
              onBlurCallback={this.handleBlur}
              onChangeCallback={this.handleChange}
            />
          </div>
          <div className="mb5">
            <FormInput inputTypeJson={submitButton}  />
          </div>
        </ReactForm>
      </React.Fragment>
    );
  }
}
