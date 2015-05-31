talkeyApp.controller('conferenceDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.conferenceId = $routeParams.conferenceId;

    $scope.meetings = [
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


  var FBURL = 'https://talkeyapp.firebaseio.com/conferences/' + $scope.conferenceId +'/'
  var ref = new Firebase(FBURL);

  $scope.meetings = $firebaseArray(ref);

  $scope.addSpeakerToConference = function() {
    //WHAT TO PUT HERE? BELOW IS NOT CORRECT
    $scope.conferences.$add({
      conferenceId: $scope.newConferenceId,
      eventName: $scope.newEventName,
      numOfAttendees: $scope.numOfAttendees,
      date: $scope.date
    });
  };


  }]);
