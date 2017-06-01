angular.module('admin', ['ngCookies', 'ui.bootstrap', 'ngFileUpload'])

.controller('adminController', ['$http', '$routeParams', '$cookieStore', 'AdminData', 'Upload', function($http, $routeParams, $cookieStore, AdminData, Upload) {
	var vm = this;

	vm.adminData = {};
	vm.adminData.question;
	vm.counter = 3;
	vm.loading = true;
	vm.adminData.option = [];
	vm.adminData.answer;
	vm.error = false;
	vm.addquestion = addquestion;


	function addquestion() {
		submit();

	}
	vm.get=function() {
		AdminData.get()
		.then(function(res){
			   console.log(res.data);
               vm.questionData=res.data;
		});
	};
	vm.getNumber = function() {
		var count = [];
		for (var i = 0; i < vm.counter; i++) {
			count.push(i);
		}


		return count;
	}
	vm.getChar = function(count) {
		return String.fromCharCode('A'.charCodeAt() + count);
	}
	vm.cancel = function(count) {
		vm.adminData = {};
		vm.counter = 3;
	}

	function submit() {
		AdminData.createq(vm.adminData)
			.then(function(res) {
				vm.adminData = {};
				vm.counter = 3;
				alert("Question added successfully")
			});
	}
	vm.upload = function(file) {

		Upload.upload({
				url: '/api/admin/upload/image',
				data: {
					file: file
				}
			})
			.then(function(resp) {
				console.log(resp.data);
				vm.adminData.path = resp.data;
				// $scope.formEdit.path = resp.data.data;
			});
	};


}]);