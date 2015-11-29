/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('restaurantApp.controllers', []).controller('RestaurantListController', function ($scope, $state, popupService, $window, $http) {

    // $scope.movies=Movie.query();
    
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
            restaurant.$delete(function () {
                $window.location.href = '';
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

}).controller('RestaurantCreateController', function ($scope, $state, $stateParams, $http) {

    $scope.addRestaurant = function () {
        $http({
            method: 'POST',
            url: '/api/restaurant',
            params: { name: $scope.restaurant.name,
                        about: $scope.restaurant.about,
                        address: $scope.restaurant.address,
                        phone: $scope.restaurant.phone
            }
        }).then(function successCallback(response) {
            console.log(response)
            $scope.restaurant = response.data
            
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
        //    $state.go('restaurants');
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