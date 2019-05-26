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

### Configuration / Form
Therefore we have some specific objects: <br>
**FORM - root element** (required)
``` bash
form: {
 ...  
}
```

**ROWS** <br>
This rows array has objects for each row in form.
``` bash
rows: [
  {....},
  {....},
  {....}
]
```

### Configuration / Configuration
**configuration - root element** (required)
``` bash
configuration: {
 ...  
}
```

### Example configuration
tbd.


## License
[MIT](http://opensource.org/licenses/MIT)
