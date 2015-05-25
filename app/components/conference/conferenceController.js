talkeyApp.controller('conferenceCtrl', function($scope) {

  var self = this;

  self.lol = "lololololol";

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
  ]

});

