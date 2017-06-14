import { Task1Module } from '../task1.module';
import './counter-widget.component.less';


export const CounterWidgetComponent = angular
    .module(Task1Module.name)
    .component('counterWidget', {
        templateUrl: 'app/task1/counter-widget/counter-widget.component.html',
        require: {
            appCtrl: '^^app'
        },
        bindings: {
            exercises: '<'
        },
        controller: ['$log', '$scope', function ($log, $scope) {

            this.correctCounter = 0;

            this.$onChanges = function (changes) {
                $log.log(changes);
            };

            this.countCorrect = function () {
                console.log(this.exercises);
                this.exercises.forEach((exercise) => {
                    let correctCounter = 0;
                    correctCounter = exercise.isCorrect ? correctCounter + 1 : correctCounter;
                    return correctCounter;
                });
            };

        }]
    });
