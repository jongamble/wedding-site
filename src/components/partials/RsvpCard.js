import React, { Component } from 'react';

export default class RsvpCard extends Component {
	constructor(props) {
	    super(props);
	    let state = {};
	    this.props.fields.map((field,index) => {
	    	state[field.name + '-' + this.props.index] = '';
	    });
	    this.state = state;
	}

	getSelectOptions(field, parentIndex) {
		return field.options.map((option, index) => {
			return (<option key={'select-option-' + parentIndex + '-' + index} value={option.value}>{option.label}</option>);
		});
	}

	getFields() {
		return this.props.fields.map((field, index) => {
			if(field.type == 'text'){
				return (
					<div key={"rsvp-" + index}>
						<label className="rsvp-cards--label" htmlFor={field.name}>{field.label}</label>
						<input
							name={field.name + '-' + this.props.index}
							type={field.type}
							className="rsvp-cards--textbox"
							onChange={this.props.onChange}
						/>
					</div>
				);
			} else {
				return (
					<div key={"rsvp-" + index}>
						<label className="rsvp-cards--label" htmlFor={field.name}>{field.label}</label>
						<select
							name={field.name + '-' + this.props.index}
							onChange={this.props.onChange}
							className="rsvp-cards--select"
							value={this.state[field.name + '-' + this.props.index].value}
						>
							<option></option>
							{this.getSelectOptions(field, index)}
						</select>
					</div>
				);
			}
		});
	}

	render() {
		return (
			<div className="rsvp-cards--item" key={'render-cards-item-' + this.props.index}>
				{this.getFields()}
			</div>
		);
	}
}
