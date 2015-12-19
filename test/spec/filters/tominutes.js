'use strict';

describe('Filter: toMinutes', function () {

  // load the filter's module
  beforeEach(module('eztimesheetApp'));

  // initialize a new instance of the filter before each test
  var toMinutes;
  beforeEach(inject(function ($filter) {
    toMinutes = $filter('toMinutes');
  }));

  it('should return the input prefixed with "toMinutes filter:"', function () {
    var text = 'angularjs';
    expect(toMinutes(text)).toBe('toMinutes filter: ' + text);
  });

});
