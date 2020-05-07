import React from "react"


const Section = (props) =>{
    
    return(
        <>
            <section className={`page-section ${props.metaData.cl}`}>
                <div className="details">
                    <div className="block-elem-before"></div>
                    <span className="tagline-heading"> 
                        {props.metaData.title}
                    </span>
                    <h1 className="heading-wraps">
                        <span className="number-page">
                            <span>
                                {props.metaData.num}
                            </span>
                        </span>

                        <span className="first-span-heading span-parent-block">
                            <span>
                                {props.metaData.spanFirst}
                            </span>
                        </span>
                        
                        <span className="second-span-heading span-parent-block">
                            <span>
                                {props.metaData.spanSecond}
                            </span>
                        </span>
                    </h1>
                    <p className="paragraph-section">
                        <span className="wrapper-ft"></span>
                        {props.metaData.content}
                    </p>
                    <div className="block-elem-after"></div>
                </div>
                <div className="hero">
                    <div className="svg-bg">
                        <div className="image-wrapper-anim"></div>
                        <img 
                            alt={props.metaData.couple} 
                            src={props.metaData.img} 
                        />
                    </div>
                </div> 
            </section>
        </>
    )
}

export default Section