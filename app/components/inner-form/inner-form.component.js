angular.module('myApp').component('innerForm', {
    templateUrl: 'components/inner-form/inner-form.component.html',
    controller: InnerFormCtrl,
    controllerAs: 'inner'
  });


  InnerFormCtrl.$inject = ['$scope'];

  function InnerFormCtrl ($scope) {
    this.$onInit = function() {
    }
  }
  