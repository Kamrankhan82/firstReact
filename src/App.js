import React from 'react';

function heading(){
  return <h1>This is Heading from JSX</h1>;
}
function paragraph(){
  return <p>This is paragraph from JSX</p>;
}
function list(){
  return <ol>
      <li>Red</li>
      <li>Blue</li>
      <li>Green</li>
      <li>Orange</li>
      <li>Purple</li>
  </ol>;
}
function curDate(){
  let curDate=new Date(2020, 12, 2, 1);
  curDate =curDate.getHours();
  let title
  if(curDate>=1&&curDate<12){
    title="Good Morning";
  }else if(curDate>=12&&curDate<=18){
    title="Good Afternoon";
}else{
  title="Good Night";
}
return <h2>Hello {title}</h2>

}
export default curDate;
export {heading, paragraph, list};