'use strict'

const config = require('../config')
const store = require('../store')

const createRide = rideData => {
  return $.ajax({
    url: config.apiUrl + '/rides',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: rideData
  })
}

const getRides = () => {
  return $.ajax({
    url: config.apiUrl + '/rides',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getRides,
  createRide
}
