import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom';


export function Navbar() {
  const[ismobile,setismobile]=useState(false)
  const history=useHistory()
  return(
        <nav className="navbar">
            <ul className={ismobile ? "nav-links-mobile" : "nav-links"}
            onClick={()=>setismobile(false)}> 
            <Link to="/" className="Home">
                <li>Home</li>
                </Link>
                <Link to="/movies" className="About">
                <li>Movies</li>
                </Link>
                <Link to="/addmovie" className="Contact">
                <li>Add Movie</li>
                </Link>
                <Link to="/login" className="Skills">
                <li>Log in</li>
                </Link>

            </ul>
              <button className="mobile-menu-icon" onClick={()=>setismobile(!ismobile)}>
                {ismobile ? (<CloseIcon/> ): (<MenuOutlinedIcon/>)}
              </button>
              <img onClick={()=>history.push("/movies")} src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"className="Logo"alt='logo'/>
        </nav>

  ) 
  }

