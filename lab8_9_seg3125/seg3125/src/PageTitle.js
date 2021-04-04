// JavaScript source code
import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

class PageTitle extends Component {

    render() {
        const { changeLanguage } = this.props
        return (
            <div className="bg-dark w-100">
                <Row>
                    <Col sm="11">
                        <div >
                            <h1 className="text-center text-white" style={{height: '100px', paddingTop: '20px'}}>Trendy Apparel Trade</h1>
                        </div>
                    </Col>
                    
                    <Col sm="1">
                        <div>
                            <select onChange={(e) => changeLanguage(e.target.value)}>
                                <option value='en' id='languageEN'>English</option>
                                <option value='fr' id='languageFR'>Français</option>
                            </select>
                        </div>
                    </Col>
                </Row> 
            </div>
        )
    }
}

export default PageTitle;