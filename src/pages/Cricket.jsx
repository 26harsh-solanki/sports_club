import React from 'react';
import "../CSS/Cricket.css";
import { useNavigate } from "react-router-dom";

export default function Cricket() {
    const navigate = useNavigate();
  return (
      <div className="divcricket">
  <div className="divcricket-2">
        <div>
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69a7e81fdafeaa534fa83ef6e95bc651a8ba67f9774222e37e976ec6289be216?apiKey=d2581b71f9e743e5a873bc096891baa6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a7e81fdafeaa534fa83ef6e95bc651a8ba67f9774222e37e976ec6289be216?apiKey=d2581b71f9e743e5a873bc096891baa6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a7e81fdafeaa534fa83ef6e95bc651a8ba67f9774222e37e976ec6289be216?apiKey=d2581b71f9e743e5a873bc096891baa6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a7e81fdafeaa534fa83ef6e95bc651a8ba67f9774222e37e976ec6289be216?apiKey=d2581b71f9e743e5a873bc096891baa6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a7e81fdafeaa534fa83ef6e95bc651a8ba67f9774222e37e976ec6289be216?apiKey=d2581b71f9e743e5a873bc096891baa6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a7e81fdafeaa534fa83ef6e95bc651a8ba67f9774222e37e976ec6289be216?apiKey=d2581b71f9e743e5a873bc096891baa6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a7e81fdafeaa534fa83ef6e95bc651a8ba67f9774222e37e976ec6289be216?apiKey=d2581b71f9e743e5a873bc096891baa6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a7e81fdafeaa534fa83ef6e95bc651a8ba67f9774222e37e976ec6289be216?apiKey=d2581b71f9e743e5a873bc096891baa6&"
      className="imgcricket"
      />
    <div>
      <div>
         
    <div className="divcricket-3">CRICKET</div>
    <div className="divcricket-4">
      Cricket, a strategic sport played between two teams, combines elegance and
      skill on a green field with iconic stumps and bails. From boundary-scoring
      brilliance to dramatic dismissals, it captivates global audiences with its
      timeless appeal. Legends like Sachin Tendulkar and thrilling tournaments
      like the World Cup further elevate cricket as a beloved and unifying
      global passion
    </div>
    </div>
    <div className="divcricket-5">
      <div className="divcricket-6">
        <div className="columncricket">
          <div className="divcricket-7">
            <div>
            <div className="divcricket-8">Rules of Club</div>
            <div className="divcricket-9">
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
        </div>
        <div className="columncricket-2">
          <div className="divcricket-10">
        <div>  

            <div className="divcricket-11">Membership Rules</div>
            <div className="divcricket-12">
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
    </div>
      </div>
    <div className="divcricket-13" style={{ display: 'flex', justifyContent: 'center' }}>
        <a className="buttoncricket-111" onClick={()=>navigate("/Cricket1")}>
          Join Now
        </a>
    </div>
</div>
  </div>
</div>

  )
}
