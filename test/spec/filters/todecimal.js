'use strict';

describe('Filter: toDecimal', function () {

  // load the filter's module
  beforeEach(module('eztimesheetApp'));

  // initialize a new instance of the filter before each test
  var toDecimal;
  beforeEach(inject(function ($filter) {
    toDecimal = $filter('toDecimal');
  }));

  it('should return the input prefixed with "toDecimal filter:"', function () {
    var text = 'angularjs';
    expect(toDecimal(text)).toBe('toDecimal filter: ' + text);
  });

});
