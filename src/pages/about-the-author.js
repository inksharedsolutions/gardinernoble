import React from 'react'
import Banner from '../components/banner'
import '../assets/scss/pages.scss'
import Layout from '../components/layout'


 const ABA = ()=>{

     return(
        <> 
            <Layout>
                <Banner 
                    spanFirst={`About the`}
                    contextHeading={`Author`} 
                />

                <div className="container">
				    <section className="body-author-contents columns">
                            <div className="column">
                                <div className="heading-quote">

                                    <div className="author-image-container">
                                        <img src={``} />
                                        <span className="author-name">
                                            <span className="author-span-ft">Author |  Writer </span>
                                            Gardiner Noble
                                        </span>
                                    </div>

                                    <h4>
                                    Today, the government of the United States of America is a government
                                    without law because the Constitution has been rendered dysfunctional. 
                                    </h4>

                                    <span className="ata-span-fx">author quote</span>
                                </div>
                            </div>

                            <div className="column">
                                <article className="article-section">
                                    <p>
                                         Gardiner Noble is a retired electrical engineer who spent forty years in the automobile. 
                                         He is the inventor of the coil-on-plug ignition system, which is used in most cars manufactured around the world.
                                    </p>

                                    <p>
                                        He has written several books: One, Silken Thomas 
                                        Fitzgerald (Henry the Eighth's Irish Thorn), Beliefs, and The Gleeful Banker.
                                        He is in the process of writing a serious book that explains why the human body ages.
                                    </p>	
                                </article>
                            </div>
                    </section>
                </div>
                 
            </Layout>
        </>
     )

 }

 export default ABA;