var talkeyApp = angular.module('talkeyApp', ['ngRoute', 'LocalStorageModule', 'firebase']);
// when you remove ngRoute from the dependency array, the message appears

talkeyApp.config(function(localStorageServiceProvider){
  localStorageServiceProvider
    .setPrefix('talkeyPrefix')
    .setStorageType('localStorage')
    .setStorageCookie(0, '/')
    .setStorageCookieDomain(window.location)
    .setNotify(true, true)
});

