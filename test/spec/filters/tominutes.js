'use strict';

describe('Filter: toMinutes', function () {

  // load the filter's module
  beforeEach(module('eztimesheetApp'));

  // initialize a new instance of the filter before each test
  var toMinutes;
  beforeEach(inject(function ($filter) {
    toMinutes = $filter('toMinutes');
  }));

  it('should return the input with decimals converted to minutes', function () {
    expect(toMinutes('8,50')).toBe('8:30');
  });

});
