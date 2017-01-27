(function () {
  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
  .constant('DavidsRestaurantBaseRestEndpoint', "https://davids-restaurant.herokuapp.com/");

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowIt = this;

    narrowIt.narrowIt = function () {
      if (narrowIt.searchTerm != "") {
        MenuSearchService.getMatchedMenuItems(narrowIt.searchTerm).then(function (result) {
          narrowIt.found = result;
        });
      } else {
        narrowIt.found = [];
      }
    }

    narrowIt.removeItem = function functionName(index) {
      narrowIt.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http', 'DavidsRestaurantBaseRestEndpoint'];
  function MenuSearchService($http, DavidsRestaurantBaseRestEndpoint) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        url: (DavidsRestaurantBaseRestEndpoint + '/menu_items.json')
      }).then(function functionName(result) {
        var foundItens = [];
        for (var i = 0; i < result.data.menu_items.length; i++) {
          if (result.data.menu_items[i].description.indexOf(searchTerm) != -1) {
            foundItens.push(result.data.menu_items[i]);
          }
        }
        return foundItens;
      });
    }
  }

  function FoundItemsDirectiveController() {
    var foundItems = this;
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      restric: 'E',
      scope: {
        found: '<items',
        onRemove: '&'
      },
      controller: 'FoundItemsDirectiveController',
      controllerAs: 'foundItems',
      bindToController: true
    };

    return ddo;
  }

})();
