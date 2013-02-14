var angapp = angular.module('angapp', ['ngCookies', 'posts']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //$locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);

  $routeProvider. 
      when('/posts', {controller:PostsIndexCtrl,
         templateUrl:'/assets/templates/posts/index.html'}).
      when('/posts/new', {controller:PostsCreateCtrl,
         templateUrl:'/assets/templates/posts/new.html'}).
      when('/posts/:id', {controller:PostsShowCtrl,
         templateUrl:'/assets/templates/posts/show.html'}).
      when('/posts/:id/edit', {controller:PostsEditCtrl,
         templateUrl:'/assets/templates/posts/edit.html'}).
      otherwise({redirectTo:'/posts'});
}]);

function CsrfCtrl($cookieStore){
  $cookieStore.put("XSRF-TOKEN",
                   angular.element(document.getElementById('csrf')).
                   attr('data-csrf'));
}

CsrfCtrl.$inject = ['$cookieStore'];