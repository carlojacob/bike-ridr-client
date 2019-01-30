'use strict'

// Require files referenced in this document
const config = require('../config')
// const store = require('../store')

// API request using AJAX (POST) for click on sign up button
const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn
//   changePassword,
//   signOut
}
