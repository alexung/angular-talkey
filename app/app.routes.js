talkeyApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeCtrl'
    })
    .when('/conferences', {
      templateUrl: 'app/components/conference/conferenceView.html',
      controller: 'conferenceCtrl'
    });
});
