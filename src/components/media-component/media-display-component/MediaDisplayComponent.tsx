import React from "react";

interface IMediaDisplayProps {
    title: string,
    creator: string,
    year: number,
    targetaudience: string,
    userrating: number,
    media_type: string;
}
interface IMediaDisplayState {
    creatortype: string,
    shopsrc: string;
    imgsrc:string;
}
export class MediaDisplayComponent extends React.PureComponent<IMediaDisplayProps, IMediaDisplayState> {
    constructor(props: any) {
        super(props)
        this.state = {
            creatortype: "",
            shopsrc: "",
            imgsrc:""
        }
    }
    creatorSet = () => {
        if (this.props.media_type == "BOOK") {
            this.setState({
                creatortype: "Author",
                shopsrc: "Amazon",
                imgsrc:"https://cdnw.nickpic.host/s80vee.png"
            });
        }
        else if (this.props.media_type=="MOVIE"){
            this.setState({
                creatortype: "Director",
                shopsrc: "IMDB",
                imgsrc:"https://cdnw.nickpic.host/s80BrX.png"
            });
        }
        else {
            this.setState({
                creatortype: "Director",
                shopsrc: "IMDB",
                imgsrc:"https://cdnw.nickpic.host/s80bQb.png"
            });
        }
    }
    ratingRule=()=>{
        if (this.props.media_type!="BOOK") {
            return `<b>Rated:</b> {this.props.targetaudience}<br />`
        }
    }
    render() {
        return (
            <div className="content-sm">
                {this.creatorSet}
                <img src={this.state.imgsrc} className="imgdisp"/>
                <h4>{this.props.title}</h4>
                {this.props.userrating}<br />
                <b>Released:</b> {this.props.year}<br />
                {this.ratingRule}
                <b>{this.state.creatortype}:</b> {this.props.creator}<br />
                <br />
                <button className="mr-button">Add to Library</button> <button className="mr-button">Add to Watch List</button><br />
                <button className="mr-button">View on {this.state.shopsrc}</button>
            </div>
        )
    }
}