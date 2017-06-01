angular.module('login', ['ngCookies', 'ui.bootstrap'])

.controller('loginController', ['$http', '$routeParams', '$cookieStore', 'LoginData', 'AdminData', function($http, $routeParams, $cookieStore, LoginData, AdminData) {
	var vm = this;
	
	vm.loading = true;
	vm.error = false;



	vm.login = function() {
		if (vm.formLogin.username != undefined && vm.formLogin.password != undefined) {
			vm.loading = true;

			LoginData.getUser(vm.formLogin)
				.then(function(data) {
					vm.loading = false;
					console.log(data);
					if (data.data == null || data.data.status=='error') {
						vm.formLogin = {};
						vm.error = true;
						window.location = '/'
					} else if (data.data.role== 0) {

						vm.error = false;
						$cookieStore.put('userName', data.data.userid);
						$cookieStore.put('userD', data.data._id);

						window.location = '/#!/admin';
					}

				});


		}
	};
	vm.initUser = function() {
		var login = {
			'userid': $cookieStore.get('userName')
		};

		Userprofile.findUser(login)
			.then(function(data) {
					console.log(data.data.path);
					vm.userData = data.data;
					vm.userData.remaintime = Userprofile.calculateTime(data.data, vm.$parent.todos);
					vm.userData.path = data.data.path.slice(7);

				}


			)
	};
	//Clock.TimeCtrl(vm);
	vm.logout = function() {
		$cookieStore.remove('userName');
		$cookieStore.remove('userD');
	};



}]);