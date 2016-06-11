/* eslint-disable import/default */
import './style.css';
import React from 'react';
import {render} from 'react-dom';

import ListApp from './components/ListApp'

render(
	<ListApp />, document.getElementById('app')
);
