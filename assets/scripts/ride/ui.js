'use strict'

const displaySetup = require('../display/display')

// Action(s) to perform on successful API request to create ride
const onCreateRideSuccess = formData => {
  $('#user-output').html('New Ride Saved!')
}

// Action(s) to perform on failed API request on change password
const onCreateRideFailure = () => {
  $('#user-output').html('Could Not Create a New Ride. Please Try Again')
}

const showRidesTemplate = require('../templates/ride-listing.handlebars')

const formatRideTime = rideData => {
  rideData.rides.forEach(ride => {
    ride.HH = Math.floor(ride.ride_time / 3600)
    ride.MM = Math.floor(ride.ride_time / 60) - (ride.HH * 60)
    ride.SS = ride.ride_time.toFixed(2) - (ride.HH * 3600).toFixed(2) - (ride.MM * 60).toFixed(2)
    ride.HH = ride.HH.toString()
    ride.MM = ride.MM.toString()
    ride.SS = ride.SS.toFixed(2)
    if (ride.MM.length === 1) {
      ride.MM = '0' + ride.MM
    }
    if (ride.SS.length === 4) {
      ride.SS = '0' + ride.SS
    }
  })
  return rideData
}

const onGetRidesSuccess = rideData => {
  if (rideData.rides.length === 0) {
    $('#user-output').html('You Have No Saved Rides! Enter a New Ride!')
    displaySetup.goToLanding()
  } else {
    displaySetup.goToRideHistory()
    const convertedRideData = formatRideTime(rideData)
    const showRidesHTML = showRidesTemplate({ rides: convertedRideData.rides })
    $('#ride-history-table').html(showRidesHTML)
  }
}

const onGetRidesFailure = () => {
  $('#user-output').html('Could Not Get Ride History. Please Try Again')
}

const onUpdateRideSuccess = () => {
  $('#user-output').html('Ride Updated!')
  displaySetup.goToLanding()
  // const convertedRideData = formatRideTime(rideData)
  // const showRidesHTML = showRidesTemplate({ rides: convertedRideData.rides })
  // $('#ride-history-table').html(showRidesHTML)
}

const onUpdateRideFailure = () => {
  $('#user-output').html('Could Not Update Ride Data. Please Try Again')
}

const onDeleteRideFailure = () => {
  $('#user-output').html('Could Not Update Ride Data. Please Try Again')
}

module.exports = {
  onCreateRideSuccess,
  onCreateRideFailure,
  onGetRidesSuccess,
  onGetRidesFailure,
  onUpdateRideSuccess,
  onUpdateRideFailure,
  onDeleteRideFailure
}
