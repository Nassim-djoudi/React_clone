import React,{useState,useRef} from 'react'
import "./LoginPage.css"
import Logo from "../pictures/Netflix.svg"
import SignInPage from "./SignInPage"
export default function LoginPage() {
	const [signIn, setSignIn] = useState(false)
	const [register, setRegister] = useState(true)
	const emailRef=useRef(null);
	return (
		<div className="LoginPage">
			<div className="loginPage_background">
				<img className="loginPage_logo"
					src={Logo}
					alt="Netflix Logo"
				/>
				<button 
					onClick={()=>{setRegister(false);setSignIn(true)}}
					className="loginPage_button" onclick={()=>{}}>
					S'identifier
				</button>
				<div className="loginPage_gradient"/>
				<div className="loginPage_body">
				{signIn ? (
						<SignInPage mail_place={emailRef} register={register}/>
					):
				<>
						<h1>Films, séries TV et bien plus en illimité.</h1>
						<h2>Où que vous soyez. Annulez à tout moment.</h2>
						<h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
						<div className="loginPage_input">
								<input ref={emailRef} type="email" placeholder="Adresse e-mail"/>
								<button
									onClick={()=>{console.log(emailRef);setSignIn(true)}}
									 className="loginPage_start">Commencez</button>
									
						</div>
					</>
			}
					
				</div>
			</div>
		</div>
	)
}