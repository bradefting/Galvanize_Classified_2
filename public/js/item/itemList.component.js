(function() {
  'use strict';

  angular.module('app')
    .component('itemList', {
      controller: itemController,
      templateUrl: 'js/item/itemList.template.html'
    });

    itemController.$inject = ['$http'];

    function itemController($http){
      const vm = this;

      vm.showItemForm = false;
      vm.$onInit = $onInit;
      vm.createItem = createItem;
      vm.openForm = openForm;

      function $onInit(){
        $http.get('/classifieds')
          .then((response) => {
            console.log(response);
            vm.items = response.data;
          });
      }

      function createItem(){
        $http.post('/classifieds', vm.item)
          .then((response) => {
            delete vm.item;
            vm.showItemForm = false;
            vm.$onInit();
          });
      }

      function openForm(){
        vm.newItemForm = !vm.newItemForm;
      }

    }

}());
