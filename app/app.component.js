(function() {
  'use strict';

    angular.module('app')
      .component('app', {
        templateUrl: "/app/app.template.html",
        controller: mainController
      });

      function mainController(){
        const vm = this;

        vm.$onInit = function(){
          console.log('read me');
        }

      }
}());
