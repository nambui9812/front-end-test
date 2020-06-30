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
		// First filter
		if (this.state.conditions.length === 0) {

			let newCondition = {
				preText: 'Where',
				id: '',
				operator: '',
				value: ''
			};

			this.setState(state => ({
				conditions: state.conditions.concat(newCondition)
			}));
		}
		// More filter
		else {

			let newCondition = {
				preText: 'And',
				id: '',
				operator: '',
				value: ''
			};
			
			this.setState(state => ({
				conditions: state.conditions.concat(newCondition)
			}));
		}
	}

	render() {
		return (
			<div className="Filters">
				{this.state.conditions.map((condition, index) => (
					<Filter key={index} index={index} filter={condition} />
				))}		

				<div className="add-filter" onClick={() => this.handleAddFilter()}>
					+ Add Filters
				</div>
			</div>
		)
	}

}

export default Filters;
