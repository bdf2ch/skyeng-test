import { Task1Module } from './app/task1/task1.module';
import { Task2Module } from './app/task2/task2.module';
import { AppComponent } from './app/task1/app.component';
import { ExerciseComponent } from './app/task1/exercise/exercise.component';
import { CounterWidgetComponent } from './app/task1/counter-widget/counter-widget.component';
import { WordsComponent } from './app/task2/words.component';
//import './index.html';


export const AppModule = angular
    .module('app', [Task1Module.name, Task2Module.name]);


AppModule.controller('AppController', ['$scope', '$log', function ($scope, $log) {
    $scope.exercises = [];
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


    $scope.registerExercise = exercise => {
        $log.log('register', exercise);
        if (exercise) {
            this.exercises.push(exercise);
            $log.log(this.exercises);
        }
    };
}]);

