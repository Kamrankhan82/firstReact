import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './index.css';
const src1="https://picsum.photos/640/360";
const src2="https://picsum.photos/650/360";
const src3="https://picsum.photos/660/360";
ReactDOM.render(
<><h1 className="heading">Welcome to my </h1>
<div className="img_div">
<img src={src1}  alt="Random_Image" />
<img src={src2}  alt="Random_Image" />
<img src={src3}  alt="Random_Image" />
</div>
</>,document.getElementById('root')

);