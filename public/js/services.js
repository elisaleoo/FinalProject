/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('restaurantApp.services',[]).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});