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
                <h4>Mystery Feature:<br />
                    {this.props.title} by {this.props.author}</h4>
                <p><i>{this.props.review_snippet}</i><br />
                    <a href={this.props.review_link} target="_blank">{this.props.review_publication_name}, {this.props.review_date}</a></p>
           </div>
        )
    }
}

