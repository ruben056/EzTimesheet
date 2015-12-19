'use strict';

describe('Filter: toDecimal', function () {

  // load the filter's module
  beforeEach(module('eztimesheetApp'));

  // initialize a new instance of the filter before each test
  var toDecimal;
  beforeEach(inject(function ($filter) {
    toDecimal = $filter('toDecimal');
  }));

  it('should return the input with minutes converted to decimals:"', function () {
    expect(toDecimal('8:30')).toBe('8,50');
  });

});
