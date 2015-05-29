talkeyApp.factory('conferenceService', function($http) {
  var myService = {
    async: function() {
      var promise = $http.get('app/components/conference/conferenceData.json').then(function(response) {
        console.log(response);

        return response.data;
      });
      return promise;
    }
  };
  return conferenceService;
});
