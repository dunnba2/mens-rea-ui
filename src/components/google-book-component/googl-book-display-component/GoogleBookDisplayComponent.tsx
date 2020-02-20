import React from 'react'

interface IGoogleBookDisplayProps {
    title: string
    authors: string[]
    date: string
    description: string
    imageLink: string
    previewBook: string
}

export class GoogleBookDisplayComponent extends React.PureComponent<IGoogleBookDisplayProps> {


    render() {
        return (
            <div className="content-sm">
                <img src={this.props.imageLink} className="imgdisp" alt="" />
                <h4>{this.props.title}</h4>
                <h5>Author(s): {this.props.authors[0]}</h5>
                <p><b>Published:</b> {this.props.date}<br />
                    Description: {this.props.description}
                    <br />
                    {/* <button className="mr-button">Add to Library</button> <button className="mr-button">Add to Watch List</button><br /> */}
                    <a href={this.props.previewBook} target="_blank" rel="noopener noreferrer" className="mr-button">Preview on GoogleBooks</a></p>

            </div>
        )
    }
}