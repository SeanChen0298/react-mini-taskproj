import React from 'react'

//props is a default react thing that allow access to attributes
// example: 1. (props) => { 2. props.title
// can also be destructed as {title}
const Header = (props) => {
    return (
        <div>
            {/* use double {{}} to write css styles*/}
            <h1 style={{color: 'blueviolet', backgroundColor: 'black'}}>{props.title}</h1>
            <h2 style={headingStyle}>Allo</h2>
        </div>
    )
}

// example of default props
Header.defaultProps = {
    title:'task tracker'
}

// example of using css as a variable
const headingStyle = {
    color: 'cyan', 
    backgroundColor: 'black'
}

export default Header
