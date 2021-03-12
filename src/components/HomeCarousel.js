import React,{useState} from 'react';
import BoxImage from "./BoxImage";

const HomeCarousel = () => {

    const [items] = useState([1,2,3,4]);

    return (
        <>
            <div className="home__carousel_title">You can book as many group sessions as you want as part of your suscription with Claire</div>
            <div className="home__carousel">
                <div className="items__box">
                    {
                        items.map((item,i) =>{
                            return <BoxImage key={i}></BoxImage>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default HomeCarousel;
