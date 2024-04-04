import React from 'react';
import "../CSS/Football1.css";
import { useNavigate } from "react-router-dom";

export default function Football1() {
    const navigate = useNavigate();
    return (
    <div>
        <div className="divfoot">
  <div className="divfoot-2">
    <div className="divfoot-3">FOOTBALL</div>
    <div className="divfoot-4">
      <div className="divfoot-5">Morning Slot</div>
      <div className="divfoot-6">
        <div className="divfoot-7">Saturday - Sunday</div>
        <div className="divfoot-8">
          08 : 00 am- 10 : 00 am
          <br />
          10 : 00 am - 12 : 00pm
        </div>
      </div>
      <div className="divfoot-9">
        <div className="divfoot-10">Coach - Moen Ali</div>
        <a className="button1foot" onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divfoot-4">
      <div className="divfoot-5">Afternoon Slot</div>
      <div className="divfoot-6">
        <div className="divfoot-7">Saturday - Sunday</div>
        <div className="divfoot-8">
          01 : 00 pm - 03 : 00 pm
          <br />
          03 : 00 am - 05 : 00 pm
        </div>
      </div>
      <div className="divfoot-9">
        <div className="divfoot-10">Coach - Rohit Sharma</div>
        <a className="button1" onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divfoot-4">
      <div className="divfoot-5">Evening Slot</div>
      <div className="divfoot-6">
        <div className="divfoot-7">Saturday - Sunday</div>
        <div className="divfoot-8">05 : 00 pm- 07 : 00 pm</div>
      </div>
      <div className="divfoot-9">
        <div className="divfoot-10">Coach - Virat Kholi</div>
        <a className="button1" onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divfoot-4">
      <div className="divfoot-5">Night Slot</div>
      <div className="divfoot-6">
        <div className="divfoot-7">Saturday - Sunday</div>
        <div className="divfoot-8">09 : 00AM- 11 : 00AM</div>
      </div>
      <div className="divfoot-9">
        <div className="divfoot-10">Coach - Hardik Pandiya</div>
        <a className="button1foot" onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
