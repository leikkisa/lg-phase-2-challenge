const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

const weekday = date => {
  if(!(date instanceof Date)){
    throw new Error("Please use a valid date.")
  }
  return DAYS[date.getDay()]
}

const snippet = (string, maxlength) => {
  if(typeof string !== 'string') {
    throw new Error("Please use a valid string.")
  }
  if (!(maxlength >>> 0 === parseFloat(maxlength))) { // checks if maxlength is a positive integer
    throw new Error("Please use a valid max length.")
  }
  return string.slice(0,maxlength) + (string.length > maxlength ? '...' : '')
}

const numProps = (object) => {
  if(typeof object !== 'object') {
    throw new Error("Please use a valid object.")
  }
  return Object.keys(object).length
}

const filterBetween = (array, min, max) => {
  if (!Array.isArray(array) || array.some(isNaN) ) {
    throw new Error("Please enter an array of numbers")
  }
  if (isNaN(min) || isNaN(max)) {
    throw new Error("Please enter valid min and max numbers.")
  }
  return array.filter(num => num >= min && num <= max)
}

module.exports = { weekday, snippet, numProps, filterBetween }
