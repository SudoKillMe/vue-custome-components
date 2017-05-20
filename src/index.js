/*
 * @Author: techer
 * @Date:   2017-03-30 18:58:21
 * @Last Modified by:   techer
 * @Last Modified time: 2017-03-30 19:16:15
 */

'use strict';

import Vue from 'Vue';
import MFButton from './components/button/Button';
import MFCol from './components/col';
import MFRow from './components/row';
require('./static/sass/button.scss');
require('./static/sass/col.scss');
new Vue({
    el: '.root',
    components: {
        'mf-button': MFButton,
        'mf-row': MFRow,
        'mf-col': MFCol


    },
    methods: {
        handleClick(event) {
            console.log('按钮被点击了');
        }
    }
});

