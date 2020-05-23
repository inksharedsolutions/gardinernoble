import React, {useRef, useState} from 'react'
import {Link} from 'gatsby';

const Nav = (props) =>{

	const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);

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
					{e.replace(/[-/]/g," ").trim().toLowerCase() }
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
				style={props.pathExt === '/' || props.pathExt === ''  ? {
						borderBottom: '1px solid rgb(41, 41, 41)'
					}:{
						borderBottom: '1px solid rgb(255, 255, 255)'
						}
					}
				>

				<h1>
					<Link 
						style={props.pathExt === '/' 
						 	|| props.pathExt === '' ? {
							color:'#fff'
						}:{
							color: '#000'
						}}
						to="/"
					>GN.</Link>
				</h1>

				<h1>Gardiner Noble.</h1>
					<ul
						onClick={e => clickEvent(e)}
						ref={refSpan}>
						<span className="hamburger-span"></span>
						<span className="hamburger-span"></span>
					</ul>
			</nav>

			<section className={toggled ? 'active-nav': 'non-active-nav'}>
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