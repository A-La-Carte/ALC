import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import '../templates/FontAwesome';
import MainRouter from '../templates/MainRouter';
import '../style/Styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(MainRouter),
    document.getElementById('react-main'),
  );
});
