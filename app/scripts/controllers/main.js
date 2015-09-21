'use strict';

/**
 * @ngdoc function
 * @name coulditberealApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coulditberealApp
 */
angular.module('coulditberealApp')
    .controller('MainCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('ContactCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('LoginCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('AboutCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('RegisterCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.master = {};
        $scope.update = function (user) {
            $scope.master = angular.copy(user);
        };
        $scope.reset = function () {
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
        $scope.message = "FUCK OFF";

    })
.directive('validateEquals', [function() {
    return {
        require: 'ng-model',
        link: function(scope, elem, attrs, ctrl) {
            var password2 = '#' + attrs.validateEquals;
            console.log(attrs);
            elem.add(password2).on('focusout', function() {
                scope.$apply(function() {
                    var v = elem.val()===$(password1).val();
                    ctrl.$setValidity('inputmatches', v);
                });
            });
        }
    };
}]);