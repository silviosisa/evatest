import React from 'react';
import imgBg from '../assets/example.jpg';
import IconUser from '../assets/user.svg';
const BoxImage = () => {
    return (
        <div className="box__image">
            <div className="card-wrapper"
                 style={{
                     backgroundImage: `url(${imgBg})`
                 }}
              >
                <div className="left-icon">
                    <img className="user-item" src={IconUser} alt="" />
                </div>
                <div className="right-icon">80%</div>

                <div className="bottom-box">
                    <div className="title"> HIIT Cardio Workout Warmup</div>
                    <div className="bottom-title color">
                        <div>Monday 11/20 09:00am</div>
                        <div>30 min</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxImage;
