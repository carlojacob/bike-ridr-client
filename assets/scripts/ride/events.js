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
const convertFormData = formData => {
  formData.ride.ride_time = (formData.ride.HH * 60 * 60) + (formData.ride.MM * 60) + parseFloat(formData.ride.SS)
  formData.ride.user_id = store.user.id
  formData.ride.ride_distance = parseFloat(formData.ride.ride_distance)
  delete formData.ride.HH
  delete formData.ride.MM
  delete formData.ride.SS
  return formData
}

// Handler for request to create a new game on user's account
const onCreateRide = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const rideData = convertFormData(formData)
  // const pace = rideData.ride.ride_distance / rideData.ride.ride_time
  // console.log(rideData)
  // console.log(typeof rideData.ride.ride_time)
  // console.log(pace)

  api.createRide(rideData)
    .then(ui.createRideSuccess)
    .catch(ui.createRideFailure)

  $('form').trigger('reset')
}

const addRideEventHandlers = event => {
  $('#enter-new-ride-form').on('submit', onCreateRide)
  $('#view-ride-history-form').on('submit', onViewRides)
  // $('#ride-history-table').on('click', '.done-btn', console.log('Button in Ride History Table works'))
}

module.exports = {
  addRideEventHandlers
}
