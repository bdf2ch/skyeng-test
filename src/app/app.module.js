import angular from 'angular';
import './task2/words.component';

export const AppModule = angular
    .module('app', []);


AppModule.controller('AppController', ['$scope', function ($scope) {
    $scope.words = [
        {
                word: 'Apple',
                translation: 'Яблоко'
        },
        {
                word: 'Orange',
                translation: 'Апельсин'
        },
        {
                word: 'Ball',
                translation: 'Мяч'
        },
        {
                word: 'Cow',
                translation: 'Корова'
        },
        {
                word: 'Car',
                translation: 'Автомобиль'
        },
        {
                word: 'Tree',
                translation: 'Дерево'
        },
        {
                word: 'Window',
                translation: 'Окно'
        },
        {
                word: 'Dog',
                translation: 'Собака'
        },
        {
                word: 'Cat',
                translation: 'Кот'
        },
        {
                word: 'Cup',
                translation: 'Кружка'
        }
    ];
}]);
