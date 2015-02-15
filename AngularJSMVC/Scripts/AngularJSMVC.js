var AngularJSMVC = angular.module('AngularJSMVCApp', ['ngRoute']);

AngularJSMVC.controller = ('LandingPageController', LandingPageController);
AngularJSMVC.controller = ('LoginController', LoginController);

AngularJSMVC.factory =('AuthHttpResponseInterceptor',AuthHttpResponseInterceptor);

var ConfigFunction = function ($routeProvider,$httpProvider) {
    $routeProvider.when('/routeOne',
        {
            templateUrl: 'routesDemo/one'
        })
    .when('/routeTwo/:donuts',
    {
        templateUrl: function (params) { return 'routesDemo/two?donuts=' + params.donuts; }
    })
    .when('/routeThree',
    {
        templateUrl: 'routesDemo/three'
    })
    .when('/login',
    {
        templateUrl: '/Account/Login',
        conroller : LoginController
    });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
ConfigFunction.$inject = ['$routeProvider','$httpProvider'];
AngularJSMVC.config(ConfigFunction);