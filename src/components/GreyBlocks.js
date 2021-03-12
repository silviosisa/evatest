import React from 'react';
import {useDispatch} from "react-redux";
import HomeCarousel from "./HomeCarousel";
import Face from '../assets/face.png';
import {startTest} from "../actions/ui";

const GreyBlocks = () => {

    const dispatch =  useDispatch();


    const callAnyPost = () => {
      dispatch(startTest());
    }

    return (
        <div className="grey__blocks">
           <div className="contain">
               <div className="info__block grid">
                   <div className="people__box">
                       <img src={Face} alt="" className="img__face"/>
                       <div className="people__name">Clairie Yante-O Mahoney</div>
                   </div>
                   <div className="button__box" onClick={callAnyPost}>
                       <div className="btn-item">Hide Sessions</div>
                   </div>
               </div>
               <HomeCarousel></HomeCarousel>
           </div>
        </div>
    );
};

export default GreyBlocks;
