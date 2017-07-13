#!/usr/bin/env node
const clients = require('./clients')
const name = process.argv[2]

if (name === undefined) {
  console.log("Please include the first letters of a name when running this file, for example: node searchByName.js Ad")
} else {
  console.log('Finding clients with name "' + name + '"...')

  const clientsByName = clients.filter((item) => item.rep_name.toLowerCase().startsWith(name.toLowerCase()))

  const idAndRepByName = clientsByName.map(function(item) {
    let result = {}
    result.id = item.id
    result.rep_name = item.rep_name
    return result
  })
  if (idAndRepByName.length === 0) {
    console.log("No results found.")
  } else {
    console.log(idAndRepByName)
  }
}
