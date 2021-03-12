import React,{ useState } from 'react';
import {useDispatch} from "react-redux";
import HomeCarousel from "./HomeCarousel";
import Face from '../assets/face.png';
import Poligon from '../assets/poligon.svg';
import Chevron from '../assets/chevron.svg';
import {startTest} from "../actions/ui";

const GreyBlocks = () => {
    const dispatch =  useDispatch();

    const callAnyPost = () => {
      dispatch(startTest());
    }

    const [open, setOpen] = useState(true);

    return (
        <div className="grey__blocks">
           <div className="contain">
               <div className="info__block grid">
                   <div className="people__box">
                       <img src={Face} alt="" className="img__face"/>
                       <div className="people__name">Clairie Yante-O Mahoney</div>
                   </div>
                   <div className="sucription__box">
                       <img src={Poligon} alt="" className="img__face"/>
                       <div className="poligon__data">
                           <div className="poligon__title">
                               Active Subscription
                           </div>
                           <div className="poligon__detail">
                               Auto-Renews on <span> 10 July 2021</span>
                           </div>
                       </div>
                   </div>
                   <div className="btn__item-box">
                       <div className="btn__item" onClick={ () => { setOpen(!open)}}>
                           <div className="btn__item-text">Hide Sessions</div>
                           <img className="chevron" src={Chevron} alt="Chevron"/>
                       </div>
                   </div>
               </div>
               {
                   open &&  <HomeCarousel></HomeCarousel>
               }
           </div>
        </div>
    );
};

export default GreyBlocks;
