import { Task1Module } from '../task1.module';


export const ExerciseComponent = angular
    .module(Task1Module.name)
    .component('exercise', {
        templateUrl: 'app/task1/exercise/exercise.component.html',
        bindings: {
            onInit: '&'
        },
        require: {
            appCtrl: '^^app'
        },
        controller: ['$log', function ($log) {

            this.$onInit = () => {
                this.appCtrl.registerExercise(this);
            };

        }]
    });
