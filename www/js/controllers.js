angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    $scope.username = $scope.loginData.username;
    $scope.password = $scope.loginData.password;
    if ($scope.username == "jay" && $scope.password == "abc"){
        console.log('it matches');
        $state.go('app.main');
    }
    
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('MainCtrl', function($scope, $stateParams) {
  console.log("on main controller");
    
  $scope.apps = [
      { title: 'App 1', description: 'Money Maker', media_url:'https://telegram.org/img/t_logo.png',id: 1 },
      { title: 'App 2', description: 'Exotic Animals', media_url:'http://cdn.appstorm.net/iphone.appstorm.net/files/2010/06/iPhoneFinance-22.jpg', id: 2 },
      { title: 'App 3', description: 'Everything Furry',media_url: 'http://a5.mzstatic.com/us/r30/Purple/v4/8d/35/36/8d3536f3-57df-fb5f-1584-eb8a05df8d35/icon128-2x.png', id: 3 }
    ];
})

.controller('DashboardCtrl', function($scope, $stateParams) {
  
});

