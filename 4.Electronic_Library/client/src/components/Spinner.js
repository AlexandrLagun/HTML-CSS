import React from 'react';
export default class Spinner extends React.Component {
    render() {
        const className = `spinner-border text-success ${this.props.className}`;
        if (this.props.isLoading) {
            return <div className={className} role='status' />;
        } else {
            return '';
        }
    }
}