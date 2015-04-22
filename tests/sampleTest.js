//testing suite
describe("myCtrl", function() {

    var $scope;
    var controller;

    beforeEach(function() {

        module("myApp");

        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("myCtrl", {$scope: $scope});

        });

    });
    //spec -- title, function  --> similar to individual tests
    it("and has a positive case", function() {
      expect(true).toBe(true);
    });

    it("and can have a negative case", function() {
      expect(false).not.toBe(true);
    });

    it("Should say hello", function() {
        expect($scope.message).toBe("Hello");// similar to assertion
    });

    it("Should not be empty",function(){
      expect($scope.list).toBeTruthy();
    });

    it("Should contain 2",function(){
      expect($scope.list).toContain(2);
    })

    it("Should be greater",function(){

      var init_list=$scope.list.slice(0) //deep copy
      $scope.addToEach(3)
      for( var i in init_list){
        expect(init_list[i]).toBeLessThan($scope.list[i])
      }


    })

});