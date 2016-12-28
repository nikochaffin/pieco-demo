(function(window) {
  angular.module('pieco', ['ui.router']);

  angular
    .module('pieco')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    states = [
      {
        name: 'home',
        url: '/',
        templateUrl: 'app/home/home.view.html',
        controller: 'homeCtrl as vc'
      }
    ]

    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  }
})(window);
