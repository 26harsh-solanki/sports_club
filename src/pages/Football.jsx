import React from 'react';
import "../CSS/Football.css";
import { useNavigate } from "react-router-dom";

export default function football() {
    const navigate = useNavigate();
    return (
        <div className="divfootball">
            <div className="divfootball-2">
                <div>
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55f0ccf555ceca916cb57d46550c5aeb6203bc02b6d7cafdb0868d2939d5bfa4?apiKey=d2581b71f9e743e5a873bc096891baa6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f0ccf555ceca916cb57d46550c5aeb6203bc02b6d7cafdb0868d2939d5bfa4?apiKey=d2581b71f9e743e5a873bc096891baa6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f0ccf555ceca916cb57d46550c5aeb6203bc02b6d7cafdb0868d2939d5bfa4?apiKey=d2581b71f9e743e5a873bc096891baa6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f0ccf555ceca916cb57d46550c5aeb6203bc02b6d7cafdb0868d2939d5bfa4?apiKey=d2581b71f9e743e5a873bc096891baa6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f0ccf555ceca916cb57d46550c5aeb6203bc02b6d7cafdb0868d2939d5bfa4?apiKey=d2581b71f9e743e5a873bc096891baa6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f0ccf555ceca916cb57d46550c5aeb6203bc02b6d7cafdb0868d2939d5bfa4?apiKey=d2581b71f9e743e5a873bc096891baa6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f0ccf555ceca916cb57d46550c5aeb6203bc02b6d7cafdb0868d2939d5bfa4?apiKey=d2581b71f9e743e5a873bc096891baa6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f0ccf555ceca916cb57d46550c5aeb6203bc02b6d7cafdb0868d2939d5bfa4?apiKey=d2581b71f9e743e5a873bc096891baa6&"
                        className="imgfootball"
                    />
                    <div>
                        <div>
                            <div className="divfootball-3">FOOTBALL</div>
                            <div className="divfootball-4">
                                Football, a dynamic team sport played on a rectangular field,
                                involves two teams striving to score goals by getting a ball into the opponent's net.
                                This fast-paced game showcases a blend of skillful dribbling, precise passing, and strategic goal-scoring maneuvers.
                                With events like the FIFA World Cup and exceptional players worldwide, football enjoys immense global popularity,
                                captivating fans with its exciting and unpredictable nature.
                                The sport fosters a sense of unity and passion across diverse cultures,
                                making it the most widely followed and celebrated game on an international scale.
                            </div>
                        </div>
                        <div className="divfootball-5">
                            <div className="divfootball-6">
                                <div className="columnfootball">
                                    <div className="divfootball-7">
                                        <div>
                                            <div className="divfootball-8">Rules of Club</div>
                                            <div className="divfootball-9">
                                                Any one who is joining the club must have to follow the rules of
                                                the club.
                                                <br />
                                                <br />
                                                Here are the specific rules that all the members should follow:
                                                <br />
                                                <br />
                                                Members must have to stay in discipline.
                                                <br />
                                                Members have to attend the sports club regularly without any fail, any
                                                specific then contact coach.
                                                <br />
                                                Members have to be on time.
                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columnfootball-2">
                                    <div className="divfootball-10">
                                        <div>  
                                            <div className="divfootball-11">Membership Rules</div>
                                            <div className="divfootball-12">
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
                    <div className="divfootball-13" style={{ display: 'flex', justifyContent: 'center' }}>
                        <a className="button-11" onClick={()=>navigate("/football1")}>
                            Join Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
