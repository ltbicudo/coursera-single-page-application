(function () {
"use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService) {
    var signUpCtrl = this;
    signUpCtrl.invalidFavoriteDish = false;
    signUpCtrl.registerOK = false;

    signUpCtrl.register = function () {
      UserService.loginUser(signUpCtrl.registerData);
      signUpCtrl.registerOK = true;

      // MenuService.getItem(signUpCtrl.registerData.favoriteDish).then(function (result) {
      //   signUpCtrl.invalidFavoriteDish = false;
      //   signUpCtrl.registerData.favoriteDishItem = result;
      //   UserService.loginUser(signUpCtrl.registerData);
      //   signUpCtrl.registerOK = true;
      // }, function (error) {
      //   signUpCtrl.invalidFavoriteDish = true;
      // });
    }

    signUpCtrl.invalidFavoriteDishCheck = function () {
      if (signUpCtrl.registerData) {
        MenuService.getItem(signUpCtrl.registerData.favoriteDish).then(function (result) {
          signUpCtrl.invalidFavoriteDish = false;
          signUpCtrl.registerData.favoriteDishItem = result;
          return false;
        }, function (error) {
          signUpCtrl.invalidFavoriteDish = true;
          return true;
        });
      }
      return true;
    }

  }

})();
