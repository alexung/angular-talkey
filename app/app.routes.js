talkeyApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeCtrl'
    })
    .when('/conferences', {
      templateUrl: 'app/components/conference/conferenceView.html',
      controller: 'conferenceCtrl'
    })
    .when('/conferences/signup', {
      templateUrl: 'app/components/conference/conferenceSignupView.html',
      controller: 'conferenceCtrl'
    })
    .when('/conferences/:conferenceId', {
      templateUrl: 'app/components/conference/conferenceDetailView.html',
      controller: 'conferenceDetailCtrl'
    })
    .when('/conferences/:conferenceId/signup', {
      templateUrl: 'app/components/conference/conferenceDetailSignupView.html',
      controller: 'conferenceCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    ;
}]);
