import angular from 'angular';
import { Task2Module } from './app/task2/task2.module';
import { WordsComponent } from './app/task2/words.component';

export const AppModule = angular
    .module('app', [Task2Module.name]);


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
