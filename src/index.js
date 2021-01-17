import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Sdata from './Sdata';

ReactDOM.render(<>
    {Sdata.map((val)=>{
        return (<Card
        imgsrc={val.imgsrc}
        sname={val.sname}
        title={val.title}

        />);
    })}
</> 
    ,document.getElementById("root"));
