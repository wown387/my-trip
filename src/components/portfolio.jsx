import React from "react";
import portfolio from './image/lee.png'
function Portfolio() {

  
  return (
    <div className="portfolio">
        <img src={portfolio}  alt="my pho"/>
          
            <li>Pukyong National University 2014~2020 (Industry Engineering)</li>
            <li>I'm interested in  develop services that can make wave world</li>
            <li>I try do my best whatever you request</li>
            
             <h3>my skills</h3>
              <p>react &#9733; &#9733;</p>
               <p>python  &#9733; &#9733; &#9733;</p>
               <p>patience  &#9733; &#9733;  &#9733;  &#9733;</p>
                <p>confidence  &#9733; &#9733;  &#9733;  &#9733; &#9733;</p>
                <a href="https://github.com/wown387/my-trip"><h1>source code</h1></a>
             
    </div>
  );
}

export default Portfolio;
