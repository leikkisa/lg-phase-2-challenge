#!/usr/bin/env node
var clients = require('./clients')
let name = process.argv[2]
console.log('Finding clients with name "' + name + '"...')

var clientsByName = clients.filter((item) => item.rep_name.toLowerCase().startsWith(name.toLowerCase()))

var idAndRepByName = clientsByName.map(function(item) {
   var result = {}
   result.id = item.id
   result.rep_name = item.rep_name
   return result
})

console.log(idAndRepByName)
