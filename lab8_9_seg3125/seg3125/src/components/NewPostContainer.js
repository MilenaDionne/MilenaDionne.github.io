import React, { Component } from 'react'
import NewPost from './NewPost'

class NewPostContainer extends Component {
    render() {
        const { language,filters, sizes, colors} = this.props

       

        return (
            <div className="container row">
                <NewPost language={language} filters={filters} sizes={sizes} colors={colors}></NewPost>
            </div>
        )
    }
}

export default NewPostContainer;