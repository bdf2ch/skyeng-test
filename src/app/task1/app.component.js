import { Task1Module } from './task1.module';


export const AppComponent = angular
    .module(Task1Module.name)
    .component('app', {
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: ['$log', function ($log) {
            this.exercises = [];

            this.registerExercise = exercise => {
                if (exercise) {
                    this.exercises.push(exercise);
                    $log.log(this.exercises);
                }
            };

        }]
    });