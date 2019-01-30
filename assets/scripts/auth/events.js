'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)

    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('form').trigger('reset')
}

const onSignIn = event => {
  event.preventDefault()
  console.log('This works!')
}

const onChangePassword = event => {
  event.preventDefault()
  console.log('This works!')
}

const onSignOut = event => {
  event.preventDefault()
  console.log('This works!')
}

const addAuthEventHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addAuthEventHandlers
}
