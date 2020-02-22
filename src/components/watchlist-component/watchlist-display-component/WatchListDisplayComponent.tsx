import React from 'react'

interface IWatchListDisplayProps {
    title: string
    creator: string
    year: string
    targetAudience: string
    userRating: number
    type: string
}

interface IWatchListDisplayState {
    creatortype: string
    shopsrc: string 
    imgsrc: string
}

export class WatchListDisplayComponent extends React.PureComponent<IWatchListDisplayProps, IWatchListDisplayState> {

    constructor(props: any) {
        super(props) 
        this.state = {
            creatortype: '',
            shopsrc: '',
            imgsrc:''
        }
        
    }

    componentDidMount() {
        if (this.props.type === "BOOK") {
            this.setState({
                ...this.state,
                creatortype: "Author",
                imgsrc: "https://cdnw.nickpic.host/s80vee.png"
            });
        }
        if (this.props.type === "MOVIE") {
            this.setState({
                ...this.state,
                creatortype: "Director",
                imgsrc: "https://cdnw.nickpic.host/s80BrX.png"
            });
        }
        if (this.props.type === "SHOW") {
            this.setState({
                ...this.state,
                creatortype: "Director",
                imgsrc: "https://cdnw.nickpic.host/s80bQb.png"
            });
        }
    }

    render() {
        return (
            <div className="content-sm">
                    <img src={this.state.imgsrc} className="imgdisp" alt="" />
                    <h4>{this.props.title}</h4>
                    <p>&nbsp;<br />
                        <b>User Rating:</b> {this.props.userRating}<br />
                        <b>Released:</b> {this.props.year}<br />
                        {this.props.type === "BOOK" ? "" : <b>Rating:</b>}
                        {this.props.type === "BOOK" ? "" : `${this.props.targetAudience}`}
                        {this.props.type === "BOOK" ? "" : <br />}
                        <b>{this.state.creatortype}:</b> {this.props.creator}</p>
                    <br />  
                </div>
        )
    }
}