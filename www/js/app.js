// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.glossary', {
    url: "/glossary",
    views: {
      'menuContent': {
        templateUrl: "templates/glossary.html"
      }
    }
  })

  .state('app.event_details', {
    url: "/event_details",
    views: {
      'menuContent': {
        templateUrl: "templates/event_details.html"
      }
    }
  })

  .state('app.event_schedule', {
    url: "/event_schedule",
    views: {
      'menuContent': {
        templateUrl: "templates/event_schedule.html"
      }
    }
  })

  .state('app.floor_diagrams', {
    url: "/floor_diagrams",
    views: {
      'menuContent': {
        templateUrl: "templates/floor_diagrams.html"
      }
    }
  })

  .state('app.setup_diagrams', {
    url: "/setup_diagrams",
    views: {
      'menuContent': {
        templateUrl: "templates/setup_diagrams.html"
      }
    }
  })

  .state('app.staff', {
    url: "/staff",
    views: {
      'menuContent': {
        templateUrl: "templates/staff.html"
      }
    }
  })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
