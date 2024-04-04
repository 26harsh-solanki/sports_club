import React from 'react';
import "../CSS/Activity.css";
import { useNavigate } from "react-router-dom";

export default function Activity() {
    
    const navigate = useNavigate();
  return (
   
    <div className="divactivity">
    <div className="divactivity-2">
      <div className="divactivity-3">
        <div className="divactivity-4">
          <div className="divactivity-100">Activities</div>
          <div className="divactivity-12">
            <div className="divactivity-13">
              <div className="columnactivity">
                <div className="divactivity-14">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0890f8045078afcc90759f3e8d406b4d4e96f9dbea3d8784e1cddba1d29bec40?apiKey=43cd680c2723441b9df3e44c7fb68697&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0890f8045078afcc90759f3e8d406b4d4e96f9dbea3d8784e1cddba1d29bec40?apiKey=43cd680c2723441b9df3e44c7fb68697&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0890f8045078afcc90759f3e8d406b4d4e96f9dbea3d8784e1cddba1d29bec40?apiKey=43cd680c2723441b9df3e44c7fb68697&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0890f8045078afcc90759f3e8d406b4d4e96f9dbea3d8784e1cddba1d29bec40?apiKey=43cd680c2723441b9df3e44c7fb68697&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0890f8045078afcc90759f3e8d406b4d4e96f9dbea3d8784e1cddba1d29bec40?apiKey=43cd680c2723441b9df3e44c7fb68697&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0890f8045078afcc90759f3e8d406b4d4e96f9dbea3d8784e1cddba1d29bec40?apiKey=43cd680c2723441b9df3e44c7fb68697&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0890f8045078afcc90759f3e8d406b4d4e96f9dbea3d8784e1cddba1d29bec40?apiKey=43cd680c2723441b9df3e44c7fb68697&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0890f8045078afcc90759f3e8d406b4d4e96f9dbea3d8784e1cddba1d29bec40?apiKey=43cd680c2723441b9df3e44c7fb68697&"
                    className="imgactivity-2"
                  />
                  <div className="divactivity-15">CRICKET</div>
                  <div className="divactivity-16">
                    Cricket, a strategic sport played between two teams, combines
                    elegance and skill on a green field with iconic stumps and
                    bails. From boundary-scoring brilliance to dramatic
                    dismissals, it captivates global audiences with its timeless
                    appeal. Legends like Sachin Tendulkar and thrilling
                    tournaments like the World Cup further elevate cricket as a
                    beloved and unifying global passion
                  </div>
                  <a className="buttonactivity-1" onClick={()=>navigate("/Cricket")}>
                    View Details
                  </a>
                </div>
              </div>
              <div className="columnactivity">
                <div className="divactivity-14">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4feb31a1ad1c8c6307f7816c919a5f88daf2c1fdcef35f2b264e393ad08f670b?apiKey=43cd680c2723441b9df3e44c7fb68697&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4feb31a1ad1c8c6307f7816c919a5f88daf2c1fdcef35f2b264e393ad08f670b?apiKey=43cd680c2723441b9df3e44c7fb68697&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4feb31a1ad1c8c6307f7816c919a5f88daf2c1fdcef35f2b264e393ad08f670b?apiKey=43cd680c2723441b9df3e44c7fb68697&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4feb31a1ad1c8c6307f7816c919a5f88daf2c1fdcef35f2b264e393ad08f670b?apiKey=43cd680c2723441b9df3e44c7fb68697&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4feb31a1ad1c8c6307f7816c919a5f88daf2c1fdcef35f2b264e393ad08f670b?apiKey=43cd680c2723441b9df3e44c7fb68697&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4feb31a1ad1c8c6307f7816c919a5f88daf2c1fdcef35f2b264e393ad08f670b?apiKey=43cd680c2723441b9df3e44c7fb68697&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4feb31a1ad1c8c6307f7816c919a5f88daf2c1fdcef35f2b264e393ad08f670b?apiKey=43cd680c2723441b9df3e44c7fb68697&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4feb31a1ad1c8c6307f7816c919a5f88daf2c1fdcef35f2b264e393ad08f670b?apiKey=43cd680c2723441b9df3e44c7fb68697&"
                    className="imgactivity-3"
                  />
                  <div className="divactivity-15">FOOTBALL</div>
                  <div className="divactivity-16">
                    Football, a dynamic sport contested by two teams, unfolds on a
                    vast pitch with a goal at each end. From skillful goals to
                    strategic tackles, football blends athleticism and strategy,
                    captivating fans worldwide. Iconic players like Lionel Messi
                    and major tournaments like the FIFA World Cup contribute to
                    football's universal popularity as a thrilling and unifying
                    global phenomenon.
                  </div>
                  <a className="buttonactivity-1" onClick={()=>navigate("/Football")}>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="divactivity-22">
            <div className="divactivity-23">
              <div className="columnactivity">
                <div className="divactivity-14">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/580ef72f9e951d10ec0b55f6443eefab53c3b47976a4dcf8f6b4624cf805b8ed?apiKey=43cd680c2723441b9df3e44c7fb68697&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ef72f9e951d10ec0b55f6443eefab53c3b47976a4dcf8f6b4624cf805b8ed?apiKey=43cd680c2723441b9df3e44c7fb68697&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ef72f9e951d10ec0b55f6443eefab53c3b47976a4dcf8f6b4624cf805b8ed?apiKey=43cd680c2723441b9df3e44c7fb68697&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ef72f9e951d10ec0b55f6443eefab53c3b47976a4dcf8f6b4624cf805b8ed?apiKey=43cd680c2723441b9df3e44c7fb68697&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ef72f9e951d10ec0b55f6443eefab53c3b47976a4dcf8f6b4624cf805b8ed?apiKey=43cd680c2723441b9df3e44c7fb68697&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ef72f9e951d10ec0b55f6443eefab53c3b47976a4dcf8f6b4624cf805b8ed?apiKey=43cd680c2723441b9df3e44c7fb68697&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ef72f9e951d10ec0b55f6443eefab53c3b47976a4dcf8f6b4624cf805b8ed?apiKey=43cd680c2723441b9df3e44c7fb68697&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ef72f9e951d10ec0b55f6443eefab53c3b47976a4dcf8f6b4624cf805b8ed?apiKey=43cd680c2723441b9df3e44c7fb68697&"
                    className="imgactivity-4"
                  />
                  <div className="divactivity-15">TABLE TENNIS</div>
                  <div className="divactivity-16">
                    Table Tennis, a fast-paced indoor sport played between two
                    players or teams, involves a small ball and a table divided by
                    a net. The game showcases quick reflexes, precision, and
                    strategic play, creating intense rallies and moments of
                    finesse. With global competitions like the Olympics and
                    notable players such as Ma Long, Table Tennis stands as a
                    widely enjoyed and skillful sport, celebrated for its
                    fast-paced and dynamic nature.
                  </div>
                  <a className="buttonactivity-1" onClick={()=>navigate("/Tabletennis")}>
                    View Details
                  </a>
                </div>
              </div>
              <div className="columnactivity">
                <div className="divactivity-14">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e781d34d9bbda9d25bd6a1dd3dd3133482f2adf0581729491fdafaf9ea1538bd?apiKey=43cd680c2723441b9df3e44c7fb68697&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e781d34d9bbda9d25bd6a1dd3dd3133482f2adf0581729491fdafaf9ea1538bd?apiKey=43cd680c2723441b9df3e44c7fb68697&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e781d34d9bbda9d25bd6a1dd3dd3133482f2adf0581729491fdafaf9ea1538bd?apiKey=43cd680c2723441b9df3e44c7fb68697&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e781d34d9bbda9d25bd6a1dd3dd3133482f2adf0581729491fdafaf9ea1538bd?apiKey=43cd680c2723441b9df3e44c7fb68697&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e781d34d9bbda9d25bd6a1dd3dd3133482f2adf0581729491fdafaf9ea1538bd?apiKey=43cd680c2723441b9df3e44c7fb68697&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e781d34d9bbda9d25bd6a1dd3dd3133482f2adf0581729491fdafaf9ea1538bd?apiKey=43cd680c2723441b9df3e44c7fb68697&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e781d34d9bbda9d25bd6a1dd3dd3133482f2adf0581729491fdafaf9ea1538bd?apiKey=43cd680c2723441b9df3e44c7fb68697&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e781d34d9bbda9d25bd6a1dd3dd3133482f2adf0581729491fdafaf9ea1538bd?apiKey=43cd680c2723441b9df3e44c7fb68697&"
                    className="imgactivity-5"
                  />
                  <div className="divactivity-15">VOLLEY BALL</div>
                  <div className="divactivity-16">
                    Volleyball, a dynamic team sport, unfolds on a rectangular
                    court divided by a net, with each team striving to score
                    points by sending the ball over the net and into the
                    opponent's court. From powerful spikes to strategic blocks,
                    volleyball combines athleticism and teamwork, creating an
                    engaging spectacle. With international tournaments like the
                    FIVB World Championship and prominent players contributing,
                    volleyball stands as a thrilling and globally appreciated
                    sport
                  </div>
                  <a className="buttonactivity-1" onClick={()=>navigate("/Vollyball")}>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
