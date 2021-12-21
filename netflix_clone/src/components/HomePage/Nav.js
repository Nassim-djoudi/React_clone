//Nav
import React,{useEffect,useState} from 'react'
import "./Nav.css"
import { BiSearch,BiBell } from "react-icons/bi";
import {RiArrowDropDownFill} from "react-icons/ri"
import logo from "../../pictures/Netflix.svg"
import avatar from "../../pictures/Avatar_1.png"
export default function Nav() {
	const [show, handleShow] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll",()=>{
			if(window.scrollY > 100){
				handleShow(true)
			}else handleShow(false);
		});
		return ()=>{
			window.removeEventListener("scroll");
		}
	}, [])

	return (
		<div className={`nav ${show && "nav_black"}`}>
			<div className="left">
				<img className="nav_logo nav_icon"
					src={logo}
					alt="Netflix Logo"
				/>
				<div className="parcourir">
					<h2 className="parcourir_text">Parcourir</h2>
					<RiArrowDropDownFill className="parcourir_icon" color="white" size="25px"/>
				</div>
			</div>
			<div className="nav_icons">
				<BiSearch className="nav_icon" color="white" size="22px"/>
				<BiBell className="nav_icon" color="white" size="22px"/>
				<img className="nav_avatar nav_icon"
					src={avatar}
					alt="Profile Picture"
				/>
			</div>
		</div>
	)
}