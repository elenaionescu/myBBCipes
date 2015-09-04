'use strict';

describe('Controller: StarsCtrl', function () {

  // load the controller's module
  beforeEach(module('myBbcipesApp'));

  var StarsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StarsCtrl = $controller('StarsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
