<template>
  <div id="vue-form">
    <!-- <Form :formData="form" :config="config" /> -->
    <ExampleForm :formData="form" :config="config" />
  </div>
</template>

<script>
  //import Form from './components/Form.vue';
  import ExampleForm from './components/Example.vue';

  export default {
    name: 'VueForm',
    components: {
      //Form,
      ExampleForm
    },
    data() {
      return {
        form: {
          id: 'example-form',
          rows: [
            [
              {
                type: 'radio',
                label: 'Gender',
                name: 'gender',
                options: [
                  'female',
                  'male'
                ],
                width: '75%',
                color: '#0000ff'
              }
            ],
            [
              {
                type: 'text',
                label: 'Firstname',
                placeholder: 'Firstname',
                name: 'firstname',
                required: true,
                errorMsg: 'Please insert firstname!'
              },
              {
                type: 'text',
                label: 'Lastname',
                placeholder: 'Lastname',
                name: 'lastname'
              }
            ],
            [
              {
                type: 'text',
                label: 'Street',
                placeholder: 'Street',
                name: 'street'
              },
              {
                type: 'group',
                elements: [
                  {
                    type: 'text',
                    label: 'Streetnumber',
                    placeholder: 'Nr.',
                    name: 'streetnumber',
                  },
                  {
                    type: 'text',
                    label: 'Doornumber',
                    placeholder: 'door',
                    name: 'doornumber',
                  }
                ]
              }
            ],
            [
              {
                type: 'textarea',
                label: 'Message',
                placeholder: 'Message',
                rows: 5,
                columns: 50,
                name: 'message',
                required: true,
                errorMsg: 'Please insert a message!'
              }
            ],
            [
              {
                type: 'checkbox',
                label: 'DSGVO',
                name: 'dsgvo',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                color: '#0000ff',
                required: true,
                errorMsg: 'Please acceppt out terms.'
              }
            ],
            [
              {
                type: 'submit',
                text: 'Send Button',
                backgroundColor: '#FF0000',
                color: '#FFF',
                width: '25%'
              }
            ]
          ]
        },
        config: {

        }
      }
    }
  }
</script>
