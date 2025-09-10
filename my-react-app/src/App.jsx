import React, { useState } from "react";

function BgChanger() {
  const  color=["red","blue","green","yellow","pink","purple","orange","black","white","gray"]; 
  const [bgColor, setBgColor] = useState("white");
  const changeBgColor = (color) => {
    setBgColor(color);

  }

  return (
  <>
<ul>
  {

  color.map((item)=>(
    <li key={item} style={{backgroundColor:bgColor}}>
      <button onClick={()=>changeBgColor(item)}>{item}</button>
    </li>
  ))
  }
</ul>
  </>
  );
}

export default BgChanger;
