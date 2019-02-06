import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    state = { toggleDrawer: false }
    handleDrawerToggle = () => {
        this.setState({ toggleDrawer: !this.state.toggleDrawer })
    }
    render() {
        return (
            <React.Fragment>
                <div className="header_wrapper">
                    <section className='header_main_container'>
                        <h1>SETTINGS</h1>
                    </section>
                    <section className='header_nav_bar'>
                        <h3>My Company</h3>
                        <h3>Messages</h3>
                        <div onClick={this.handleDrawerToggle}>
                            <i className="material-icons">menu</i>
                        </div>
                    </section>
                </div>
                <Drawer toggleDrawer={this.state.toggleDrawer} handleDrawerToggle={this.handleDrawerToggle} />
            </React.Fragment>
        )
    }
}




function Drawer(props) {
    return (
        <div className={props.toggleDrawer ? "drawer_wrapper" : "drawer_wrapper hidden"}>
            <section className="drawer_top_section">
                <div className='flex_center'>
                    <i className="material-icons">arrow_back</i>
                    <h2>New Conversation</h2>
                    <i className="material-icons" onClick={props.handleDrawerToggle}>clear</i>
                </div>
                <div className='flex_center'>
                    <i className="material-icons">add</i>
                    <i className="material-icons">#</i>
                </div>
            </section>
            <section className='drawer_bottom_section '>
                <div className='drawer_message_nav flex_center '>
                    <h2>Conversation</h2>
                    <h2>Files</h2>
                    <h2>Logs</h2>
                </div>
                <div className='messageBar flex_center justify_center'>
                    <div>
                        <input style={{
                            background: 'white',
                            height: '25px',
                            width: '325px',
                            margin: '0 32px',
                            borderRadius: '1px',

                        }} />
                        <i className="material-icons">send</i>
                    </div>
                </div>
            </section>
        </div>
    )
}