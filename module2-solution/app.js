(function () {
  angular.module("ShoppingListCheckOff", [])

  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
  toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyList();

  toBuy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  }

}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuy =
    [
      {name : "Cookies", quantity : 5},
      {name : "Bread", quantity : 2},
      {name : "Soda", quantity : 4},
      {name : "Chips", quantity : 8},
      {name : "Jam", quantity : 1}
    ];
  var bought = [];

  service.getToBuyList = function () {
    return toBuy;
  }

  service.getBoughtList = function () {
    return bought;
  }

  service.buyItem = function (index) {
    bought.push(toBuy[index]);
    toBuy.splice(index, 1);
  }

}

})();
