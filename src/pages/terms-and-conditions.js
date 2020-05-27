import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'

import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

const TaC = (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Valentine Cardinale</span>
			<h1 className="banr-header-fx"> 
				Terms And
				<span className="banr-spn-highlight">Conditions</span>
			</h1>
		</>
	)

	const FetchMarkDown = useStaticQuery(graphql`
		 query TermsAndConditionsPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/terms-and-conditions.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

	const data = {...FetchMarkDown.markdownRemark};


	return(
	 	<>
	 		<Layout extPath={false}>
                    <Banner 
                            spanFirst={`Terms And`}
                            contextHeading={`Conditions`} 
                    />

	 				<div className="container">
						<div id="terms-and-conditions-content">
							<div className="">{Parser(data.html)}</div>
							
						</div>
					</div>
	 		</Layout>
	 	</>
	)
}


export default TaC;