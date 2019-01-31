// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const limit = (str, length) => {
  if (str == null) {
    return ''
  } else {
    if (str.length <= length) {
      return str
    } else {
      return str.substring(0, length) + '...'
    }
  }
}

module.exports = limit
