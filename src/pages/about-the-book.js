import React from 'react'
import Book1 from '../../static/img/book_cover.png'
import Book2 from '../../static/img/book_cover_2.png'
import Book3 from '../../static/img/book_cover_3.png'

import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout'
import Banner from '../components/banner'
import BookInfo  from '../components/book-info/book-info'

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
										stratton : 'https://www.stratton-press.com/books/from-an-out-house-to-the-white-house-and-then-some/',
										barnes: 'https://www.barnesandnoble.com/w/from-an-out-house-to-the-white-house-hal-davis/1136867362?ean=9781648950179',
										amazon :'https://www.amazon.com/Out-House-White-Then-Some-ebook/dp/B0875KQW9Q/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1588017993&sr=8-1', 
									},
									paperback:{
										amazon:'https://www.amazon.com/Out-House-White-Then-Some/dp/1648950159/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1588017993&sr=8-1',
										barnes:'https://www.barnesandnoble.com/w/from-an-out-house-to-the-white-house-hal-davis/1136867362?ean=9781648950155',
										booksamillion:'https://www.booksamillion.com/p/From-Out-House-White/Hal-Davis/9781648950155?id=7714171848832',
									}
								}}
							/>

							<BookInfo  
								data={{
									title:`Beliefs`,
									spanTitle: '',
									imgSrc: Book2,
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
										stratton : 'https://www.stratton-press.com/books/beyond-the-mountains-and-across-the-seas-over-50-years-of-romanticizing-travel/',
										barnes: 'https://www.barnesandnoble.com/w/beyond-the-mountains-and-across-the-seas-hal-davis/1136867361?ean=9781648950148',
										amazon :'https://www.amazon.com/Beyond-Mountains-Across-Seas-Romanticizing-ebook/dp/B0875T5BJQ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1589582810&sr=8-1', 
									},
									paperback:{
										amazon:'https://www.amazon.com/Beyond-Mountains-Across-Seas-Romanticizing/dp/1648950124/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1589582810&sr=8-1',
										barnes:'https://www.barnesandnoble.com/w/beyond-the-mountains-and-across-the-seas-hal-davis/1136867361?ean=9781648950124',
										booksamillion:'https://www.booksamillion.com/p/Beyond-Mountains-Across-Seas/Hal-Davis/9781648950124?id=7714171848832',
								}
							}}
						/>

						<BookInfo  
								data={{
									title:`Silken Thomas Fitzgerald`,
									spanTitle: 'Henry the VIIs Irish Thorn',
									imgSrc: Book3,
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
										stratton : 'https://www.stratton-press.com/books/beyond-the-mountains-and-across-the-seas-over-50-years-of-romanticizing-travel/',
										barnes: 'https://www.barnesandnoble.com/w/beyond-the-mountains-and-across-the-seas-hal-davis/1136867361?ean=9781648950148',
										amazon :'https://www.amazon.com/Beyond-Mountains-Across-Seas-Romanticizing-ebook/dp/B0875T5BJQ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1589582810&sr=8-1', 
									},
									paperback:{
										amazon:'https://www.amazon.com/Beyond-Mountains-Across-Seas-Romanticizing/dp/1648950124/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1589582810&sr=8-1',
										barnes:'https://www.barnesandnoble.com/w/beyond-the-mountains-and-across-the-seas-hal-davis/1136867361?ean=9781648950124',
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