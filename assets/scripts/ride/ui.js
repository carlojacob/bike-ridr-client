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

const formatRideTime = rideData => {
  rideData.rides.forEach(ride => {
    ride.HH = Math.floor(ride.ride_time / 3600)
    ride.MM = Math.floor(ride.ride_time / 60) - (ride.HH * 60)
    ride.SS = Math.floor(ride.ride_time) - (ride.HH * 3600) - (ride.MM * 60)
    ride.HH = ride.HH.toString()
    ride.MM = ride.MM.toString()
    ride.SS = ride.SS.toString()
    if (ride.MM.length === 1) {
      ride.MM = '0' + ride.MM
    }
    if (ride.SS.length === 1) {
      ride.SS = '0' + ride.SS
    }
  })
  return rideData
}

const onGetRidesSuccess = rideData => {
  console.log(rideData)
  const convertedRideData = formatRideTime(rideData)
  console.log(convertedRideData)
  const showRidesHTML = showRidesTemplate({ rides: convertedRideData.rides })
  $('#ride-history-table').html(showRidesHTML)
}

const onGetRidesFailure = () => {
  $('#user-output').html('Could Not Get Ride History. Please Try Again')
}

// ************************************************ //

// const getBooksSuccess = (data) => {
//   console.log(data)
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   $('.content').html(showBooksHtml)
// }
//
// const clearBooks = () => {
//   $('.content').empty()
// }
//
// const failure = (error) => {
//   console.error(error)
// }
//
// module.exports = {
//   getBooksSuccess,
//   clearBooks,
//   failure
// }

// ************************************************ //

module.exports = {
  onCreateRideSuccess,
  onCreateRideFailure,
  onGetRidesSuccess,
  onGetRidesFailure
}
