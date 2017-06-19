#!/usr/bin/env node
var clients = require('./clients')
let state = process.argv[2]
console.log('Finding clients in state "' + state + '"...')

var clientsByState = clients.filter((item) => item.state.toLowerCase() === state.toLowerCase())

var selectedPropsByState = clientsByState.map(function(item) {
   var result = {}
   result.id = item.id
   result.rep_name = item.rep_name
   result.company = item.company
   result.city = item.city
   result.state = item.state
   return result
})

console.log(selectedPropsByState)
