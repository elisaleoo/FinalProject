/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('restaurantApp.controllers', []).controller('RestaurantListController', function ($scope, $state, popupService, $window, $http) {
    
    $http({
        method: 'GET',
        url: '/api'
    }).then(function successCallback(response) {
        $scope.restaurants = response.data
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    $scope.deleteRestaurant = function (restaurant) {
        if (popupService.showPopup('Really delete this?')) {
                $http({
                    method: 'DELETE',
                    url: '/api/restaurant',
                    data: restaurant
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }
    }

}).controller('RestaurantViewController', function ($scope, $stateParams, $http) {

    console.log($stateParams)
    $http({
        method: 'GET',
        url: '/api/restaurant',
        params: { id: $stateParams.id }
    }).then(function successCallback(response) {
        console.log(response)
        $scope.restaurant = response.data
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

}).controller('RestaurantCreateController', function ($scope, $state, $http) {
    $scope.restaurant = {}
    $scope.addRestaurant = function () {
        var restaurant = $scope.restaurant
        console.log(restaurant)
        $http({
            method: 'POST',
            url: '/api/restaurant',
            data: {   name: restaurant.name,
                        about: restaurant.about,
                        address: restaurant.address,
                        phone: restaurant.phone
            }
        }).then(function successCallback(response) {
            $state.go('restaurants');
            
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert('Um erro aconteceu ao tentar salvar o restaurante')
        });
    }

}).controller('RestaurantEditController', function ($scope, $state, $stateParams, $http) {

    console.log($stateParams)
    $http({
        method: 'PUT',
        url: '/api/restaurant',
        params: { id: $stateParams.id }
    }).then(function successCallback(response) {
        console.log(response)
        $scope.restaurant = response.data
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });


    // $scope.updateRestaurant = function () {
    //     $scope.restaurant.$update(function () {
    //         $state.go('restaurants');
    //     });
    // };

    // $scope.loadRestaurant = function () {
    //     $scope.restaurant = Restaurant.get({ id: $stateParams.id });
    // };

    // $scope.loadRestaurant();
});