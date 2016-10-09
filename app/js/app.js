angular.module('myApp', [])
  .provider('config', function () {
    var config = {
      host: 'http://127.0.0.1:8080',
      catalog: ''
    };

    this.$get = function () {
      return {
        getHost: function() {
          return config.host;
        },
        getCatalog: function() {
          return config.catalog;
        }
      };
    };

    this.setHost = function(_host) {
      config.host = _host;
    };
    this.setCatalog = function(_catalog) {
      config.catalog = _catalog;
    };
  })
  .factory('myFactory', function(config) {
    return {
      urlRest: config.getHost() + '/rest/' + config.getCatalog()
    };
  })
  .controller('myController', ['$scope', 'myFactory', function($scope, myFactory) {
    $scope.data = myFactory.data;
  }]);