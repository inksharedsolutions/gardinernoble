import React, {useRef, useEffect, useState} from "react"
import Nav from '../components/navigation'
import PageNum from '../components/page-num'
import  Section from '../components/section'
import { Link } from "gatsby"
import {Helmet} from "react-helmet"
import { TweenMax, TimelineMax } from "gsap";
//images
import image1 from '../../static/img/couple.png'
import image2 from '../../static/img/book_cover.png'
import image3 from '../../static/img/author.jpg'


const IndexPage = () =>{

  const mainRef = useRef(null);
  const [sectState, __setFunctState] = useState(0);
  const [currState, ___setCurrState] = useState(0); 

  
  useEffect(() => {

    const elSection = mainRef.current.querySelectorAll('.page-section');

    
    //set the first element as active....
    elSection.forEach( ( el, ind) => {
        if(ind === 0){
          el.classList.add('page_active_section')
        }   
    });
    
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


      /* Right Elements.... */
      const imgWrapper  = nextSlideRight.querySelector('.image-wrapper-anim')


      const tl  = new TimelineMax();

      /* Heading Animation*/
      tl.to(imgWrapper, 1, {width: '0%'})
        .to(np, 1.2, {right:'0'})
        .to(wt, 1.2, { width: '0'}, {width:'0px'})

      tl.fromTo(fsh, 0.7, {y: '75'}, {y: '0', onComplete : ()=>{ 
          tl.fromTo(ssh, 0.7, {y: '75'}, { y: '0', })
      }})
   
      ___setCurrState(sectState);

    }     

    if(sectState != -1){
        elSection.forEach((el , ind)=>{
           el.classList.remove('page_active_section');
        });

        elSection[sectState].classList.add('page_active_section');
        animation(sectState);
    }

  }, [sectState , currState]);

  return(
    <>
      <div id="parent-block"> 
			  <header>
          
          <Nav /> 
            <main ref={mainRef} 
                  id="main-section">


              <Section 
                metaData={{
                  title: `Sussies Sumbission`,
                  num: `01`,
                  cl : 'first_panel',
                  img: image1,
                  spanFirst :`Anthology of`,
                  spanSecond : `Three Stories`,
                  content : `About attractive middle-aged women who
                  have been abandoned by their husbands. 
                  “The Price,” “The Office,” and “The Hot Tub”`,
                  alt: `couple`,
                  }
                }
              /> 

              <Section
                metaData={{
                  title: `Featured Book`,
                  num: `02`,
                  cl : 'second_panel',
                  img: image2,
                  spanFirst :`Anthology of`,
                  spanSecond : `Three Stories`,
                  content : `About attractive middle-aged women who
                  have been abandoned by their husbands. 
                  “The Price,” “The Office,” and “The Hot Tub”`,
                  alt: `couple`,
                  }
                }
              />

              <Section 
                metaData={{
                  title: `Author| Writer `,
                  num: `03`,
                  cl : 'third_panel',
                  img: image3,
                  spanFirst :`Gardiner`,
                  spanSecond : `Noble`,
                  content : `About attractive middle-aged women who
                  have been abandoned by their husbands. 
                  “The Price,” “The Office,” and “The Hot Tub”`,
                  alt: `couple`,
                  }
                }
              />  
            
              <section className="button-arrows">
                
                <button onClick={()=> 
                          __setFunctState(sectState > 0 ? sectState-1 : 0)}
                        className="__btn arrow-left">Left</button>


                <button onClick={()=> __setFunctState( sectState < 2 ? sectState+1 : 2)}
                      className="__btn arrow-right">Right</button>
              </section>      

            </main>       
          <PageNum/>       
        </header>        
      </div>
        
    </>
  )
}

export default IndexPage
