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
    .when('/conferences/:conferenceId', {
       templateUrl: 'app/components/conference/individConferenceView.html',
      controller: 'conferenceCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
    ;
}]);
