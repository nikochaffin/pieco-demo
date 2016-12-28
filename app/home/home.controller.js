(function() {
  angular
    .module('pieco')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'AutomateForms'];
  function homeCtrl($scope, AutomateForms) {
    var vc = this;
    vc.signup = {};
    vc.onSignupFormSubmit = function(data, form) {
      if(form.$valid) {
        AutomateForms.submit({
          endpointPath: 'gonebritest.pieco_api.client_signup',
          data: vc.signup
        })
        .then(function(response) {
          console.log(response.data);
          vc.response = response.data;
        });
      }
    }
  }
}());
