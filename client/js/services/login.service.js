angular.module('loginService', [])

.factory('LoginData', ['$http', function($http) {
  return {
    get: function() {
      return $http.post('/api/admin/create');
    },
    create: function(todoData) {
      return $http.post('/api/userprofile', todoData);
    },
    update:function(data) {
      return $http.post('/api/userprofile/update', data);
         
    },
    delete: function(id) {
      return $http.delete('/api/userprofile/' + id);
    },
    getUser: function(data) {
      return $http.post('/api/user/login', data);
    },
    getone:function(data) {
      return $http.post('/api/userprofile/getone',data);
    },
   
    }

  }]);