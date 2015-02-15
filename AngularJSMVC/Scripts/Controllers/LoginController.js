var LoginController = function ($scope, $routeParams) {
    $scope.loginForm = {
        emailAddress: '',
        password: '',
        rememberMe: false,
        returnUrl: $routeParams.returnUrl
    };
    $scope.login=function(){
        // to do
    }

}
LoginController.$inject=['$scope','$routeParams'];