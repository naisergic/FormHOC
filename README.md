# formhoc

> it is a HOC for all of the form input type it will handle error and also maintain the state of every form input type

[![NPM](https://img.shields.io/npm/v/formhoc.svg)](https://www.npmjs.com/package/formhoc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save formhoc
```

## Usage

```jsx
import React, { Component } from 'react'
import './index.css'
import FormHOC from 'formhoc'

export default class App extends Component {
  render () {
    return (
      <div>
        <FormHOC inputProps={
          {
            type: 'input',
            labelprops: {label: 'Email', inputprops:{className:"labels",id:"emailLabel"}},
            checkvalidationonblur: "true",
            validationstocheck: [{regexToCheck: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, errorMsg: 'Invalid Email Format'}],
            errormsgprops:{
              className:'errorClass',
              id:'emailError'
            },
            errormsgparagraphprops: {
              id: 'emailErrorPara'
            }
          }} />
        <FormHOC inputProps={
          {
            type: 'password',
            labelprops: {label: 'Password'},
            checkvalidationonchange: "true",
            validationstocheck: [{regexToCheck: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, errorMsg: 'Invalid Password Format'}]
          }} />
          <FormHOC inputProps={
          {
            type: 'select',
            options:[{value:"IN",label:"INDIA"},{value:"US",label:"USA"}],
            labelprops: {label: 'Country'},
            optionprops:{},
            id:"select1",
            ariadescribedby:{
              ariadescribedbymsg:"list of country",
              className:"hide",
              id:"ariaDescribedForCountry"
            }
          }} />
      </div>
    )
  }
}
```

## License

y © [Naisergic](https://github.com/Naisergic)
y © [Ayush-krishnatray](https://github.com/Ayush-krishnatray)
