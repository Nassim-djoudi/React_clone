//Nav
import React,{useEffect,useState} from 'react'
import "./Nav.css"
import { BiSearch,BiBell } from "react-icons/bi";
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
			<img className="nav_logo nav_icon"
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix Logo"
			/>
			<div className="nav_icons">
				<BiSearch className="nav_icon" color="white" size="22px"/>
				<BiBell className="nav_icon" color="white" size="22px"/>
				<img className="nav_avatar nav_icon"
					src="https://icon-library.com/images/netflix-icon-black/netflix-icon-black-19.jpg"
					alt="Profile Picture"
				/>
			</div>
		</div>
	)
}