import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar_wrapper">
            <div />
            <div>
                <i className="material-icons">dashboard</i>
                <p>DASHBOARD</p>
            </div>
            <div>
                <i className="material-icons">person</i>
                <p>VENDOR</p>
            </div>
            <div>
                <i className="material-icons">description</i>
                <p>PURCHASE</p>
            </div>
        </div>
    )
}