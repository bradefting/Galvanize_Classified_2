(function() {
 'use strict';

 angular.module('app')
   .component('itemEdit', {
     controller: editController,
     templateUrl: 'js/item/itemEdit.template.html'
   });

   editController.$inject = ['$http', '$stateParams', '$state'];

   function editController($http, $stateParams, $state){
     const vm = this;

     vm.$onInit = $onInit;
     vm.editItem = editItem;
     vm.deleteItem = deleteItem;

     function $onInit() {
       $http.get(`/classifieds/${$stateParams.id}`)
         .then((response) => {
           vm.item = response.data;
         });
     }

     function editItem() {
       $http.patch(`/classifieds/${$stateParams.id}`, vm.item)
         .then((response) => {
             $state.go('home');
         });
     }

     function deleteItem(){
       console.log('delete');
       $http.delete(`/classifieds/${$stateParams.id}`)
         .then((response) => {
           $state.go('home');
       });
     }
   }

}());
