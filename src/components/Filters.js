import React from 'react';

import Filter from './Filter';

import data from '../data.json';

class Filters extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			conditions: [],
			data: data
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

	handleFilter = () => {
		let conditions = this.state.conditions;
		
		for (let i = 0; i < conditions.length; ++i) {
			let condition = conditions[i];

			console.log(condition.id);

			if (condition.id === "name") {
				this.setState({
					data: this.state.data.filter(user => user.name.includes(condition.value))
				})
			}
			else if (condition.id === "screen_name") {
				this.setState({
					data: this.state.data.filter(user => user.screen_name.includes(condition.value))
				})
			}
			else if (condition.id === "followers_count") {
				if (condition.operator === "GTE") {
					this.setState({
						data: this.state.data.filter(user => user.followers_count >= condition.value)
					})
				}
				else {
					this.setState({
						data: this.state.data.filter(user => user.followers_count <= condition.value)
					})
				}
			}
			else if (condition.id === "following_count") {
				if (condition.operator === "GTE") {
					this.setState({
						data: this.state.data.filter(user => user.following_count >= condition.value)
					})
				}
				else {
					this.setState({
						data: this.state.data.filter(user => user.following_count <= condition.value)
					})
				}
			}
			else if (condition.id === "location") {
				this.setState({
					data: this.state.data.filter(user => user.location.includes(condition.value))
				})
			}
			else if (condition.id === "verified") {
				this.setState({
					data: this.state.data.filter(user => user.verified.toString() === condition.value)
				})
			}
		}
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

				<button id="filter" onClick={() => this.handleFilter()}>Filter</button>

				<table id="result">
					<tbody>
						<tr>
							<th>Name</th>
							<th>Screen Name</th>
							<th>Followers Count</th>
							<th>Following Count</th>
							<th>Location</th>
							<th>Verified</th>
						</tr>

						{
							this.state.data.map((user, index) => {
								return (
									<tr key={index}>
										<td>{user.name}</td>
										<td>{user.screen_name}</td>
										<td>{user.followers_count}</td>
										<td>{user.following_count}</td>
										<td>{user.location}</td>
										<td>{user.verified ? "Yes" : "No"}</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		)
	}

}

export default Filters;
