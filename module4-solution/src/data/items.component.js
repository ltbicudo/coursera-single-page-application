(function () {
'use strict';

  angular.module('data')
  .component('items', {
    templateUrl: 'src/data/templates/items.component.template.html',
    bindings: {
      items: '<',
      itemCategory: '<'
    }
  });

})();
