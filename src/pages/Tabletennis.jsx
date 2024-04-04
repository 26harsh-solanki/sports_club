import React from 'react';
import "../CSS/Tabletennis.css";
import { useNavigate } from "react-router-dom";

export default function Tabletennis() {
const navigate = useNavigate();
    return (
    <div className="divtabletennis">
  <div className="divtabletennis-2">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d15585aa26c7b6ff6e467af85e6571081cb2955495283b2b7d431fc7bab2a730?apiKey=d2581b71f9e743e5a873bc096891baa6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15585aa26c7b6ff6e467af85e6571081cb2955495283b2b7d431fc7bab2a730?apiKey=d2581b71f9e743e5a873bc096891baa6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15585aa26c7b6ff6e467af85e6571081cb2955495283b2b7d431fc7bab2a730?apiKey=d2581b71f9e743e5a873bc096891baa6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15585aa26c7b6ff6e467af85e6571081cb2955495283b2b7d431fc7bab2a730?apiKey=d2581b71f9e743e5a873bc096891baa6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15585aa26c7b6ff6e467af85e6571081cb2955495283b2b7d431fc7bab2a730?apiKey=d2581b71f9e743e5a873bc096891baa6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15585aa26c7b6ff6e467af85e6571081cb2955495283b2b7d431fc7bab2a730?apiKey=d2581b71f9e743e5a873bc096891baa6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15585aa26c7b6ff6e467af85e6571081cb2955495283b2b7d431fc7bab2a730?apiKey=d2581b71f9e743e5a873bc096891baa6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15585aa26c7b6ff6e467af85e6571081cb2955495283b2b7d431fc7bab2a730?apiKey=d2581b71f9e743e5a873bc096891baa6&"
      className="imgtabletennis"
    />
    <div className="divtabletennis-3">TABLE TANNIS</div>
    <div className="divtabletennis-4">
      Table Tennis, a fast-paced indoor sport played between two players or
      teams, involves a small ball and a table divided by a net. The game
      showcases quick reflexes, precision, and strategic play, creating intense
      rallies and moments of finesse . With global competitions like the
      Olympics and notable players such as Ma Long, Table Tennis stands as a
      widely enjoyed and skillful sport, celebrated for its fast-paced and
      dynamic nature.
    </div>
    <div className="divtabletennis-5">
      <div className="divtabletennis-6">
        <div className="columntabletennis">
          <div className="divtabletennis-7">
            <div className="divtabletennis-8">Rules of Club</div>
            <div className="divtabletennis-9">
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
        <div className="columntabletennis-2">
          <div className="divtabletennis-10">
            <div className="divtabletennis-11">Membership Rules</div>
            <div className="divtabletennis-12">
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
    <a className="button-1" onClick={()=>navigate("/Tabletennis1")}>
      Join Now
    </a>
  </div>
</div>
  )
}
