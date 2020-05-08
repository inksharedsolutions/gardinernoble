import React, {useRef, useState} from 'react'
import {Link} from 'gatsby';

const Nav = () =>{

	const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);
	
	const pages = [
		 'home',
		 'about-the-author', 
		 'about-the-book', 
		 'contact'
	]

	const clickEvent = (e)=> {
		setToggled(!toggled);
	}
			
    return(		
        <> 
            <nav className="navigation">
				<h1>GN.</h1>		
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
					{
						pages.map((e,_f)=>{
							return (
								<li key={_f}>
									<Link>
										{e
									}</Link>
								</li>
							)
						})
					}
				</ul>
			</section>
        </>			
    )
}

export default Nav;