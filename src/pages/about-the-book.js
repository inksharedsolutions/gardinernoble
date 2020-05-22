import React from 'react'
import Book1 from '../../static/img/book_cover.png'
import Book2 from '../../static/img/book_cover_2.png'
import Book3 from '../../static/img/book_cover_3.png'
import Book4 from '../../static/img/book_cover_4.png'

import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout'
import Banner from '../components/banner'
import BookInfo  from '../components/book-info/book-info'

const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'gardinernoble',
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
				<div 
					className="container"
					id="book-containers" >


						<BookInfo  
							data={{
								title:`Susies Submissions`,
								spanTitle: '',
								imgSrc: Book1,
								content:
								`With over five decades of service to his country,
								Hal is certainly not a man to be easily detoured or dissuaded from his mission.
								This book is a real testament of how long-suffering, perseverance, loyalty,
								integrity, and patriotism. Hal's wit and humor which he never outgrew even until today,
								allowed him to associate with highly recognized and well-established people. 
								His life really began after he was kicked out by his father.
								
								He had a bitter childhood that continued well into his teens,
								but everything changed after he became a member of the United States Marine Corps.
								His success was not given to him on a silver platter, it was definitely a roller-coaster adventure. 
								He lived, he laughed, he cried, he loved, he fell, and he rose yet again.
								From an Outhouse to the White House, and Then Some, will show you just how he did it.`,

								ebooks:{
									stratton : 'https://www.stratton-press.com/books/susies-submissions/',
									barnes: 'https://www.barnesandnoble.com/w/susies-submissions-gardiner-noble/1134052029?ean=9781643457567',
									amazon :'https://www.amazon.com/Susies-Submissions-Gardiner-Noble-ebook/dp/B07Z46HBBT/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1571252796&sr=1-1', 
								},
								paperback:{
									amazon:'https://www.amazon.com/Susies-Submissions-Gardiner-Noble/dp/1643456318/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1571252796&sr=1-1',
									barnes:'https://www.barnesandnoble.com/w/susies-submissions-gardiner-noble/1134052029?ean=9781643456317',
									booksamillion:'https://www.booksamillion.com/p/Susies-Submissions/Gardiner-Noble/9781643456539?id=7714171848832',
								}
							}}
						/>

						<BookInfo  
							data={{
								title:`Beliefs`,
								spanTitle: '',
								imgSrc: Book2,
								content:
								`The book suggests alternate interpretations of various scientific and religious dogmas.`,

								ebooks:{
									stratton : 'https://www.stratton-press.com/books/beliefs/',
									barnes: 'https://www.barnesandnoble.com/w/beliefs-gardiner-noble/1134052027?ean=9781643457536',
									amazon :'https://www.amazon.com/Beliefs-Gardiner-Noble-ebook/dp/B07Z44C55F/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1571251847&sr=8-1', 
								},
								paperback:{
									amazon:'https://www.amazon.com/Beliefs-Gardiner-Noble/dp/1643455338/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1571251847&sr=8-1',
									barnes:'https://www.barnesandnoble.com/w/beliefs-gardiner-noble/1134052027?ean=9781643455334',
									booksamillion:'https://www.booksamillion.com/p/Beliefs/Gardiner-Noble/9781643455334?id=7714171848832',
								}
							}}
						/>

						<BookInfo  
								data={{
									title:`Silken Thomas Fitzgerald`,
									spanTitle: 'Henry the VIIs Irish Thorn',
									imgSrc: Book3,
									content:
									`“Silken” Thomas Fitzgerald: Henry VIII’s Irish Thorn is in the tradition of the epic novel.
									The period is the 1530s. The young Irish lord “Silken” Thomas Fitzgerald has challenged the cruel
									religious policies of Henry VIII by renouncing his sword of state. Henry 
									counters by sending an army to Ireland. 
									
									The novel begins with Thomas’s trek, precipitated by the fall of his family’s castle,
									to an ally’s stronghold in the west of Ireland. Once there, he and his wife,
									Frances, struggle to rekindle the revolt’s waning popularity. Their efforts fail, 
									and Frances goes to England, where she appeals to her cousin Ann Boleyn to intercede
									on Thomas’s behalf with her husband, Henry VIII. Thomas, after surrendering on terms
									later treacherously rescinded by Henry, returns to England, where he is imprisoned in 
									the Tower. The novel concludes by describing the events that occur when the desperate
									efforts of Frances, and a priest friend, fail to obtain amnesty for Thomas. `,

									ebooks:{
										stratton : 'https://www.stratton-press.com/books/silken-thomas-fitzgerald-henry-the-viiis-irish-thorn/',
										barnes: 'https://www.barnesandnoble.com/w/silken-thomas-fitzgerald-gardiner-allen-noble/1130420227?ean=9781643459707',
										amazon :'https://www.amazon.com/Silken-Thomas-Fitzgerald-Henry-VIIIs-ebook/dp/B0872JK54N/ref=sr_1_1?dchild=1&keywords=Silken+Thomas+Fitzgerald&qid=1590184851&sr=8-1', 
									},
									paperback:{
										amazon:'https://www.amazon.com/Silken-Thomas-Fitzgerald-Henry-VIIIs/dp/1643459694/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1590184851&sr=8-1',
										barnes:'https://www.barnesandnoble.com/w/silken-thomas-fitzgerald-gardiner-allen-noble/1130420227?ean=9781643459691',
										booksamillion:'https://www.booksamillion.com/p/Silken-Thomas-Fitzgerald/Gardiner-Noble/9781643459691?id=7714171848832',
								}
							}}
						/>

					
						<BookInfo  
								data={{
									title:`The Gleeful Banker`,
									spanTitle: '',
									imgSrc: Book4,
									content:
									`Dave is a successful middle-aged banker who has grown indifferent to the needs of his	
									 wife of twenty years. He spends most of his time successfully selling mortgage-backed
									 securities to unsuspecting clients located around the world. Suddenly, everything begins 
									 to fall apart in the financial crisis of 2008. So Dave must change his ways, or both him
									 and the bank he works for will end up in the rubble.`,

									ebooks:{
										stratton:'https://www.stratton-press.com/books/the-gleeful-banker/',
										barnes: 'https://www.barnesandnoble.com/w/the-gleeful-banker-gardiner-noble/1134052030?ean=9781643457574',
										amazon :'https://www.amazon.com/Gleeful-Banker-Gardiner-Noble-ebook/dp/B07Z4393CF/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1571253106&sr=1-1', 
									},
									paperback:{
										amazon:'https://www.amazon.com/Gleeful-Banker-Gardiner-Noble/dp/1643456350/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1571253106&sr=1-1',
										barnes:'https://www.barnesandnoble.com/w/the-gleeful-banker-gardiner-noble/1134052030?ean=9781643456355',
										booksamillion:'https://www.booksamillion.com/p/Beyond-Mountains-Across-Seas/Hal-Davis/9781648950124?id=7714171848832',
								}
							}}
						/>

							
						<div className="commentSection" >
							<DiscussionEmbed {...disqusConfig} />
						</div>
				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor