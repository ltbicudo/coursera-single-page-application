(function () {
"use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService', 'ApiPath']
  function MyInfoController(UserService, ApiPath) {
    var myInfoController = this;
    myInfoController.basePath = ApiPath;
    myInfoController.registerData = UserService.getLoggedUser();

    myInfoController.displayMyInfoPage = function () {
      return UserService.isUserLogged();
    }

  }

})();
