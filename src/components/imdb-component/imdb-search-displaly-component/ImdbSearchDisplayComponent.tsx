import React from 'react'
import { CardBody, Card, CardImg, CardTitle, CardText } from 'reactstrap';

interface IImdbDisplayProps {
    Title: string
    Year: string
    imdbID:string
    Type: string
    Poster: string
}

export class ImdbSearchDisplayComponent extends React.PureComponent<IImdbDisplayProps>{

    
    render() {
        return (
            <div className="content-sm">
                <img src={this.props.Poster} className="imgdisp"/>
                <h4>{this.props.Title}</h4>
                <p><b>Released:</b> {this.props.Year}<br />
                
                <br />
                <button className="mr-button">Add to Library</button> <button className="mr-button">Add to Watch List</button><br />
                <a href={`http://imdb.com/title/${this.props.imdbID}`} target="_blank" className="mr-button">View on IMDb</a></p>
                
            </div>
        )
    }
}