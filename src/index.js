
'use strict';

import Vue from 'Vue';
import App from './App';

require('./static/sass/index.scss');
console.log(App);
new Vue({
    el: '.root',
    render: h => h(App),
    methods: {
        handleClick(event) {
            console.log('按钮被点击了');
        }
    }
});

