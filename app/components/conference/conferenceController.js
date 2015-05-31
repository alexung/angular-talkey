talkeyApp.controller('conferenceCtrl', ['$scope', '$firebase', function($scope, $firebaseArray) {

  // $scope.getData = function() {
  //   conferenceService.async().then(function(d) {
  //     $scope.data = d;
  //   });
  // };

  $scope.message = "lol conference view";

  $scope.conferences = [
    {"conferenceId": 1,
      "eventName": "Alex's 23rd birthday",
      "numOfAttendees": 9001,
      "date": "today"
    },
    {"conferenceId": 2,
      "eventName": "Mike's birthday blast",
      "numOfAttendees": 9002,
      "date": "tomorrow"
    },
    {"conferenceId": 3,
      "eventName": "Napa Valley woohoo!",
      "numOfAttendees": 2,
      "date": "tomorrow"
    }
  ];

  var FBURL = 'https://talkeyapp.firebaseio.com/conferences'
  var ref = new Firebase(FBURL);

  $scope.meetings = $firebaseArray(ref);

  $scope.addConference = function() {
    $scope.meetings.$add({
      conferenceId: $scope.newConferenceId,
      eventName: $scope.newEventName,
      numOfAttendees: $scope.numOfAttendees,
      date: $scope.date
    });
  };

}]);

