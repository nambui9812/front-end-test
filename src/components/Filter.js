import React from 'react';

class Filter extends React.Component {

    onChangeId = (e, index) => {
        this.props.updateId(e.target.value, index);
    }

    onChangeOperator = (e, index) => {
        this.props.updateOperator(e.target.value, index);
    }

    onChangeValue = (e, index) => {
        this.props.updateValue(e.target.value, index);
    }

    render() {
        const { index, filter } = this.props;
        const { id, operator, value } = filter;

        const renderOperator = () => {
            if (id === "name" || id === "screen_name" || id === "location") {
                return (
                    <select className="operator" value={operator} onChange={(e) => this.onChangeOperator(e, index)}>
                        <option value=""></option>
                        <option value="CONTAINS">Contains</option>
                    </select>
                )
            }
            else if (id === "followers_count" || id === "following_count") {
                return (
                    <select className="operator" value={operator} onChange={(e) => this.onChangeOperator(e, index)}>
                        <option value=""></option>
                        <option value="GTE">Greater or equal</option>
                        <option value="LTE">Less or equal</option>  
                    </select>
                )
            }
            else if (id === "verified") {
                return (
                    <select className="operator" value={operator} onChange={(e) => this.onChangeOperator(e, index)}>
                        <option value=""></option>
                        <option value="EQ">Equals</option>
                    </select>
                )
            }
            else {
                return (
                    <select className="operator" value={operator} onChange={(e) => this.onChangeOperator(e, index)}>
                        <option value=""></option>
                    </select>
                )
            }
        };

        const renderValue = () => {
            if (id === "name" || id === "screen_name" || id === "location") {
                return (
                    <input className="value" type="text" value={value} onChange={(e) => this.onChangeValue(e, index)} />
                )
            }
            else if (id === "followers_count" || id === "following_count") {
                return (
                    <input className="value" type="text" value={value} onChange={(e) => this.onChangeValue(e, index)} />
                )
            }
            else if (id === "verified") {
                return (
                    <select className="operator" value={value} onChange={(e) => this.onChangeValue(e, index)}>
                        <option value=""></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                )
            }
            else {
                return (
                    <input className="value" type="text" value={value} onChange={(e) => this.onChangeValue(e, index)} />
                )
            }
        };

        return (
            <div className="Filter">
                <label>{index === 0 ? "Where" : "And"}</label>
                <select className="id" value={id} onChange={(e) => this.onChangeId(e, index)}>
                    <option value=""></option>
                    <option value="name">Name</option>
                    <option value="screen_name">Screen Name</option>
                    <option value="followers_count">Followers Count</option>
                    <option value="following_count">Following Count</option>
                    <option value="verified">Verified</option>
                </select>
                {renderOperator()}
                {renderValue()}
                <button className="delete" onClick={() => this.props.deleteCondition(index)}>X</button>
            </div>
        )
    }
}

export default Filter;
