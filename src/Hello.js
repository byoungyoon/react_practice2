import React from 'react';
import PropTypes from 'prop-types';

Hello.defaultProps = {
    name: "not name"
}

Hello.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired
};
function Hello({name, number, children}){
    return(
        <div>
            <h1>Hello {name} - {number}</h1>
            <div>{children}</div>
        </div>
    );
}

export default Hello;