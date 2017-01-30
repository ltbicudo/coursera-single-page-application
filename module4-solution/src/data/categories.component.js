(function () {
'use strict';

  angular.module('data')
  .component('categories', {
    templateUrl: 'src/data/templates/categories.component.template.html',
    bindings: {
      items: '<'
    }
  });

})();
