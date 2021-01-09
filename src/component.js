import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import curDate, {heading, paragraph, list} from './App';


ReactDOM.render(
<>
    {heading()}
    <curDate/>
    {paragraph()}
    { list()}
</>,
    document.getElementById('root')
);