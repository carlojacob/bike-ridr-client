'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const convertTimeToSeconds = formData => {
  formData.ride.ride_time = (formData.ride.HH * 60 * 60) + (formData.ride.MM * 60) + (formData.ride.SS)
  delete formData.ride.HH
  delete formData.ride.MM
  delete formData.ride.SS
  return formData
}

const onCreateRide = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const rideData = convertTimeToSeconds(formData)
  console.log(rideData)
}

const addRideEventHandlers = event => {
  $('#enter-new-ride-form').on('submit', onCreateRide)
}

module.exports = {
  addRideEventHandlers
}
