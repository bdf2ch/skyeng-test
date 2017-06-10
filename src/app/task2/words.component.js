import angular from 'angular';
import { Task2Module } from './task2.module';
import './words.component.html';
import './words.component.css';


export const WordsComponent = angular
    .module(Task2Module.name)
    .component('words', {
        bindings: {
           words: '<'
        },
        templateUrl: 'app/task2/words.component.html',
        controller: ['$log', '$document', function ($log, $document) {
            //let words = this.words = [];
            let currentWord = this.currentWord = undefined;
            let currentWordIndex = this.currentWordIndex = 0;

            this.$onInit = function () {
                $log.log('words', this.words);
                currentWord = this.words[currentWordIndex];
            };

            this.$postLink = function () {
                angular.element($document).on('keydown', function (e) {
                    $log.log(e.which);
                    if (e.which === 32) {
                        currentWordIndex++;
                        $log.log(currentWordIndex);
                        currentWord = this.words[currentWordIndex];
                    }
                });
            };

        }]
    });
