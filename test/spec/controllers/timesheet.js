'use strict';

describe('Controller: TimesheetCtrl', function () {

  // load the controller's module
  beforeEach(module('eztimesheetApp'));

  var TimesheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimesheetCtrl = $controller('TimesheetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should return the number of days this month', function () {
    expect(scope.daysOfMonth.length).toBe(31);
  });

  // TODO add some more test ...

});
