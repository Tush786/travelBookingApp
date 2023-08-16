import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";

const ProductDetail=()=>{
  const [arrD, setArrD] = useState({});
  const [CheckIn, setCheckIn] = useState("");
  const [Chechout, setCheckOut] = useState("");
  const [bdays, setBdays] = useState(1);
  const [totalP, setTotalP] = useState(0);


  // <------------------ Fetch Product Detail Data --------------->
  const { id } = useParams();
  async function FetchDetail() {
    try {
      let Resp = await axios.get(`https://voyawander-server.onrender.com/hotels/${id}`);
      setArrD(Resp.data);
      setTotalP(Resp.data.cost);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchDetail();
  }, [id]);

  // <-------------------------- To Disabled Previous Date ------------>
  const currentDate = new Date().toISOString().split("T")[0];

  // <---------------- END

  useEffect(() => {
    const CHECKIN = new Date(CheckIn);
    const CHECKOUT = new Date(Chechout);

    if (CHECKIN && CHECKOUT && !isNaN(CHECKIN) && !isNaN(CHECKOUT)) {
      const timeDifference = CHECKOUT - CHECKIN;
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      setBdays(Math.abs(daysDifference));
      setTotalP(Math.abs(daysDifference) * arrD.cost);
    } else {
      setBdays(1);
      setTotalP(arrD.cost);
    }
  }, [CheckIn, Chechout, arrD.cost]);

  function HandleCheckIn(e) {
    setCheckIn(e.target.value);
  }

  function HandleCheckOut(e) {
    setCheckOut(e.target.value);
  }

  // <--------------------- Disable Previous Date ---------------------->
 
  return (
    <div className={style.main}>
      <h1 style={{fontSize:'40px' ,fontWeight:'800'}}>{arrD.title}</h1>
      <div id={style.subDiv}>
        <div id={style.MainIMG}>
          <img src={arrD.url}></img>
        </div>
        <div className={style.IMG}>
          <img src={arrD.url1} ></img>
          <img src={arrD.url2} style={{borderTopRightRadius:"20px"}}></img>
          <img src={arrD.url3}></img>
          <img src={arrD.url4} style={{borderBottomRightRadius:"20px"}}></img>
        </div>
      </div>
      <h4 style={{fontSize:'20px' ,fontWeight:'600'}}>{arrD.guestDetail}</h4>
      <div id={style.mid}>
        <div id={style.Left}>
          <h2 style={{fontSize:'20px' ,fontWeight:'600'}}>About This Place</h2>
          <p style={{fontSize:"17px",fontWeight:"100",paddingRight:"20px",textAlign:"justify"}}>{arrD.description1}</p>

          <div>
            <h2 style={{fontSize:'20px' ,fontWeight:'600'}}>Where you'll sleep</h2>
            <img id={style.WSleep} src={arrD.url4}></img>
          </div>

          <div>
            <h2 style={{fontSize:'20px' ,fontWeight:'600'}}>What this place offers</h2>
            <ul shape="round" style={{fontSize:"17px",fontWeight:"100"}}>
              <li>Garden View</li>
              <li>Mountain View</li>
              <li>Kitchen</li>
              <li>Free parking on premises</li>
              <li>Private outdoor pool, open specific hours</li>
            </ul>

            <p></p>
          </div>
        </div>

        <div id={style.Right}>
          <h3 style={{fontSize:'20px' ,fontWeight:'600'}} >₹ {arrD.cost} Night</h3>
          <div id={style.calender} >
            <div style={{fontSize:"16px",fontWeight:"600"}}>
              <label htmlFor="">
                CHECK-IN</label>
                <br/>
                <input type="date"
                value={CheckIn}
                onChange={HandleCheckIn}
                min={currentDate}
                style={{padding:"10px",border:"none",fontSize:"20px",fontWeight:"100"}}
                ></input>
              
            </div>

            <div style={{borderLeft:"2px solid pink",fontSize:"16px",fontWeight:"600"}}>
              <label htmlFor="">
                CHECK-OUT</label>
                <br/>
                <input type="date"
                value={Chechout}
                onChange={HandleCheckOut}
              
                min={currentDate}
                style={{padding:"10px",border:"none",fontSize:"20px",fontWeight:"100"}}
                ></input>
           
            </div>

            
          </div>
          <button id={style.RES}>Reserve</button>

          <div id={style.Total_P}>
            <p>₹ {arrD.cost} X {bdays} Night</p>
            <p>{totalP}</p>
          </div>

          <div id={style.Befr_Tax}>
            <h2  style={{fontSize:'20px' ,fontWeight:'600'}}>Total Before Tax</h2>
            <h2 style={{fontSize:'20px' ,fontWeight:'600'}}>{totalP}</h2>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;