'use strict'

// Require files referenced in this document
const config = require('../config')
const store = require('../store')

// API request using AJAX (POST) for click on sign up button
const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

// API request using AJAX (POST) for click on sign in button
const signIn = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

// API request using AJAX (PATCH) for click on change password button
const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword
//   signOut
}
