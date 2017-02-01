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
      MenuService.getItem(signUpCtrl.registerData.favoriteDish).then(function (result) {
        signUpCtrl.invalidFavoriteDish = false;
        UserService.loginUser(signUpCtrl.registerData);
        signUpCtrl.registerOK = true;
      }, function (error) {
        signUpCtrl.invalidFavoriteDish = true;
      });
    }

  }

})();
