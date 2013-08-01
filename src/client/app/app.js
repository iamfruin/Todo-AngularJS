var app = angular.module('todoListApp', []);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/todo',
            {
                controller: 'TodoController',
                templateUrl: '/app/partials/todo.html'
            })
        .when('/contact',
            {
                templateUrl: '/app/partials/contact.html'
            })
        .otherwise({ redirectTo: '/todo' });
});




