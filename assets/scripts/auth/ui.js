'use strict'

// Require files referenced in this document
// const store = require('../store')

// Action(s) to perform on successful API request on sign up
const onSignUpSuccess = () => {
  $('#user-output').text('Account Successfully Created')
}

// Action(s) to perform on failed API request on sign up
const onSignUpFailure = () => {
  $('#user-output').text('Account Could Not Be Created')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
  // onSignInSuccess,
  // onSignInFailure,
  // onSignOutSuccess,
  // onSignOutFailure,
  // onChangePasswordSuccess,
  // onChangePasswordFailure
}
