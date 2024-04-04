import React from 'react';
import "../CSS/Vollyball.css";
import { useNavigate } from "react-router-dom";

export default function Vollyball() {
    const navigate = useNavigate();
    return (
    <div className="divvollyball">
  <div className="divvollyball-2">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e43c9499e3b95199ae0d1c402d5e329bf3ffaa371ac608d2adda5d9ff8ea045?apiKey=d2581b71f9e743e5a873bc096891baa6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e43c9499e3b95199ae0d1c402d5e329bf3ffaa371ac608d2adda5d9ff8ea045?apiKey=d2581b71f9e743e5a873bc096891baa6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e43c9499e3b95199ae0d1c402d5e329bf3ffaa371ac608d2adda5d9ff8ea045?apiKey=d2581b71f9e743e5a873bc096891baa6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e43c9499e3b95199ae0d1c402d5e329bf3ffaa371ac608d2adda5d9ff8ea045?apiKey=d2581b71f9e743e5a873bc096891baa6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e43c9499e3b95199ae0d1c402d5e329bf3ffaa371ac608d2adda5d9ff8ea045?apiKey=d2581b71f9e743e5a873bc096891baa6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e43c9499e3b95199ae0d1c402d5e329bf3ffaa371ac608d2adda5d9ff8ea045?apiKey=d2581b71f9e743e5a873bc096891baa6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e43c9499e3b95199ae0d1c402d5e329bf3ffaa371ac608d2adda5d9ff8ea045?apiKey=d2581b71f9e743e5a873bc096891baa6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e43c9499e3b95199ae0d1c402d5e329bf3ffaa371ac608d2adda5d9ff8ea045?apiKey=d2581b71f9e743e5a873bc096891baa6&"
      className="imgvollyball"
    />
    <div className="divvollyball-3">VOLLY BALL</div>
    <div className="divvollyball-4">
      Volleyball, a dynamic team sport, unfolds on a rectangular court divided
      by a net, with each team striving to score points by sending the ball over
      the net and into the opponent's court. From powerful spikes to strategic
      blocks, volleyball combines athleticism and teamwork, creating an engaging
      spectacle. With international tournaments like the FIVB World Championship
      and prominent players contributing, volleyball stands as a thrilling and
      globally appreciated sport.
    </div>
    <div className="divvollyball-5">
      <div className="divvollyball-6">
        <div className="columnvollyball">
          <div className="divvollyball-7">
            <div className="divvollyball-8">Rules of Club</div>
            <div className="divvollyball-9">
              Any one who are joining the club must have to follow the rules of
              the club.
              <br />
              <br />
              Here are the specific rules that all the members should follow:
              <br />
              <br />
              Members must have to stay in discipline.
              <br />
              Members have attain the sports club regular without any fail, any
              specific then contact coach.
              <br />
              Members have to be in time.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="columnvollyball-2">
          <div className="divvollyball-10">
            <div className="divvollyball-11">Membership Rules</div>
            <div className="divvollyball-12">
              <br />
              Clearly outline the criteria for becoming a member.
              <br />
              Specify any fees or dues associated with membership.
              <br />
              Establish the process for joining and leaving the club.
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      className="buttonvollyball-111"
    >
      Join Now
    </a>
  </div>
</div>

  )
}
