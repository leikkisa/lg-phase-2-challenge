const weekday = (date) => {
  if(!(date instanceof Date)){
    throw new Error("Please use a valid date.")
  }
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
  return days[date.getDay()]
}

const snippet = (string, maxlength) => {
  if((typeof string !== 'string') || !(maxlength >>> 0 === parseFloat(maxlength))) {
    throw new Error("Please use a valid string and max length.")
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
  if (!Array.isArray(array) || array.some(isNaN) || isNaN(min) || isNaN(max)) {
    throw new Error("Please enter an array of numbers, and min and max numbers.")
  }
  return array.filter(num => num >= min && num <= max)
}

module.exports = { weekday, snippet, numProps, filterBetween }
