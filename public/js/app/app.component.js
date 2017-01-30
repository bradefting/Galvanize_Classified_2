(function() {
  'use strict';

    angular.module('app')
      .component('app', {
        templateUrl: '/js/app/app.template.html',
        controller: appController
      });

      appController.$inject = ['$http'];

      function appController($http){
        const vm = this;

        vm.$onInit = function(){
          
          console.log('working');

          $http.get('/classifieds').then(function(response){
          console.log(response);
          });
        }



      }
}());
