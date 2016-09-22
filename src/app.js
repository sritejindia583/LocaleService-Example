/**
 * Created by sritej583 on 17/9/16.
 */
 'using strict'

angular.module('myApp', [])

angular.module('myApp').controller('LocaleController', ['$scope','$locale', function($scope, $locale) {
    $scope.myDate = new Date()
    $scope.formattedDate = $locale.DATETIME_FORMATS.fullDate;
}])