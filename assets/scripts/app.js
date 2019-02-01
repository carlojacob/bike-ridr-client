'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authenticationEvents = require('./auth/events')
const rideEvents = require('./ride/events')
const displaySetup = require('./display/display')

displaySetup.goToSignedOut()

$(() => {
  authenticationEvents.addAuthEventHandlers(event)
  rideEvents.addRideEventHandlers(event)
})
