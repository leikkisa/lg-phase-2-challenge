#!/usr/bin/env node
var clients = require('./clients')
let state = process.argv[2]
console.log('Finding clients in state "' + state + '"...')

40: searchByName.js script prints the client id and rep_name for all clients whose rep_name starts with the provided name argument.
40: searchByState.js script prints the client id, rep_name, company, city, and state that for all clients whose state matches the provided state argument.
