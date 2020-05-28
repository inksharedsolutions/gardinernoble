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
						borderBottom: '1px solid rgb(41, 41, 41)'
					}:{
						borderBottom: '1px solid rgb(255, 255, 255)'
						}
					}
				>

				<h1>
					<Link 
						style={props.pathExt ? {
							color:'#fff'
						}:{
							color: '#000'
						}}
						to="/"
					>GN.</Link>
				</h1>

				<h1>Gardiner Noble.</h1>
					<ul id={toggled ? 'active-hamburger-nav': ''}
						onClick={e => clickEvent(e)}
						ref={refSpan}>
						<span className="hamburger-span"></span>
						<span className="hamburger-span"></span>
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