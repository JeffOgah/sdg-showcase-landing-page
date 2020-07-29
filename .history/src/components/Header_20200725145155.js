import React from 'react';
import sdg from '../images/sdg.png';
import {Link}

export default function Header() {
    return (
        <nav class="header-nav container ">
            <img class="navbar-brand sdg-logo" src={sdg}/>

            <ul class="header-list">
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Judges</a>
                </li>
            </ul>
        </nav>
    )
}
