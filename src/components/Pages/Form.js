import React from 'react';
import '../../styles/Form.css';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h1>Contact Me</h1>
    	<div>
			<div>
				<textarea
					id="userName"
					name="test-mailing"
					onChange={this.handleChange}
					placeholder="Your name"
					required
					value={this.state.name}
					style={{width: '100%', height: 'px'}}
				/>
				<textarea
					id="userEmail"
					name="test-mailing"
					onChange={this.handleChange}
					placeholder="Your email"
					required
					value={this.state.email}
					style={{width: '100%', height: 'px'}}
				/>
			</div>
			<textarea
				id="test-mailing"
				name="test-mailing"
				onChange={this.handleChange}
				placeholder="Your Message"
				required
				value={this.state.feedback}
				style={{width: '100%', height: '150px'}}
			/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_id';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

}