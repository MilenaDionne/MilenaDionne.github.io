// JavaScript source code
import React, { Component } from 'react';

class PageTitle extends Component {

    render() {
        const { changeLanguage } = this.props
        return (
            <div className="jumbotron text-center bg-dark text-white w-100">
                <h1>Trendy Apparel Trade</h1>
                <select onChange={(e) => changeLanguage(e.target.value)}>
                    <option value='en' id='languageEN'>English</option>
                    <option value='fr' id='languageFR'>Français</option>
                </select>
            </div>
        )
    }
}

export default PageTitle;