angular.module('adminService', [])

.factory('AdminData', ['$http', function($http) {
  return {
    createq: function(data) {
      return $http.post('/api/admin/createQ',data);
    },
    get: function(data) {
      return $http.post('/api/admin/getquestion',data);
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
    getAdmin: function(data) {
      return $http.post('/api/user/auth', data);
    },
    getone:function(data) {
      return $http.post('/api/userprofile/getone',data);
    },
   
    }

  }]);