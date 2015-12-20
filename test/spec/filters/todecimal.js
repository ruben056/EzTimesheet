'use strict';

describe('Filter: toDecimal', function() {

  // load the filter's module
  beforeEach(module('eztimesheetApp'));

  // initialize a new instance of the filter before each test
  var toDecimal;
  beforeEach(inject(function($filter) {
    toDecimal = $filter('toDecimal');
  }));

  it('should return the input:"', function() {
    expect(toDecimal('3')).toBe('3');
    expect(toDecimal('30')).toBe('30');
  });

  it('should return the input with zeros filled out at the end:"', function() {
    expect(toDecimal('3,00')).toBe('3,00');
    expect(toDecimal('3,05')).toBe('3,05');
    expect(toDecimal('3,50')).toBe('3,50');
    expect(toDecimal('3,5')).toBe('3,50');

    expect(toDecimal('3.00')).toBe('3,00');
    expect(toDecimal('3.05')).toBe('3,05');
    expect(toDecimal('3.50')).toBe('3,50');
    expect(toDecimal('3.5')).toBe('3,50');
  });

  it('should return the input with minutes converted to decimals:"', function() {
    expect(toDecimal('3:00')).toBe('3,00');
    expect(toDecimal('3:03')).toBe('3,05');
    expect(toDecimal('3:30')).toBe('3,50');
    expect(toDecimal('3:3')).toBe('3,50');
  });

  // special case: experimatal to ease the input for the user:
  // 3 digits : assumes first digit is hours, the rest is minutes
  // when minitus > 60, an hour is added...
  it('should return a decimal represantation:"', function() {
    expect(toDecimal('830')).toBe('8,50');
    expect(toDecimal('990')).toBe('10,50');
    expect(toDecimal('203')).toBe('2,05');
    expect(toDecimal('230')).toBe('2,50');
    expect(toDecimal('3:3')).toBe('3,50');
    expect(toDecimal('859')).toBe('8,98');
    expect(toDecimal('861')).toBe('9,02');
  });

});
