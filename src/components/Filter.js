import React from 'react';

class Filter extends React.Component {
    render() {
        const { index, filter } = this.props;
        const { preText, id, operator, value } = filter;

        return (
            <div className="Filter">
                <label>{preText}  </label>
                <select className="id" name={"Filter-" + index}>
                    <option value="name">Name</option>
                    <option value="screen_name">Screen Name</option>
                    <option value="followers_count">Followers Count</option>
                    <option value="following_count">Following Count</option>
                </select>
            </div>
        )
    }
}

export default Filter;
