/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('restaurantApp',['ui.router','ngResource','restaurantApp.controllers', 'restaurantApp.services']);

angular.module('restaurantApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('restaurants',{
        url:'/restaurants',
        templateUrl:'partials/restaurants.html',
        controller:'RestaurantListController'
    }).state('viewRestaurant',{
       url:'/restaurant/:id',
       templateUrl:'partials/restaurant-view.html',
       controller:'RestaurantViewController'
    }).state('newRestaurant',{
        url:'/restaurants/new',
        templateUrl:'partials/restaurant-add.html',
        controller:'RestaurantCreateController'
    }).state('editRestaurant',{
        url:'/restaurants/:id/edit',
        templateUrl:'partials/restaurant-edit.html',
        controller:'RestaurantEditController'
    });
}).run(function($state){
   $state.go('restaurants');
});