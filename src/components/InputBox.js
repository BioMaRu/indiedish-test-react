import React from 'react';

class InputBox extends React.Component {
	render() {
    	return(
			<form onSubmit={ this.submitForm.bind(this) }>
				<input type="text" placeholder="Enter your text here" ref="itemInput" />
			</form>
		)
	}
	submitForm(e) {
		e.preventDefault();
		if(this.refs.itemInput.value!=''){
			this.props.onSubmit(this.refs.itemInput.value)
		}
		this.refs.itemInput.value = ''
	}
}

export default InputBox