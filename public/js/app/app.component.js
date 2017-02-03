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

        vm.posts = [];

        vm.$onInit = function(){

          $http.get('/classifieds').then(function(response){
            console.log(response);
            for(let i =0; i<response.data.length; i++){
              vm.posts.push(response.data[i])
            }
          });

        }//end onInit

        vm.createPost = function(){

          $http.post('/classifieds', vm.post).then(function(response){
            // console.log(response);
            delete vm.post;
          })

        }//end new post



      }
}());
