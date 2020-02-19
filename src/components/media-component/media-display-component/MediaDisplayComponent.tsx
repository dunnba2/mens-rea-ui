import React from "react";

interface IMediaDisplayProps {
    title: string,
    creator: string,
    year: number,
    targetaudience: string,
    userrating: number,
    type: string,
}
interface IMediaDisplayState {
    creatortype: string,
    imgsrc:string;
    rating:string;
}
export class MediaDisplayComponent extends React.PureComponent<IMediaDisplayProps, IMediaDisplayState> {
    constructor(props: any) {
        super(props)
        this.state = {
            creatortype: "",
            imgsrc:"",
            rating:""
        }
    }
    componentDidMount() {
        console.log("In creatorSet")
        console.log(this.props.type)
        console.log(this.props.targetaudience)
        if (this.props.type === "BOOK") {
            this.setState({
                ...this.state,
                creatortype: "Author",
                imgsrc:"https://cdnw.nickpic.host/s80vee.png"
            });
        }
        else if (this.props.type==="MOVIE"){
            this.setState({
                ...this.state,
                creatortype: "Director",
                imgsrc:"https://cdnw.nickpic.host/s80BrX.png"
            });
        }
        else {
            this.setState({
                ...this.state,
                creatortype: "Director",
                imgsrc:"https://cdnw.nickpic.host/s80bQb.png"
            });
        }
        this.ratingRule();
    }
    ratingRule() {
        if (this.props.type!=="BOOK") {
            this.setState({
                ...this.state,
                rating: `<b>Rated:</b> ${this.props.targetaudience}<br/>`
            })
        }
    }
    render() {
        return (
            <div className="content-sm">
                <img src={this.state.imgsrc} className="imgdisp" alt=""/>
                <h4>{this.props.title}</h4>
                <p>&nbsp;<br/>
                <b>User Rating:</b> {this.props.userrating}<br/>
                <b>Released:</b> {this.props.year}<br/>
                {this.ratingRule}
                <b>{this.state.creatortype}:</b> {this.props.creator}</p>
                <br />
        <button className="mr-button">Add to Library</button> <button className="mr-button">Add to Watch List</button>
            </div>
        )
    }
}
