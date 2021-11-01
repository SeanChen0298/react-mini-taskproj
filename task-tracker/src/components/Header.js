import React from 'react'
import Button from './Button'

const Header = ({title, onClick}) => {

    return (
        <div>
            <h1>Todos Tracker</h1>
            <Button color='AliceBlue' text={title} func={onClick}/>
        </div>
    )
}

Header.defaultProps={
    title:'task tracker'
}

export default Header
