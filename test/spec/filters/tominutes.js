'use strict';

describe('Filter: toMinutes', function() {

  // load the filter's module
  beforeEach(module('eztimesheetApp'));

  // initialize a new instance of the filter before each test
  var toMinutes;
  beforeEach(inject(function($filter) {
    toMinutes = $filter('toMinutes');
  }));

  it('should return the input:"', function() {
    expect(toMinutes('3')).toBe('3:00');
    expect(toMinutes('30')).toBe('30:00');
  });

  it('should return the input as a time with minutes:"', function() {
    expect(toMinutes('3,00')).toBe('3:00');
    expect(toMinutes('3,05')).toBe('3:03');
    expect(toMinutes('3,50')).toBe('3:30');
    expect(toMinutes('3,5')).toBe('3:30');

    expect(toMinutes('3.00')).toBe('3:00');
    expect(toMinutes('3.05')).toBe('3:03');
    expect(toMinutes('3.50')).toBe('3:30');
    expect(toMinutes('3.5')).toBe('3:30');
  });

  it('should return the input with with zeros filled at the end:"', function() {
    expect(toMinutes('3:00')).toBe('3:00');
    expect(toMinutes('3:03')).toBe('3:03');
    expect(toMinutes('3:30')).toBe('3:30');
    expect(toMinutes('3:3')).toBe('3:30');
  });

  // special case: experimatal to ease the input for the user:
  // 3 digits : assumes first digit is hours, the rest is minutes
  // when minitus > 60, an hour is added...
  it('should return a time represantation:"', function() {
    expect(toMinutes('830')).toBe('8:30');
    expect(toMinutes('990')).toBe('10:30');
    expect(toMinutes('203')).toBe('2:03');
    expect(toMinutes('230')).toBe('2:30');
    expect(toMinutes('3:3')).toBe('3:30');
  });

});
