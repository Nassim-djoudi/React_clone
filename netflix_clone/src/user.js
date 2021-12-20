//USER
import React from 'react'

export default function user(name,imgUrl) {
	return (
		<div>
			<img className="user_photo"
				src={imgUrl}
				alt={name}
				/>
			<h3 className="user_name">{name}</h3>
		</div>
	)
}