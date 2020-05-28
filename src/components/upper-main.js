import React, {useState, useEffect } from 'react'
import {Link} from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Book1 from '../../static/img/book_cover.png'
import Book2 from '../../static/img/book_cover_2.png'
import Book3 from '../../static/img/book_cover_3.png'
import Book4 from '../../static/img/book_cover_4.png'


const UpperMain =()=>{

    
    const [mobState, __functState] = useState(false);


    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

      }, [mobState]); 

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: (window.innerWidth >= 650) ? 2 : 1,
        slidesToScroll: 1,
     };



    return  (
        <>  
            <section className="upper-main">
                <div className="container-gt">

                    <div className="content-wrapper">
                        <h1>Books</h1>
                        
                        <p className="middle-params">
                            Lorem Ipsum is simply dummy 
                            text ofthe printing and 
                            typesetting industry.
                        </p>
                    </div>

                    <Slider {...settings}>
                        <div className="book-wrapper-slider">
                            <img src={Book1}/>
                            <h3>Susie's Submission</h3>
                        </div>

                        <div className="book-wrapper-slider">
                            <img src={Book2}/>
                            <h3>Beliefs</h3>
                        </div>

                        <div className="book-wrapper-slider">
                            <img src={Book3}/>
                            <h3>Silken Thomas Fitsgerarld</h3>
                            <span>Henry The VIII's Irish Thorn</span>
                        </div>

                        <div className="book-wrapper-slider">
                           <img src={Book4}/>
                            <h3>The Gleeful Banker</h3>
                        </div>
                </Slider>
                </div>
            </section>
        </>
    )
}

export default UpperMain