'use strict'

const onGoToNewRide = () => {
  $('#user-output').html('Enter Ride Data')
}

const onGoToUpdateRide = () => {
  $('#user-output').html('Enter Updated Ride Data')
}

const onGoToRideHistory = () => {
  $('#user-output').html('')
}

module.exports = {
  onGoToNewRide,
  onGoToUpdateRide,
  onGoToRideHistory
}
