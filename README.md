# eztimesheet

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## checkout

**Immediatly after checkout** run `bower install` and `npm install` to retrieve all dependencies defined in the package.json and bower.json files.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


---


## What

App that lets you fill in your own timesheet.
Can by handy for instance for consultants who work at an hourly rate.

It will automatically save the hours in decimals and in "hours".
So you don't have to do the converting yourself if you have to fill in
multiple timesheets using different formatting etc...

## Requirements for this app:
### must haves
* easy/intuitively to fill in hours (educated guessing when filling in hours)
* automatically saves time with decimals & with minutes
* (also see totals per month offcourse)
* backend to store everything

### nice to haves
* export to various formats (csv, xml ,json, flatfile, ... )
* extra tool that logs in to another timesheet tool and (efficy?) and fills it
in based on the exported file.
(web/javascript testframework could probably come in handy here)

### extra nice to have
* timesheet per customer
* all kinds of reports/statistics etc ...
* create invoices per customer etc... (xsl-fo?)
* ...

### Status
#### Todo
 * grunt test : has problems with the moment.js libraries
  * could be interesting to replace with angular-moment libraries or something...
 * add "monthpicker"
  * see angular libs for this
 * make app secure : must login to do something (backend?)
 * get all functions out of global scope/namespace --> actually need to create services in angularjs to get the current date, but also later to save and retrieve from backend
 * swith order of dates (from 1 -> 31 and from 31 -> 1)
 * ...


#### Done
 * Determine days of the month using current date and add them to an array
 * Show them using using html template with ng-repeat
 * differentiate between weekends etc...
 * redone program with yo anguler generator including bootstrap and html5boilertemplate
 * created and applied filters for different formats: decimals/minutes


### FYI
Development environment info:
Javascript version stuff:
* Bower version : 1.7.1
* Node version  : v4.2.3
* Npm version   : 2.14.7
* Karma version : 0.13.15
* Grunt-cli     : v0.1.13
* Grunt         : v0.4.5
