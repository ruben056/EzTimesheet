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

    // todo can i use map() function here??
    var getYearsRange = function(yearsBack, yearsForward, startDate) {
      var range = moment.range(moment(startDate).subtract(yearsBack, 'years'), moment(startDate).add(yearsForward, 'years'));
      var result = [];
      range.by('years', function(momentInRange) {
        result.push(moment(momentInRange).format('YYYY'));
      });
      return result;
    };

    // todo can i use map() function here??
    var getMonths = function(startDate) {
      var range = moment.range(moment(startDate).startOf('year'), moment(startDate).endOf('year'));
      var result = [];
      range.by('months', function(momentInRange) {
        var lbl = moment(momentInRange).format('MMM');
        var id = moment(momentInRange).format('M');
        result.push({
          label: lbl,
          id: id,
          idx: id-1
        });
      });
      return result;
    }

    var curDate = new Date();
    $scope.years = getYearsRange(5, 5, curDate);
    $scope.selectedYear = moment(curDate).format('YYYY');
    $scope.yearChanged = function(year) {
      console.log('actual selected year : ' + year);
      console.log('$scope.selectedYear : ' + $scope.selectedYear);
    };
    $scope.months = getMonths(curDate);
    $scope.selectedMonth = {
      id: moment(curDate).format('M'),
      lbl: moment(curDate).format('MMM'),
      idx:0
    };
    $scope.monthChanged = function(year, month) {
      var selectedMonth = new Date(year, month.idx);
      $scope.daysOfMonth = getDaysOfMonth(selectedMonth);  
    };

    $scope.daysOfMonth = getDaysOfMonth(curDate);
  });
