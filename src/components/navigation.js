import React, {useRef, useState} from 'react'
import {Link} from 'gatsby';

const Nav = (props) =>{

	const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);

	const pages = [
		 'Home',
		 'About-the-Author', 
		 'About-the-Book', 
		 'Contact'
	]

	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}
	

	let Listed = pages.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : newUrl;

		const res = e.replace(/[-/]/g," ").trim();
	
		return (
			<li>
				<Link 
					to={filterUrl}>
					{res}
				</Link>
			</li>
		)
	})

	const clickEvent = (e)=> {
		setToggled(!toggled);
	}
			
    return(		
        <> 
			<nav className="navigation"
				style={props.pathExt  ? {
						borderBottom: ''
					}:{
						borderBottom: ''
						}
					}
				>	

				<ul>
					<li>
						<Link to="/">
							 Home
						</Link>
					</li>
					<li>
						<Link to="/about-the-book">
							About The Book
						</Link>
					</li>
				</ul>

				<h1>
					Gardiner Noble.
				</h1>

				<ul id="">
					<li>
						<Link to="/about-the-author">
							 About The Author
						</Link>
					</li>
					<li>
						<Link to="/contact">
							 Contact
						</Link>
					</li>

					<ul id={toggled ? 'active-hamburger-nav': 'non-active-hamburger'}	
						onClick={e => clickEvent(e)}
						ref={refSpan}>
						<span className="hamburger-span"></span>
						<span className="hamburger-span"></span>
					</ul>


				</ul>

			</nav>
		
	
			<section className={toggled ? 'active-nav': 'non-active-nav'}>

				<span className="close-mark" onClick={e => clickEvent(e)}>
						<span className="hamburger-x-mark"></span>
						<span className="hamburger-x-mark"></span>
				</span>


				<ul>
		
					<p className="list-label">
						Navigations.
					</p>

					{
						Listed
					}

				</ul>
			</section> 

        </>			
    )
}

export default Nav;