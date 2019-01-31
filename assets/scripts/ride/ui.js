'use strict'

// Action(s) to perform on successful API request to create ride
const onCreateRideSuccess = formData => {
  $('#user-output').html('Congratulations on Your New Ride!')
}

// Action(s) to perform on failed API request on change password
const onCreateRideFailure = () => {
  $('#user-output').html('Could Not Create a New Ride. Please Try Again')
}

module.exports = {
  onCreateRideSuccess,
  onCreateRideFailure
}
