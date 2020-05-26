import React from 'react'
import Banner from '../components/banner'
import '../assets/scss/pages.scss'
import Layout from '../components/layout'
import AuthorImg from '../../static/img/img_author_square.png'

 const AboutTheAuthor = (props)=>{

     return(
        <> 
            <Layout extPath={false}>
                <Banner 
                    spanFirst={`About the`}
                    contextHeading={`Author`} 
                />

                <div className="container">
				    <section className="body-author-contents columns">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>
                        </div>


                        <article className="article-section">

                            <div className="heading-quote">
                                <h4>
                                    The joy and comfort a human being gets from studying any one of the sacred books is
                                    ... a confirmation of the existence of a supreme being.
                                </h4>
                                
                                <span className="ata-span-fx">author quote</span>
                            </div>


                            <p>
                                    Gardiner Noble is a retired electrical engineer who spent forty years in the automobile. 
                                    He is the inventor of the coil-on-plug ignition system, which is used in most cars manufactured around the world.
                            </p>

                            <p>
                                He has written several books: One, Silken Thomas 
                                Fitzgerald (Henry the Eighth's Irish Thorn), Beliefs, and The Gleeful Banker.
                                He is in the process of writing a serious book that explains why the human body ages.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Gardiner Noble
                                </span>
                            </p>

                        </article>
              

                    </section>
                </div>
                 
            </Layout>
        </>
     )

 }

 export default AboutTheAuthor;