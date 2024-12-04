import React from 'react'
import Profile from './Profile'
import Shortcuts from './Shortcuts'

function LeftSideBar() {
    return (
        <div className="shortcuts">
            <Profile/>
            <Shortcuts/>
        </div>

    )
}

export default LeftSideBar
