import React from 'react';
import "../CSS/Tabletennis1.css";
import { useNavigate } from "react-router-dom";

export default function tabletennis1() {
  const navigate = useNavigate();
  return (
    <div className="divtabletennis1">
  <div className="divtabletennis1-2">
    <div className="divtabletennis1-3">TABLETANNIS</div>
    <div className="divtabletennis1-4">
      <div className="divtabletennis1-5">Morning Slot</div>
      <div className="divtabletennis1-6">
        <div className="divtabletennis1-7">Saturday - Sunday</div>
        <div className="divtabletennis1-8">
          08 : 00 am- 10 : 00 am
          <br />
          10 : 00 am - 12 : 00pm
        </div>
      </div>
      <div className="divtabletennis1-9">
        <div className="divtabletennis1-10">Coach - Moen Ali</div>
        <a
          className="button1tabletennis1"
          onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divtabletennis1-4">
      <div className="divtabletennis1-5">Afternoon Slot</div>
      <div className="divtabletennis1-6">
        <div className="divtabletennis1-7">Saturday - Sunday</div>
        <div className="divtabletennis1-8">
          01 : 00 pm - 03 : 00 pm
          <br />
          03 : 00 am - 05 : 00 pm
        </div>
      </div>
      <div className="divtabletennis1-9">
        <div className="divtabletennis1-10">Coach - Rohit Sharma</div>
        <a
          className="button1tabletennis1"
          onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divtabletennis1-4">
      <div className="divtabletennis1-5">Evening Slot</div>
      <div className="divtabletennis1-6">
        <div className="divtabletennis1-7">Saturday - Sunday</div>
        <div className="divtabletennis1-8">05 : 00 pm- 07 : 00 pm</div>
      </div>
      <div className="divtabletennis1-9">
        <div className="divtabletennis1-10">Coach - Virat Kholi</div>
        <a
          className="button1tabletennis1"
          onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
    <div className="divtabletennis1-4">
      <div className="divtabletennis1-5">Night Slot</div>
      <div className="divtabletennis1-6">
        <div className="divtabletennis1-7">Saturday - Sunday</div>
        <div className="divtabletennis1-8">09 : 00AM- 11 : 00AM</div>
      </div>
      <div className="divtabletennis1-9">
        <div className="divtabletennis1-10">Coach - Hardik Pandiya</div>
        <a
          className="button1tabletennis1"
          onClick={()=>navigate("/Member")}>
          Join Now
        </a>
      </div>
    </div>
  </div>
</div>

  )
}
