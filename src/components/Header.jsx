import React from "react";

export default function Header() {
    return (
        <div className="header-content">
            <a href="#home" className="logo">SS360</a>
            <nav>
                <ul className="header-links">
                    <li className="header-item"><a href="#flights" className="header-link">Flights</a></li>
                    <li className="header-item"><a href="#about" className="header-link">About</a></li>
                    <li className="header-item"><a href="#contact" className="header-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}