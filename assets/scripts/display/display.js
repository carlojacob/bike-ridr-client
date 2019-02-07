'use strict'

const ui = require('./ui')

const goToSignedOut = () => {
  $('#user-output-container').show()
  $('#sign-up-or-in').show()
  $('#change-password-sign-out').hide()
  $('#enter-or-view-ride').hide()
  $('#enter-new-ride-form').hide()
  $('#update-ride-form').hide()
  $('#ride-history-container').hide()
}

const goToLanding = () => {
  $('#user-output-container').show()
  $('#sign-up-or-in').hide()
  $('#change-password-sign-out').show()
  $('#enter-or-view-ride').show()
  $('#enter-new-ride-form').hide()
  $('#update-ride-form').hide()
  $('#ride-history-container').hide()
}

const goToNewRide = () => {
  event.preventDefault()
  ui.onGoToNewRide()
  $('#user-output-container').show()
  $('#sign-up-or-in').hide()
  $('#change-password-sign-out').hide()
  $('#enter-or-view-ride').hide()
  $('#enter-new-ride-form').show()
  $('#update-ride-form').hide()
  $('#ride-history-container').hide()
}

const goToUpdateRide = () => {
  ui.onGoToUpdateRide()
  $('#user-output-container').show()
  $('#sign-up-or-in').hide()
  $('#change-password-sign-out').hide()
  $('#enter-or-view-ride').hide()
  $('#enter-new-ride-form').hide()
  $('#update-ride-form').show()
  $('#ride-history-container').hide()
}

const goToRideHistory = () => {
  ui.onGoToRideHistory()
  $('#user-output-container').hide()
  $('#sign-up-or-in').hide()
  $('#change-password-sign-out').hide()
  $('#enter-or-view-ride').hide()
  $('#enter-new-ride-form').hide()
  $('#update-ride-form').hide()
  $('#ride-history-container').show()
}

module.exports = {
  goToSignedOut,
  goToLanding,
  goToNewRide,
  goToUpdateRide,
  goToRideHistory
}
