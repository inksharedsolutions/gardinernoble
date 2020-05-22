import React, {useRef, useEffect, useState} from "react"
import Nav from '../components/navigation'
import PageNum from '../components/page-num'
import  Section from '../components/section'
import { Link } from "gatsby"
import {Helmet} from "react-helmet"

import { TweenMax, TimelineMax, gsap } from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin'

import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


//images
import image1 from '../../static/img/couple.png'
import image2 from '../../static/img/book_cover.png'
import image3 from '../../static/img/author.png'

const IndexPage = (props) =>{


  console.log(props);
  
  const mainRef = useRef(null); 
  const [sectState, __setFunctState] = useState(0);
  const [currState, ___setCurrState] = useState(0);

  // Force CSSPlugin to not get dropped during build
  gsap.registerPlugin(CSSPlugin); 
  
  useEffect(() => {

    const elSection = mainRef.current.querySelectorAll('.page-section');
    const btnArrow = mainRef.current.querySelectorAll('.__btn')
    
    //set the first element as active....
    elSection.forEach( ( el, ind) => {
        if(ind === 0){
          el.classList.add('page_active_section')
        }   
    });
    

    //intialize...
    const tl  = new TimelineMax();

    const animation  = (pageNum)=>{

      let nextPage =  elSection[pageNum];
      let currPage =  elSection[currState];
      
      const nextSlideRight = nextPage.querySelector('.page_active_section .hero')
      const nextSlideLeft = nextPage.querySelector('.page_active_section .details')
  

      const currSlideLeft = currPage.querySelector('.details')
      const currSlideRight = currPage.querySelector('.hero')

      /* left Elements..... */
      const fsh = nextSlideLeft.querySelector('.first-span-heading span')
      const ssh = nextSlideLeft.querySelector('.second-span-heading span')
      const wt = nextSlideLeft.querySelector('.wrapper-ft')
      const np = nextSlideLeft.querySelector('.number-page span')
      let lw = elSection[currState].querySelector('.before-elements');

      /* Right Elements.... */
      const imgWrapper  = nextSlideRight.querySelector('.image-wrapper-anim');
      

      tl.to(lw, 0.5,{ width: '0'}, {width : '100%', onComplete: ()=>{
        tl.to(lw, 1, {left: '700px'})
      }});


      /* Heading Animation*/
      tl.to(imgWrapper, 1, {width: '0%'})   
        .to(np, 0.7, {right:'0'})
        .to(wt, 0.7, { width: '0'}, {width:'0px'});

      tl.fromTo(fsh, 0.7, {y: '75'}, {y: '0', onComplete : ()=>{ 
          tl.fromTo(ssh, 0.7, {y: '75'}, { y: '0', })
      }}) 

    
      ___setCurrState(sectState);
      
    }     

    const triggerAnimation = () =>{
        if(sectState != -1){
          elSection.forEach((el , ind)=>{
             el.classList.remove('page_active_section');
          });

          elSection[sectState].classList.add('page_active_section');
          animation(sectState);
      }
    }

    btnArrow.forEach(btn =>{
        btn.addEventListener('click', ()=>{

        })
    })

    triggerAnimation();

  
  }, [sectState , currState]);

  return(
    <>
      <div id="parent-block"> 
			  <header>
          
          <Nav pathExt={props.path} /> 
            <main ref={mainRef}
                  id="main-section">

              <Section 
                metaData={{
                  title: `Sussies Sumbission`,
                  num: `01`,
                  cl : 'first_panel',
                  bgClass : `first_svg_bg`,
                  pathRedirect:`/about-the-book`,
                  imgCl : 'img-f',
                  img: image1,
                  spanFirst :`Anthology of`,
                  spanSecond : `Three Stories`,
                  content:`Noble’s novel is a saucy little satire on human frailty.
                   It dramatizes not only the mistakes our egos and libidos often 
                   lead us into but also our inherent intellectual ability to rationalize
                    and accept less than honorable behavior.”`,
                  alt: `couple`,
                  }
                }
              /> 

              <Section
                metaData={{
                  title: `Featured Book`,
                  num: `02`,
                  cl : 'second_panel',
                  bgClass : `second_svg_bg`,
                  pathRedirect:`/about-the-book`,
                  imgCl : 'img-s',
                  img: image2,
                  spanFirst :`Sussies`,
                  spanSecond : `Submissions`,
                  content : `About attractive middle-aged women who
                  have been abandoned by their husbands. 
                  “The Price,” “The Office,” and “The Hot Tub”`,
                  alt: `couple`,
                  }
                }
              />

              <Section 
                metaData={{
                  title: `Author | Writer `,
                  num: `03`,
                  cl : 'third_panel',
                  bgClass : `third_svg_bg`,
                  pathRedirect:`/about-the-author`,
                  imgCl : 'img-th',
                  img: image3,
                  spanFirst :`Gardiner`,
                  spanSecond : `Noble`,
                  content : `Gardiner Noble is a retired electrical engineer who 
                  spent forty years in the automobile. ”`,
                  alt: `couple`,
                  }
                }
              /> 

              
              <nav className={`navigation-list`}>
                  <li>
                      <a 
                        href="https://www.facebook.com/Gardiner-Noble-109086423843114/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                            className='font-awesome'
                            icon={faFacebook} />
                      </a>
                    </li>

                    <li>
                        <a
                         href="https://twitter.com/strattonpress/"
                         target="_blank"
                        >
                          <FontAwesomeIcon
                              className='font-awesome'
                              icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a
                          href="https://www.instagram.com/strattonpress/"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                              className='font-awesome'
                              icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                       <a
                          href="https://www.goodreads.com/author/show/19650580.Gardiner_Noble"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                              className='font-awesome'
                              icon={faGoodreads} />
                      </a>
                  </li>
              </nav>
            
              <section className="button-arrows">

                  <button 
                      onClick={()=> 
                      __setFunctState(sectState > 0 ? sectState-1 : 0)}
                      className="__btn arrow-left"><i class="gg-chevron-left"></i></button>


                  <button 
                      onClick={()=>
                      __setFunctState( sectState < 2 ? sectState+1 : 2)}
                    className="__btn arrow-right"><i class="gg-chevron-right"></i></button>

              </section>      

            </main>       
          <PageNum nextState={sectState}/>
        </header>        
      </div>
        
    </>
  )
}

export default IndexPage
