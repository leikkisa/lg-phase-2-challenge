#!/usr/bin/env node
var clients = require('./clients')
let name = process.argv[2]
console.log('Finding clients with name "' + name + '"...')

function filterByName(item) {
  if (item.rep_name.toLowerCase().startsWith(name.toLowerCase())) {
    return true
  }
  return false
}

var clientsByName = clients.filter(filterByName)

console.log(clientsByName)
