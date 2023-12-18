import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import './Header.scss'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    const [active, setActive] = useState(false)

    return (
        <section className='header'>
            <div className='header-content'>
                <Link to='/'>
                    <img src={logo} alt='logo' className='logo' />
                </Link>
                {active
                    ? <Menu active={active} setActive={setActive} />
                    : <div className='menu'>
                        <button className="btn" onClick={() => setActive(true)}>
                            <span className="icon">
                                <svg viewBox="0 0 175 80" width="40" height="40">
                                    <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                                    <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                                    <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                                </svg>
                            </span>
                            <span className="text">MENU</span>
                        </button></div>
                }
            </div>
        </section>
    )
}

export default Header