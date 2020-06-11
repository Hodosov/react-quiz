import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

class Drawer extends Component {


    renderLinks(links) {
        return links.map((link, index) => {
            return <li key={index}>
                <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={classes.active}
                    onClick={this.props.onClose}
                >{link.label}</NavLink>
            </li>
        })
    }

    render() {

        const open = !this.props.isOpen && `${classes.close}`

        const links = [
            {
                to: '/',
                label: 'Список',
                exact: true
            }
        ]

        if (this.props.isAuthenticated) {
            links.push({
                to: '/quiz-creator',
                label: 'Создать тест',
                exact: false
            },
                {
                    to: '/logout',
                    label: 'Выйти',
                    exact: false
                })
        } else {
            links.push({
                to: '/auth',
                label: 'Авторизация',
                exact: false
            })
        }

        return (
            <>
                <nav className={`${classes.Drawer} ${open}`}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen && <Backdrop onClose={this.props.onClose} />}
            </>
        )
    }
}

export default Drawer