import React,{useRef} from 'react'
import "./SignInPage.css"
import {auth} from "../firebase"

export default function SignInPage(props) {

	const emailRef=useRef(null);
	const passwordRef=useRef(null);


	const register = (e)=> {
		e.preventDefault();

		auth.createUserWithEmailAndPassword(
			auth.getAuth(),
			emailRef.current.value,
			passwordRef.current.value
			).then(()=>{

			}).catch((error)=> {
				alert(error.message);
			});
	}

	const signIn = (e)=> {
		e.preventDefault();
		auth.signInWithEmailAndPassword(
			auth.getAuth(),
			emailRef.current.value,
			passwordRef.current.value
			).catch((error)=> {
				alert(error.message);
			})
	}

	return (
		<div className="signinPage">
			<form>
			<h1>Sign In</h1>
			<input ref={emailRef} placeholder="Adresse e-mail" type="email" onFocus="this.value='';"/>
			<input ref={passwordRef} placeholder="Mot de Passe" type="password"/>
			<button type="submit" onClick={signIn}>S'identifier</button>
			<h4><span className="signinPage_grey">Première visite sur Netflix ?</span>
			<span className="signinPage_link" onClick={register}> Inscrivez-vous.</span></h4>
			</form>
		</div>
	)
}