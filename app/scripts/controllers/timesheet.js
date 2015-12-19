'use strict';

angular.module('eztimesheetApp')
  .controller('TimesheetCtrl', function($scope) {
    var getDaysOfMonth = function(date) {

      var isSaturday = function(date) {
        return date.getDay() == 6;
      };
      var isSunday = function(date) {
        return date.getDay() == 0;
      };

      var daysOfMonth = [];

      var range = moment.range(moment(date).startOf('month'), moment(date).endOf('month'));
      range.by('days', function(dayInRange) {
        var formattedDay = moment(dayInRange).format('dddd, MMMM Do YYYY');
        var dayOfMonth = dayInRange.toDate().getDate();
        var id = 'day' + dayOfMonth;

        daysOfMonth.push({
          "id": id,
          "formattedDay": formattedDay,
          "isSaturday": isSaturday(dayInRange.toDate()),
          "isSunday": isSunday(dayInRange.toDate())
        });
      });
      return daysOfMonth;
    };

    var curDate = new Date();
    $scope.daysOfMonth = getDaysOfMonth(curDate);
  });
