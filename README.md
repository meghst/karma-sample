# karma-sample
##AngularJS + Karma + Jasmine

### Set Up
* Install angular and ngMock
  ```
  $ npm install --save angular
  $ npm install --save-dev angular-mocks
  ```
* Install karma CLI
  ```
  $ npm install -g karma-cli
  ```
* Install Karma + plugins - in project's directory
  ```
  $ npm install --save-dev karma karma-jasmine karma-chrome-launcher
  ```
* Start Karma
  ```
  $ karma start
  ```

### Notes
* to generate the karma.conf.js file
  ```
  $ karma init
  ```
* [ngMock](https://docs.angularjs.org/api/ngMock) - allows you to inject and mock Angular services for unit tests
* describe( _title , function_ ) - spceifies a test suite
* it( _title , function_ ) - known as a spec, contains one test
* _expect_ - similar to an assert
* Refer to [Jasmine Introduction](http://jasmine.github.io/2.2/introduction.html) for documentation for jasmine
* Refer to [Unit Testing for AngularJS](https://docs.angularjs.org/guide/unit-testing) to know more about testing tools.
