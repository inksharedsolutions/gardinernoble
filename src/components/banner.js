import React from 'react'
import '../assets/scss/pages.scss'

const Banner = (props) =>{

    return(
        <section className="web-banner">
            <div className="container">
                <div className="wrapper-ds">
                    <span> 
                        {props.spanFirst}
                    </span>
                    <h1>
                        {props.contextHeading}
                    </h1>
                </div>
            </div>
        </section>
    )
}           

export default Banner;