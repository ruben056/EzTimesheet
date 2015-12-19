'use strict';

angular.module('eztimesheetApp')
  .filter('toMinutes', function() {

    return function(val) {

      if (val == undefined || val.length == 0) {
        return;
      }

      // check if value contains : or . or , and numbers, or only numbers
      // then based on these foundings format the input accordingly
      var hours;
      var minutes;
      if (val.indexOf(":") > -1) {
        if (val.length > 5) {
          $input.val('');
          return;
        }
        var parts = val.split(":");
        hours = parts[0];
        minutes = parts[1];
        while (minutes >= 60) {
          hours++;
          minutes -= 60;
        }
      } else if (val.indexOf(".") > -1) {
        var parts = val.split(".");
        var hours = parts[0];
        var decimals = parts[1];
        // TODO not quit right here: reprocase: put 5,5 and 5,05 are treated the same
        var power = decimals.length;
        var minutes = decimals / (1 * Math.pow(10, power)) * (0.6 * Math.pow(10, power));
        minutes = minutes.toFixed().substr(0, 2);
      } else if (val.indexOf(",") > -1) {
        var parts = val.split(",");
        var hours = parts[0];
        var decimals = parts[1];
        var power = decimals.length;
        var minutes = decimals / (1 * Math.pow(10, power)) * (0.6 * Math.pow(10, power));
        minutes = minutes.toFixed().substr(0, 2);
      } else {
        //if 1 or 2 numbers assume hours so add :00
        //if more just use the last 2 as minutes (only minutes supported for now, support decimals later...)
        if (val.length < 3) {
          if (val > 23) {
            hours = "";
            minutes = val;
            while (minutes >= 60) {
              hours++;
              minutes -= 60;
            }
          } else {
            hours = val;
            minutes = 0;
          }

        } else if (val.length < 5) {
          var hours = val.substring(0, 1);
          var minutes = val.substring(1, val.length);
          while (minutes >= 60) {
            hours++;
            minutes -= 60;
          }
        }
      }
      if (minutes.toString().length < 2) {
        minutes = "0" + minutes
      }
      return hours + ":" + minutes
    };
  });
