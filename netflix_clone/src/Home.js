//Home
import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./Home.css"


export default function Home() {
	return (
		<div className="Home">
			<header>
			<img className="home_logo"
						src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
						alt="Netflix Logo"
					/>
			</header>
			<body>
				<h2 className="chkoun">Qui est-ce ?</h2>
				<div className="users">
					<div className="user">
					<img className="user_photo"
						src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
						alt="Jean"
					/>
					<h3 className="user_name">Jean</h3>
					</div>
					<div className="user">
					<img className="user_photo"
						src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
						alt="Jean"
					/>
					<h3 className="user_name">Jean</h3>
					</div>
					<div className="user">
					<img className="user_photo"
						src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
						alt="Jean"
					/>
					<h3 className="user_name">Jean</h3>
					</div>
				</div>
			</body>
		</div>
	)
}