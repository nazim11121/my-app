import React,{useState} from 'react'

const Registration = () => {

	
	const [userRegistration, setUserRegistration] = useState({
		fullname:"",
		email:"",
		mobile:"",
		password:""
	});

	const [record, setRecord] = useState([]);

	const handleInput = (e) => {	

		const name = e.target.name;
		const value = e.target.value;

		setUserRegistration({...userRegistration, [name] : value});
	}

	const handleSubmit = (e) => {

			e.preventDefault();
			const newRecord = { ...userRegistration, id: new Date().getTime().toString() }

			setRecord([...record, newRecord])

			setUserRegistration({fullname:"", email:"", mobile:"", password:""})
	}

	return(
		<>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="fullname">Full Name</label>
					<input type="text" name="fullname" id="fullname" value={userRegistration.fullname} onChange={handleInput} />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={userRegistration.email} onChange={handleInput} />
				</div>
				<div>
					<label htmlFor="mobile">Mobile</label>
					<input type="text" name="mobile" id="mobile" value={userRegistration.mobile} onChange={handleInput} />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={userRegistration.password} onChange={handleInput} />
				</div>
				<button type="submit">Registration</button>
			</form>

			<div>
				{
					record.map((curElem) =>{
						return(
							<div className="showDataStyle">
								<p>{curElem.fullname}</p>
								<p>{curElem.email}</p>
								<p>{curElem.mobile}</p>
								<p>{curElem.password}</p>
							</div>
						)
					}
					)
				}
			</div>
		</>
	)
}

export default Registration