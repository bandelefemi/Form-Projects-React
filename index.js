/// FORMS ////

import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'


function Form(){
	const [formData, setFormData] = React.useState(
	{
		username: "",
		password: "",
		rePassword: "",
		newsLetter: true,
		passwordError: "",
		newsLetterSuccess: ""
		
	})


function handleChange(event) {
	
	const {name, type, value, checked} = event.target
	setFormData(prevData => {
		return {
			...prevData,
			[name]: type === "checkbox" ? checked : value
		}
	})
	
} 

function handleSubmit(event){
	
	event.preventDefault()
	
	if (formData.password === formData.rePassword){
		console.log("logged in successfully!")
	} else console.log("passwords do not match")
	
	
	if (formData.newsLetter && (formData.password===formData.rePassword)) {
		console.log("thanks for signing up for our newsletter")
	}
	

}


return (

<div className="formData">

<form onSubmit={handleSubmit}>

	<input 
		type="text"
		value={formData.username}
		placeholder="username"
		onChange={handleChange}
		name="username"
		className="discord"
	/>
	
	<input
		type="password"
		value={formData.password}
		placeholder="password"
		onChange={handleChange}
		name="password"
		className="discord"
	/>
	
	<input
		type="password"
		value={formData.rePassword}
		placeholder="retype password"
		onChange={handleChange}
		name="rePassword"
		className="discord"
	/>
	<div>
	<input 
		type="checkbox"
		id="newsLetter"
		onChange={handleChange}
		name="newsLetter"
		checked={formData.newsLetter}
		
	
	/>
	
	<label htmlFor="newsLetter"> I want to join the newsletter</label>
	</div>
	
	<button className="signup">sign up</button>
</form>

</div>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Form />
	</React.StrictMode>
)

