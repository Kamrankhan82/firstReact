import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curdate=new Date(2020, 12, 2, 15);
curdate=curdate.getHours();
let heading="";
const cssStyle={};
if(curdate>=1&&curdate<=11){
    heading="Good Morning";
    cssStyle.color="green";
}else if(curdate>=12&&curdate<=19){
    heading="Good Afternoon";
    cssStyle.color="orange";
}else{
    heading="Good Night";
    cssStyle.color="black";
}
ReactDOM.render(
<>
<div>
<h1>Hey user, <span style={cssStyle}>{heading}</span></h1>
</div>
</>
,document.getElementById('root'));