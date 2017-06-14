import { Task2Module } from './task2.module';
import './words.component.html';
import './words.component.less';


export const WordsComponent = angular
    .module(Task2Module.name)
    .component('words', {
        bindings: {
           words: '<'
        },
        templateUrl: 'app/task2/words.component.html',
        controller: ['$log', '$scope', '$document', function ($log, $scope, $document) {
            this.currentWordIndex = 0;


            this.$postLink = () => {
                angular.element($document).on('keydown', (e) => {
                    if (e.which === 32) {
                        this.currentWordIndex = this.currentWordIndex + 1 < this.words.length ? this.currentWordIndex + 1 : 0;
                        $scope.$apply();
                    }
                });
            };

        }]
    });
