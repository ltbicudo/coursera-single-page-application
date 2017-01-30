(function () {
'use strict';

  angular.module('data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itemsController = this;
    itemsController.itemCategory = items.category.name;
    itemsController.items = items.menu_items;
  }

})();
