import React from 'react';
import "../CSS/Vollyball1.css";
import { useNavigate } from "react-router-dom";

export default function Vollyball1() {
    const navigate = useNavigate();
    return (
    <div>
        <div className="divvolly">
  <div className="divvolly-2">
    <div className="divvolly-3">FOOTBALL</div>
    <div className="divvolly-4">
      <div className="divvolly-5">Morning Slot</div>
      <div className="divvolly-6">
        <div className="divvolly-7">Saturday - Sunday</div>
        <div className="divvolly-8">
          08 : 00 am- 10 : 00 am
          <br />
          10 : 00 am - 12 : 00pm
        </div>
      </div>
      <div className="divvolly-9">
        <div className="divvolly-10">Coach - Moen Ali</div>
        <a className="button1foot" onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divvolly-4">
      <div className="divvolly-5">Afternoon Slot</div>
      <div className="divvolly-6">
        <div className="divvolly-7">Saturday - Sunday</div>
        <div className="divvolly-8">
          01 : 00 pm - 03 : 00 pm
          <br />
          03 : 00 am - 05 : 00 pm
        </div>
      </div>
      <div className="divvolly-9">
        <div className="divvolly-10">Coach - Rohit Sharma</div>
        <a className="button1foot" onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divvolly-4">
      <div className="divvolly-5">Evening Slot</div>
      <div className="divvolly-6">
        <div className="divvolly-7">Saturday - Sunday</div>
        <div className="divvolly-8">05 : 00 pm- 07 : 00 pm</div>
      </div>
      <div className="divvolly-9">
        <div className="divvolly-10">Coach - Virat Kholi</div>
        <a className="button1foot" onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divvolly-4">
      <div className="divvolly-5">Night Slot</div>
      <div className="divvolly-6">
        <div className="divvolly-7">Saturday - Sunday</div>
        <div className="divvolly-8">09 : 00AM- 11 : 00AM</div>
      </div>
      <div className="divvolly-9">
        <div className="divvolly-10">Coach - Hardik Pandiya</div>
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
