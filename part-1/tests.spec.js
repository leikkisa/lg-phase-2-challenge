const { weekday, snippet, numProps, filterBetween } = require('./functions')

describe('weekday()', function() {

  it('returns Monday', function() {
    const date = new Date(2017, 5, 19) // June 19, 2017
    expect(weekday(date)).toEqual('Mon');
  })

  it('returns Thursday', function() {
    const date = new Date(2017, 5, 19) // June 19, 2017
    expect(weekday(new Date(2017, 5, 15))).toEqual('Thu')
  });

  it('Throws an error if not passed a valid date', function() {
    expect( function(){ weekday('hello') } ).toThrow(new Error("Please use a valid date."))
  })

})

describe('snippet()', function() {

  it('returns snippet with ellipses', function() {
    expect(snippet("For the following exercises,", 10)).toEqual("For the fo...");
  })

  it('returns full expression without ellipses if less than max length', function() {
    expect(snippet("Hello, world!", 20)).toEqual("Hello, world!")
  })

  it('Throws an error if not passed a valid snippet', function() {
    expect( function(){ snippet("hello", "goodbye") } ).toThrow(new Error("Please use a valid max length."))
  })

})

describe('numProps()', function() {

  it('returns the number of properties of an object', function() {
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    expect(numProps(friend)).toEqual(3)
  })

  it('returns number of properties of an empty object', function() {
    expect(numProps({})).toEqual(0)
  })

  it('Throws an error if not passed a valid object', function() {
    expect( function(){ numProps(42) } ).toThrow(new Error("Please use a valid object."))
  })

});

describe('filterBetween()', function() {

  it('returns only parts of the array within the range defined by min and max', function() {
    let arr = [ 1, 2, 3, 4, 5, 6, 7 ]
    expect(filterBetween(arr, 3, 6)).toEqual([ 3, 4, 5, 6 ])
    expect(filterBetween(arr, 5, 10)).toEqual([ 5, 6, 7 ])
  })

  it('Throws an error if passed invalid inputs', function() {
    expect( function(){ filterBetween([ 100, 200, 300 ], 'hello', 'goodbye') } ).toThrow(new Error("Please enter valid min and max numbers."))
  })

});
