'use strict'

const ui = require('./ui')

const goToSignedOut = () => {
  $('#user-output-container').show()
  $('#sign-up-or-in').show()
  $('#change-password-sign-out').hide()
  $('#enter-or-view-ride').hide()
  $('#enter-new-ride-container').hide()
  $('#enter-new-ride-form-test').hide()
  $('#update-ride-container').hide()
  $('#update-ride-form-test').hide()
  $('#ride-history-container').hide()
}

const goToLanding = () => {
  $('#user-output-container').show()
  $('#sign-up-or-in').hide()
  $('#change-password-sign-out').show()
  $('#enter-or-view-ride').show()
  $('#enter-new-ride-container').hide()
  $('#enter-new-ride-form-test').hide()
  $('#update-ride-container').hide()
  $('#update-ride-form-test').hide()
  $('#ride-history-container').hide()
}

const goToNewRide = () => {
  event.preventDefault()
  ui.onGoToNewRide()
  $('#user-output-container').show()
  $('#sign-up-or-in').hide()
  $('#change-password-sign-out').hide()
  $('#enter-or-view-ride').hide()
  $('#enter-new-ride-container').show()
  $('#enter-new-ride-form-test').show()
  $('#update-ride-container').hide()
  $('#update-ride-form-test').hide()
  $('#ride-history-container').hide()
}

const goToUpdateRide = () => {
  ui.onGoToUpdateRide()
  $('#user-output-container').show()
  $('#sign-up-or-in').hide()
  $('#change-password-sign-out').hide()
  $('#enter-or-view-ride').hide()
  $('#enter-new-ride-container').hide()
  $('#enter-new-ride-form-test').hide()
  $('#update-ride-container').show()
  $('#update-ride-form-test').show()
  $('#ride-history-container').hide()
}

const goToRideHistory = () => {
  ui.onGoToRideHistory()
  $('#user-output-container').show()
  $('#sign-up-or-in').hide()
  $('#change-password-sign-out').hide()
  $('#enter-or-view-ride').hide()
  $('#enter-new-ride-container').hide()
  $('#enter-new-ride-form-test').hide()
  $('#update-ride-container').hide()
  $('#update-ride-form-test').hide()
  $('#ride-history-container').show()
}

module.exports = {
  goToSignedOut,
  goToLanding,
  goToNewRide,
  goToUpdateRide,
  goToRideHistory
}
