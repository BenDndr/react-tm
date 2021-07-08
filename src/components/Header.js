import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({ title, onAdd, showAdd }) => {


    return (
        <header className = 'header'>
          <h1>{title}</h1>  
          <Button 
            color={showAdd ? 'darkred' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            click={onAdd}
        /> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'darkblue',
//     backgroundColor: 'black',
// }

export default Header
