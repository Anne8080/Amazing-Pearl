import React from 'react'
import './job.scss'
import '../register/register.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Backnext from '../../components/backnext/Backnext'

const Jobform = () => {
	return (
		<div>
			<Navbar/>
			<section className="register">
				<div className="title">
					<h2>Join Our Team</h2>
				</div>
				<form action="">
					<div className="info">
						<div className="f">
							<label htmlFor="">*First Name</label><br />
							<input type="text" />
						</div>
						<div className="f">
							<label htmlFor="">*Last Name</label><br />
							<input type="text" />
						</div>
						<div className="f">
							<label htmlFor="">*Email Address</label><br />
							<input type='email' />
						</div>
						<div className="f">
							<label htmlFor="">Mobile Number</label><br />
							<input type='tel' />
						</div>
						<div className="f">
							<label htmlFor="">Gender</label><br />
							<input type="text" />
						</div>
						<div className="f">
							<label htmlFor="">Date Of Birth</label><br />
							<input type='date' />
						</div>
						<div className="f">
							<label htmlFor="">*Address</label><br />
							<input type='text' />
						</div>
						<div className="f">
							<label htmlFor="">*Job status</label><br />
							<input type="text" />
						</div>
						<div className="f">
							<label htmlFor="">*Years of experience</label><br />
							<input type='number' />
						</div>
						<div className="f">
							<label htmlFor="">Last type of job</label><br />
							<input type='text' />
						</div>
						<div className="f">
							<label htmlFor="">Most recent qualification</label><br />
							<input type='text' />
						</div>
						<div className="f">
							<label htmlFor="">*How do you prefer we contact you</label><br />
							<input type='text' />
						</div>
					</div>
					<div className="check">
						<input type="checkbox" />
						<p>*I consent to have Right at Home collect my name, phone number, email and comments.</p>
					</div>
				</form>
				<Backnext back='/jobs' next='/'/>
			</section>
			<Footer/>
		</div>
	)
}

export default Jobform