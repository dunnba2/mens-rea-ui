import React from 'react'

interface IDreamBookDisplayProps {
    title: string
    author: string
    review_snippet: string
    review_link: string
    review_publication_name: string
    review_date: string
}

export class IDreamBookDisplayComponent extends React.PureComponent<IDreamBookDisplayProps> {

    render() {
        return (
            <div className="content-sm">
                <img src="https://cdnw.nickpic.host/s80vee.png" className="imgdisp" alt=""/>
                <h4>Mystery Feature:<br />
                    {this.props.title}<br/>by {this.props.author}</h4>
                <p><i>{this.props.review_snippet}</i><br /><br/>
                    <a href={this.props.review_link} target="_blank" rel="noopener noreferrer">{this.props.review_publication_name}, {this.props.review_date}</a></p>
           </div>
        )
    }
}


