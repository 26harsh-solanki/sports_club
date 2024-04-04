import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div>
<nav>
    <div class="navbar1">
        <div class="brand1">D Sports Club</div>
        <div class="menu1">
            <div class="menu1-item1" button><a href="/">HOME</a></div>
            <div class="menu1-item1" button><a href="/About">ABOUT US</a></div>
            <div class="menu1-item1" button><a href="/Activity">ACTIVITIES</a></div>
            <div class="menu1-item1" button><a href="/Contact">CONTACT US</a></div>
            <div class="menu1-item1" button><a href="/Login">LOGIN</a></div>
        </div>
    </div>
</nav>
</div>
  )
}

export default Header;