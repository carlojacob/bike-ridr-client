'use strict'

// Require files referenced in this document
const store = require('../store')
const displaySetup = require('../display/display')

// Action(s) to perform on successful API request on sign up
const onSignUpSuccess = () => {
  // $('#exampleModalCenter').modal('toggle')
  $('#user-output').html('Account Successfully Created')
}

// Action(s) to perform on failed API request on sign up
const onSignUpFailure = () => {
  $('#user-output').html('Account Could Not Be Created')
}

// Action(s) to perform on successful API request on sign in
const onSignInSuccess = responseData => {
  displaySetup.goToLanding()
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
}

// Action(s) to perform on failed API request on sign in
const onSignInFailure = () => {
  $('#user-output').html('Could Not Sign In. Please Try Again')
}

// Action(s) to perform on successful API request on change password
const onChangePasswordSuccess = formData => {
  $('#user-output').html('Password Changed. Please Record Your New Password')
}

// Action(s) to perform on failed API request on change password
const onChangePasswordFailure = () => {
  $('#user-output').text('Could Not Change Password. Please Try Again')
}

// Action(s) to perform on successful API request on sign out
const onSignOutSuccess = responseData => {
  displaySetup.goToSignedOut()
  $('#user-output').text('Successfully Signed Out. Have a Great Day!')
  // // show sign-up and sign-in container
  // $('#sign-up-or-in').show()
  // // hide reset and history container
  // $(`#reset-and-history`).hide()
  // // hide game board container
  // $('#game-board').hide()
  // // hide reset button
  // $('#reset').hide()
  // // hide change password and sign-out container
  // $('#change-password-sign-out').hide()
  // remove user data for closed session
  store.user = null
}

// Action(s) to perform on failed API request on sign out
const onSignOutFailure = () => {
  $('#user-output').html('Could Not Sign Out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
