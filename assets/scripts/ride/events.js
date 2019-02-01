'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

let rideId

const onViewRides = () => {
  event.preventDefault()

  api.getRides()
    .then(ui.onGetRidesSuccess)
    .catch(ui.onGetRidesFailure)

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

// Handler for request to create a new ride on user's account
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

const onDoneViewingRides = () => {
  event.preventDefault()
  // $('#ride-history-container').hide()
  console.log('Done!')
}

const displayUpdateRideForm = isEdit => {
  event.preventDefault()
  rideId = $(event.target).closest('section').data('id')
  console.log('Carlo, edit ride data now.')
  // Add code to show "New Ride" form.
  $('#update-ride-form').on('submit', onUpdateRide)
}

const onUpdateRide = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const rideData = convertFormData(formData)
  console.log(`Edited ${rideId}!`)

  api.updateRide(rideData, rideId)
    .then(ui.onUpdateRideSuccess)
    .catch(ui.onUpdateRideFailure)
}

const onDeleteRide = () => {
  event.preventDefault()
  const rideId = $(event.target).closest('section').data('id')
  console.log(`Deleted ${rideId}!`)

  api.deleteRide(rideId)
    .then(ui.onDeleteRideSuccess)
    .catch(ui.onDeleteRideFailure)
}

const addRideEventHandlers = event => {
  $('#enter-new-ride-form').on('submit', onCreateRide)
  $('#view-ride-history-form').on('submit', onViewRides)
  $('#done-btn').on('click', onDoneViewingRides)
  $('#ride-history-table').on('click', '.edit-btn', displayUpdateRideForm)
  $('#ride-history-table').on('click', '.delete-btn', onDeleteRide)
}

module.exports = {
  addRideEventHandlers
}
