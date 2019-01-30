'use strict'

// Require files referenced in this document
const store = require('../store')

// Action(s) to perform on successful API request on sign up
const onSignUpSuccess = () => {
  $('#user-output').text('Account Successfully Created')
}

// Action(s) to perform on failed API request on sign up
const onSignUpFailure = () => {
  $('#user-output').text('Account Could Not Be Created')
}

// Action(s) to perform on successful API request on sign in
const onSignInSuccess = responseData => {
  $('#user-output').html('Successfully Signed In. Did you ride today?')
  // $('#user-output').append('<p>Player X\'s turn<p>')
  // // hide sign-up and sign-in container
  // $('#sign-up-or-in').hide()
  // // show reset and history container
  // $(`#reset-and-history`).show()
  // // show game board container
  // $('#game-board').show()
  // // show reset button
  // $('#reset').show()
  // // show change password and sign-out container
  // $('#change-password-sign-out').show()
  // store user data for current session
  store.user = responseData.user
  console.log(store)
}

// Action(s) to perform on failed API request on sign in
const onSignInFailure = () => {
  $('#user-output').text('Could Not Sign In. Please Try Again')
}

// Action(s) to perform on successful API request on change password
const onChangePasswordSuccess = formData => {
  $('#user-output').text('Password Changed. Please Record Your New Password')
}

// Action(s) to perform on failed API request on change password
const onChangePasswordFailure = () => {
  $('#user-output').text('Could Not Change Password. Please Try Again')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
  // onSignOutSuccess,
  // onSignOutFailure
}
