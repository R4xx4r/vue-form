# vue-form

:warning: **WORK IN PROGRESS - usage at your own risk** :warning:

> Simple, lightweight form configurator/builder for Vue.js

## Features & characteristics:
*  easy to use
*  configuration per json
*  default stylings
*  form validation
*  finisher
*  ... and many more


## Project setup
``` bash
# install dependencies
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Run your tests
npm run test

# Lints and fixes files
npm run lint
```


## Installation
tbd.


## Basic usage
vue-form is configured per JSON. We have two Objects to configure it. `form` and `configuration` <br>
The **form** object defines the form and all input fields. <br>
The **configuration** object defines the general things like submit handling.

## The FORM configuration block
Therefore we have some specific objects: <br>

**FORM - root element** (required) <br>
The root element has an opt. id field which defines the ID of the form element.
``` bash
form: {
  id: "",
 ...  
}
```

**ROWS** <br>
Each row has object with elements in this row.
``` bash
rows: [
  [
    {....},
    {....}
  ],
  [
    {....},
    {....}
  ]
]
```

### Types for form objects
Now we have all kind of form objects like text inputs, number inputs, ... <br>

**GROUP** <br>
This isn't a real input type, but if you want to group some inputs you can use this one. <br>
``` bash
{
  type: "group",
  elements: [
    {....},
    {....},
    {....}
  ]
}
```

**TEXT** <br>
``` bash
{
  type: "text",
  label: "",
  placeholder: "",
  name: "",
  required: false,
  errorMsg: ""
}
```

**TEXTAREA** <br>
``` bash
{
  type: "textarea",
  label: "",
  placeholder: "",
  rows: 5,
  columns: 50,
  name: "",
  required: false,
  errorMsg: ""
}
```

**RADIO BUTTONS** <br>
``` bash
{
  type: "radio",
  label: "",
  name: "",
  options: [
    "option 1",
    "option 2"
  ],
  color: "",
  required: false,
  errorMsg: ""
}
```

**CHECKBOX** <br>
``` bash
{
  type: "checkbox",
  label: "",
  name: "",
  text: "Text for checkbox",
  color: "",
  required: false,
  errorMsg: ""
}
```

## The CONFIG configuration block
**config - root element** (required)
``` bash
config: {
 ...  
}
```

### Example configuration
tbd.


## License
[MIT](http://opensource.org/licenses/MIT)
