import React from 'react'
import {Link} from 'gatsby'
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../assets/scss/footer.scss'
	
const Footer = (props) =>{


	const pages = [
		'home',
		'about-the-author',
		'about-the-book', 
		'contact'
   ]
   
	let Listed = pages.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : newUrl;

		return (
			<li>
				<Link 
					to={filterUrl}>
					{e.replace(/[-/]/g," ").trim().toLowerCase()}
				</Link>
			</li>
		)
	})

	return(
			<footer className="footer-section">
				<div className="container">

					<div className="columns navlist-footer-column">
						<div className="column text-center trademark-heading">

							<div className="logo-footer-container">

								<span className="images-portray">
									<h1 clasName="logo-ft">
										GN.
									</h1>
								</span>

							</div>
						
							<p>
								Gardiner Noble loves to hear from readers. You can reach him via email. 
								Feel free to send questions about writing, his works, interviews 
								and other publicity matters.
							</p>

						</div>

						<div className="column">
							<nav className="footer-nav-list">
								{Listed}
							</nav>	
						</div>
					</div>

					<div className="columns lowr-footer-container">
						<div className="column">
							<span className="footer-copyright">

								<span className="footer-year">{
									( new Date() ).getFullYear()
								}</span>

								&#169; Copyright. Stratton press
							</span>
	
						 	<span class="lower-nav-footer">
								<li>
									<Link to={'privacy-policy'}>
										Privacy Policy
									</Link>

									<Link to={'terms-conditions'}>
										Terms & Conditions
									</Link>
								</li>
								<li></li>
						 	</span>
							
						</div>
						
						<div className="column text-center trademark-heading">
							<nav id="style_soc_medias">

								<a
									href="https://www.facebook.com/Gardiner-Noble-109086423843114/"
									target="_blank"
									rel="noopener noreferrer" >

									<FontAwesomeIcon
										className='font-awesome'
										icon={faFacebook} />
								</a>

								<a
									href="https://twitter.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faTwitter} />
								</a>

								<a 

									href="https://www.instagram.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faInstagram} />
								</a>

								<a 
									href="https://www.goodreads.com/author/show/19650580.Gardiner_Noble"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon 
										className='font-awesome'
										icon={faGoodreads} />
								</a>

							</nav>
						</div>
					</div>  

				</div>			        
			</footer>
	)	
}


export default Footer;