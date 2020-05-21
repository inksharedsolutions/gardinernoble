 import React from 'react'
 


const PageNum = (props)=>{

    const activeNum = props.nextState + 1;
    const activeSLides = ['list_1', 'list_2', 'list_3'];
    
    return(
        <> 
            <nav id="page-num">
                {   
                    activeSLides.map( (e, indx) =>{ 
                        const elem = indx < activeNum ? 
                            (
                              <li key={e} 
                                className="active-page-num">
                              </li>
                            ) : (<li></li>)
                        return(elem);
                    })
                }
            
                <span className="page-count-num">
                    <span>{`0${activeNum}`}
                    </span> /<span> 03</span>
                </span>
            </nav>
        </>
    )
    
}


export default PageNum