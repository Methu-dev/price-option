import React, { useState } from 'react'
import Link from '../Link/Link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

function Nav() {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1,
         path: "/",
         name: "Home"
        },
        {
            id: 2,
            path: "/About",
            name: "About"
        },
        {
            id: 3,
            path: "/Service",
            name: "Service"
        },
        {
            id: 4,
            path: "/Contact",
            name: "Contact",
        },
        {
            id: 5,
            path: "*",
            name: "Not Fount"
        },
    ];
  return (
    <nav>
        <span className='text-2xl md:hidden ' onClick={()=> setOpen(!open)}>
            {
                open === true ? <ImCross /> : <GiHamburgerMenu />
            }
            
        </span>

      <ul className={`md:flex duration-1000 absolute ${open ? "top-8" : "-top-60"} bg-amber-400 px-6 md:static w-full justify-center items-center text-center gap-6`}> 
        {
           routes.map(route => <Link key={route.id} route={route}/>) 
        }
      </ul>
    </nav>
  )
}

export default Nav
