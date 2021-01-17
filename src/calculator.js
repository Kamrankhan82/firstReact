import React from 'react';
import ReactDOM from 'react-dom';
import * as cal from './calculator';
import Heading from './heading';
import './component.css';

ReactDOM.render(<>
    <Heading/>
<ul>
    <li>The Sum of the two number is {cal.sum(10,5)}</li>
    <li>The Difference of the two number is {cal.sub(10,5)}</li>
    <li>The Product of the two number is {cal.multi(10,5)}</li>
    <li>The Division of the two number is {cal.div(10,5)}</li>
</ul></>,
document.getElementById('root')


);