import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import '../component/cssComponent/Header.css'

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container">
                    <a className="navbar-brand mb-0 h1" href="#">Sk Nazim</a>
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </div>
                    </div>
                    <div className="d-flex social-icons">
                    <a className="p-2 m-1 text-secondary" href="https://google.com"><Icon.Facebook /></a>
                    <a className="p-2 m-1 text-secondary" href="https://google.com"><Icon.Instagram /></a>
                    <a className="p-2 m-1 text-secondary" href="https://google.com"><Icon.Twitter /></a>
                    <a className="p-2 m-1 text-secondary" href="https://google.com"><Icon.Github /></a>
                    <a className="p-2 m-1 text-secondary" href="https://google.com"><Icon.Envelope /></a>
                    </div>

                </div>
            </nav>
        </>
    )
}


export default Header
