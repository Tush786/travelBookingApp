import React from 'react'
import Background from "../Image/discover.PNG"
import SplitScreen from '../Files/SplitScreen';
const Discover = () => {
   const myStyle={
      backgroundImage:`url(${Background})`,
      height:'620px'
      };
  return (
    <div style={myStyle}>
      <>
      <SplitScreen/>
</>
    </div>
  )
}

export default Discover
