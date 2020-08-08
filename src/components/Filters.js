import React from 'react';

import Filter from './Filter';

class Filters extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			conditions: []
		};
	}

	handleAddFilter = () => {
		let newCondition = {
			id: '',
			operator: '',
			value: ''
		};

		this.setState(state => ({
			conditions: state.conditions.concat(newCondition)
		}));
	}

	updateId = (value, index) => {
		this.setState(state => {
			const newConditions = state.conditions.map((condition, i) => {
				if (index === i) {
					condition.id = value;
					condition.operator = '';
					condition.value= '';
					return condition;
				}
				else {
					return condition;
				}
			});

			return {
				conditions: newConditions
			};
		});
	}

	updateOperator = (value, index) => {
		this.setState(state => {
			const newConditions = state.conditions.map((condition, i) => {
				if (index === i) {
					condition.operator = value;
					condition.value = '';
					return condition;
				}
				else {
					return condition;
				}
			});

			return {
				conditions: newConditions
			};
		});
	}

	updateValue = (value, index) => {
		this.setState(state => {
			const newConditions = state.conditions.map((condition, i) => {
				if (index === i) {
					condition.value = value;
					return condition;
				}
				else {
					return condition;
				}
			});

			return {
				conditions: newConditions
			};
		});
	}

	deleteCondition = (index) => {
		this.setState(state => ({
			conditions: state.conditions.filter((condition, i) => index !== i)
		}));
	}

	render() {
		console.log(this.state.conditions);
		return (
			<div className="Filters">
				{this.state.conditions.map((condition, index) => (
					<Filter key={index} index={index} filter={condition} updateId={this.updateId} updateOperator={this.updateOperator} updateValue={this.updateValue} deleteCondition={this.deleteCondition} />
				))}		

				<div className="add-filter" onClick={() => this.handleAddFilter()}>
					+ Add Filters
				</div>
			</div>
		)
	}

}

export default Filters;
