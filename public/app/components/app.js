// Module

// Language support: Use https://github.com/angular-translate/angular-translate/blob/master/demo/ex1_basic_usage.htm

var client28App = angular.module("client28App", ['ngRoute', 'ngResource', 'pascalprecht.translate'])
    .config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {

        //$routeProvider
        //
        //.when("/", {
        //        templateUrl: "views/"
        //})

        $translateProvider
            .translations('en_US', {
                'TEXT_ALLO': "texte en angl"
            })
            .translations('fr_CA', {
                'TEXT_ALLO': "Texte en francais"
            });

        $translateProvider
            .preferredLanguage('en_US')
            .fallbackLanguage('fr_CA');


    }]);


client28App.controller('I18nController', ['$scope', "$translate", function ($scope, $translate) {

    // Integrate angular-translate instead of this.

    $scope.content = [];

    $scope.content['en'] = {
        text1: "One more for good measure."
    };
    $scope.content['fr'] = {
        text1: "Une de plus pour la route."
    };

    $scope.contentLangChoice = "en";

    $scope.setLang = function (lang) {
        $scope.textContent = $scope.content[lang];
    };
    $scope.setLang("en");

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    }

}]);