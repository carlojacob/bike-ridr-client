'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const displaySetup = require('../display/display')

let rideId

const onViewRides = event => {
  event.preventDefault()
  displaySetup.goToRideHistory()

  api.getRides()
    .then(ui.onGetRidesSuccess)
    .catch(ui.onGetRidesFailure)

  $('form').trigger('reset')
}

// Function to convert H:M:S time inputs to seconds.
const convertFormData = formData => {
  const currentRide = formData.ride
  if (currentRide.HH === '') {
    currentRide.HH = 0
  }
  if (currentRide.MM === '') {
    currentRide.MM = 0
  }
  if (currentRide.SS === '') {
    currentRide.SS = 0
  }
  currentRide.ride_time = (currentRide.HH * 60 * 60) + (currentRide.MM * 60) + parseFloat(currentRide.SS)
  currentRide.user_id = store.user.id
  currentRide.ride_distance = parseFloat(currentRide.ride_distance)
  delete currentRide.HH
  delete currentRide.MM
  delete currentRide.SS
  formData.ride = currentRide
  return formData
}

// Handler for request to create a new ride on user's account
const onCreateRide = event => {
  event.preventDefault()
  displaySetup.goToLanding()
  const formData = getFormFields(event.target)
  const rideData = convertFormData(formData)
  // const pace = rideData.ride.ride_distance / rideData.ride.ride_time
  // console.log(rideData)
  // console.log(typeof rideData.ride.ride_time)
  // console.log(pace)

  api.createRide(rideData)
    .then(ui.onCreateRideSuccess)
    .catch(ui.onCreateRideFailure)

  $('form').trigger('reset')
}

const onDoneViewingRides = () => {
  event.preventDefault()
  displaySetup.goToLanding()
}

const displayUpdateRideForm = isEdit => {
  event.preventDefault()
  displaySetup.goToUpdateRide()
  rideId = $(event.target).closest('section').data('id')
  $('#update-ride-form').on('submit', onUpdateRide)
}

const onUpdateRide = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const rideData = convertFormData(formData)

  api.updateRide(rideData, rideId)
    .then(ui.onUpdateRideSuccess)
    .catch(ui.onUpdateRideFailure)
}

const onDeleteRide = event => {
  event.preventDefault()
  const rideId = $(event.target).closest('section').data('id')

  api.deleteRide(rideId)
    .then(() => onViewRides(event))
    .catch(ui.onDeleteRideFailure)
}

const addRideEventHandlers = event => {
  $('#enter-new-ride-btn').on('click', displaySetup.goToNewRide)
  $('#view-ride-history-btn').on('click', onViewRides)
  $('#enter-new-ride-form').on('submit', onCreateRide)
  $('#view-ride-history-btn').on('click', onViewRides)
  $('#done-btn').on('click', onDoneViewingRides)
  $('#ride-history-table').on('click', '.edit-btn', displayUpdateRideForm)
  $('#ride-history-table').on('click', '.delete-btn', onDeleteRide)
}

module.exports = {
  addRideEventHandlers
}
