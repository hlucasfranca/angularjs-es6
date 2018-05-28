import angular from 'angular';
import _ from 'lodash';

import uirouter from '@uirouter/angularjs';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'

  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/hlucasfranca/angularjs-es6';
    this.nome = 'nome';
    let a = _.clone({});
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
