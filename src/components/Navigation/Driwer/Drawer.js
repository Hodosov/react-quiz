import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'



const links = [
    1, 2, 3
]

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return <li key={index}>
                <a>Link: {link}</a>
            </li>
        })
    }

    render(){

        const open = !this.props.isOpen && `${classes.close}`

        return(
            <>
            <nav className={`${classes.Drawer} ${open}`}>
                <ul>
                    { this.renderLinks()}
                </ul>
            </nav>
            { this.props.isOpen &&  <Backdrop onClose={this.props.onClose}/> }
            </>
        )
    }
}

export default Drawer