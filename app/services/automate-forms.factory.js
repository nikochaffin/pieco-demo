(function() {
  angular
    .module('pieco')
    .factory('AutomateForms', AutomateForms);

  AutomateForms.$inject = ['$http'];
  function AutomateForms($http) {
    return {
      _url: function(instance, endpoint, method) {
        return 'https://' + instance + '.nebrios.com/api/v1/' + endpoint + '/' + method;
      },

      submit: function(config) {
        console.log(_url, config.data);
        if (config.endpointPath) {
          config.endpointPath = config.endpointPath.split('.');
          var _instance = config.endpointPath[0];
          var _endpoint = config.endpointPath[1];
          var _method = config.endpointPath[2];
          var _url = this._url(_instance, _endpoint, _method);
          console.log(_url, config.data);
          return $http({
            method: 'POST',
            url: _url,
            data: config.data || {}
          });
        }
      }
    }
  }
}());
