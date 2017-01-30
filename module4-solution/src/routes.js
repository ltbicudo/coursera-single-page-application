(function () {
'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    // Categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/data/templates/main-categories.template.html',
      controller: 'CategoriesController as categoriesController',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // Items
    .state('items', {
      url: '/items/{categoryId}',
      templateUrl: 'src/data/templates/main-items.template.html',
      controller: 'ItemsController as itemsController',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryId);
        }]
      }
    })

  }

})();
