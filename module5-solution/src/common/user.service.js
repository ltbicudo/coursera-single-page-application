(function () {
"use strict";

  angular.module('common')
  .service('UserService', UserService);

  function UserService() {
    var userService = this;
    userService.loggedUder = undefined;

    userService.loginUser = function (user) {
      userService.loggedUder = user;
    }

    userService.isUserLogged = function () {
      if (userService.loggedUder == undefined) {
        return false;
      } else {
        return true;
      }
    }

  }

})();
