talkeyApp.controller('conferenceCtrl', function($scope) {
  $scope.message = "lol conference view";

  $scope.conferences = [
    {"eventName": "Alex's 23rd birthday",
      "numOfAttendees": 9001,
      "date": "today"
    },
    {"eventName": "Mike's birthday blast",
      "numOfAttendees": 9002,
      "date": "tomorrow"
    },
    {"eventName": "Napa Valley woohoo!",
      "numOfAttendees": 2,
      "date": "tomorrow"
    }
  ]

});

