import React from "react";
import style from "./Navlist.module.css"


const NavList = ({Toggle}) => {
  const List=[
    {id:1,
      navitem:"Home"
    },
    {id:2,
      navitem:"About"
    },
    {id:3,
      navitem:"Work"
    },
    {id:4,
      navitem:"Port"
    },
    {id:5,
      navitem:"Contact"
    },
  ]


    const text= (event) => {  
        let iteration = 0;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if(index < iteration) {
                return event.target.dataset.value[index];
              }
            
              return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
          
          if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
          }
          
          iteration += 1 / 3;
        }, 30);
      }    
     
     
    
  return (
   
      <ul className={style.list} >
      {
        List.map((item)=>(
          <li  key={item.id}><h1  onMouseOver={text} data-value={item.navitem}>
          {item.navitem}
        
          </h1></li>
        ))
      }
      </ul>
    
  );
};

export default NavList;
