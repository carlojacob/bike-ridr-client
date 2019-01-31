'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onViewRides = () => {
  event.preventDefault()

  api.getRides()
    .then(ui.onGetRidesSuccess)
    .catch(ui.getRidesFailure)

  $('form').trigger('reset')
}

// Function to convert H:M:S time inputs to seconds.
const convertTimeToSeconds = formData => {
  formData.ride.ride_time = (formData.ride.HH * 60 * 60) + (formData.ride.MM * 60) + parseInt(formData.ride.SS)
  formData.user_id = store.user.id
  delete formData.ride.HH
  delete formData.ride.MM
  delete formData.ride.SS
  return formData
}

// Handler for request to create a new game on user's account
const onCreateRide = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const rideData = convertTimeToSeconds(formData)

  api.createRide(rideData)
    .then(ui.createRideSuccess)
    .catch(ui.createRideFailure)

  $('form').trigger('reset')
}

const addRideEventHandlers = event => {
  $('#enter-new-ride-form').on('submit', onCreateRide)
  $('#view-ride-history-form').on('submit', onViewRides)
}

module.exports = {
  addRideEventHandlers
}
