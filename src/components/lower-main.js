import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/img_author_square.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} />
                        </div>

                        <div className="wrapper-auth-content">
                            <p>
                                 Gardiner Noble is a retired electrical engineer who spent forty years in the 
                                 automobile. He is the inventor of the coil-on-plug ignition system, which
                                 is used in most cars manufactured around the world.
                            </p>

                            <h1>Gardiner Noble</h1>

                            <span className="span-tagline">Author & Writer</span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 