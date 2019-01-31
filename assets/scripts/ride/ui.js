'use strict'

// Action(s) to perform on successful API request to create ride
const onCreateRideSuccess = formData => {
  $('#user-output').html('Congratulations on Your New Ride!')
}

// Action(s) to perform on failed API request on change password
const onCreateRideFailure = () => {
  $('#user-output').html('Could Not Create a New Ride. Please Try Again')
}

const showRidesTemplate = require('../templates/ride-listing.handlebars')

const onGetRidesSuccess = rideData => {
  console.log(rideData)
}

const onGetRidesFailure = () => {
  $('#user-output').html('Could Not Get Ride History. Please Try Again')
}
// ************************************************ //

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').html(showBooksHtml)
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  clearBooks,
  failure
}

module.exports = {
  onCreateRideSuccess,
  onCreateRideFailure,
  onGetRidesSuccess,
  onGetRidesFailure
}
