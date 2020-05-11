import React from 'react'
import Book from '../../static/img/book_cover.png'
import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout'
import Banner from '../components/banner'


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'ruth-claxton',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">Gardiner Noble</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)

	return(
		<Layout>
			
            <Banner 
                    spanFirst={`About the`}
                    contextHeading={`Book`} 
            />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">
						
							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									<p>
									 	Rachel’s story is a true one of young love, joys, and triumphs experienced, 
									 	but also is about difficulties of being and staying together as they are beset 
									 	by hardships, disappointments, and struggles toward making a good life for themselves. 
									</p>
									
									<p>
										Her story begins in her early teens while growing up in Southern Kentucky and being 
										the oldest child in a large family of very strict parents. She relates of the rigors
										involved during post–Great Depression years, through WWII, and in her high school years.
										As a senior in high school with a diploma, a certainty along with a lucrative scholarship 
										promised, she begins to see that her dreams of becoming a teacher can really happen. 
									</p>
								</section>

                                <section className="fullSection">
                                    <nav className="booklinkBlocks">
                                        <span>Ebooks :</span>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Early-Years-Memoir-Matters-Heart/dp/164345434X/ref=sr_1_2?dchild=1&qid=1585108690&refinements=p_27%3ARachel+G.+Carrington&s=books&sr=1-2&text=Rachel+G.+Carrington">Amazon</a></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/the-early-years-a-memoir-matters-of-the-heart-book-1/">Stratton Press</a></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-early-years-rachel-g-carrington/1122308519?ean=9781491765685">Barnes & Noble</a></li>
                                    </nav>

                                    <nav className="booklinkBlocks">
                                        <span>Purchase Paperbook :</span>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Early-Years-Memoir-Matters-Heart/dp/164345434X/ref=sr_1_2?dchild=1&qid=1585108690&refinements=p_27%3ARachel+G.+Carrington&s=books&sr=1-2&text=Rachel+G.+Carrington">Amazon</a></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="">Barnes & Noble </a></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Early-Years/Rachel-G-Carrington/9781491765692?id=7851112015457">Books A Million</a></li>
                                    </nav>
                                </section>
							</div>						
						</div>
							
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor