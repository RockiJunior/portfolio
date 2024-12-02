import Navbar from '../components/navbar/Navbar';
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactForm = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				`${process.env.NEXT_PUBLIC_SERVICE_ID}`,
				`${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
				e.target,
				`${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
			)
			.then(
				(res) => {
					console.log('Email enviado', res.text);
					toast.success('Message sent successfully!', {
						position: 'bottom-right',
						autoClose: 3000,
						hideProgressBar: false,
						closeButton: true,
						className: 'toast-success',
						bodyClassName: 'toast-body',
						toastId: 'success-toast',
					});
				},
				(err) => {
					console.log(err.text);
					toast.error('Error sending message. Please try again later.', {
						position: 'bottom-right',
						autoClose: 3000,
						hideProgressBar: false,
						closeButton: true,
						className: 'toast-error',
						bodyClassName: 'toast-body',
						toastId: 'error-toast',
					});
				}
			);
		e.target.reset();
	};

	return (
		<>
			<Navbar />
			<div className="container text-center py-3">
				<form onSubmit={(e) => sendEmail(e)}>
					<div className="col-8 form-group mx-auto">
						<input
							type="text"
							className="form-control rounded"
							placeholder="Name"
							name="name"
						/>
					</div>
					<div className="col-8 form-group pt-2 mx-auto">
						<input
							type="email"
							className="form-control rounded"
							placeholder="Email Address"
							name="email"
						/>
					</div>
					<div className="col-8 form-group pt-2 mx-auto">
						<input
							type="text"
							className="form-control rounded"
							placeholder="Subject"
							name="subject"
						/>
					</div>
					<div className="col-8 form-group pt-2 mx-auto">
						<textarea
							className="form-control rounded"
							id=""
							cols="30"
							rows="8"
							placeholder="Your Message"
							name="message"
						/>
					</div>
					<div className="col-8 pt-3 mx-auto">
						<input
							type="submit"
							className="btn btn-info rounded-5"
							value="Send Message"
							name="name"
						/>
					</div>
				</form>
			</div>
			<ToastContainer />
		</>
	);
};

export default contactForm;
