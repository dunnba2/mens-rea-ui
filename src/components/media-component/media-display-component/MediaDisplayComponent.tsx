import React from "react";
import { UncontrolledAlert } from 'reactstrap';
import {saveToLibrary} from "../../../remote/mens-rea-app/save-to-library"
import {saveToWatch} from "../../../remote/mens-rea-app/save-to-watch"

interface IMediaDisplayProps {
    title: string,
    creator: string,
    year: number,
    targetaudience: string,
    userrating: number,
    type: string,
    mediaId: number,
    user: any
}
interface IMediaDisplayState {
    creatortype: string,
    imgsrc: string,
}
export class MediaDisplayComponent extends React.PureComponent<IMediaDisplayProps, IMediaDisplayState> {
    constructor(props: any) {
        super(props)
        this.state = {
            creatortype: "",
            imgsrc: ""
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
    librarySave = () => {
        console.log("in librarySave")
        if (!this.props.user) {
            this.activateAlert();
        }
        else {
            let uID=this.props.user.id;
            let mID=this.props.mediaId;
            console.log(uID);
            console.log(mID);
            saveToLibrary(uID, mID)
        }
    }
    watchSave = () => {
        console.log("in watchSave")
        if (!this.props.user) {
            this.activateAlert();
        }
        else {
            let uID=this.props.user.id;
            let mID=this.props.mediaId;
            console.log(uID);
            console.log(mID);
            saveToWatch(uID, mID)
        }
    }
    activateAlert=()=> {
        return (
          <UncontrolledAlert color="danger">
            You must be logged in to use this feature!
          </UncontrolledAlert>
        );
    }
    render() {
        return (
            <>
                {console.log(this.props)}
                <div className="content-sm">
                    <img src={this.state.imgsrc} className="imgdisp" alt="" />
                    <h4>{this.props.title}</h4>
                    <p>&nbsp;<br />
                        <b>User Rating:</b> {this.props.userrating}<br />
                        <b>Released:</b> {this.props.year}<br />
                        {this.props.type === "BOOK" ? "" : <b>Rating:</b>}
                        {this.props.type === "BOOK" ? "" : `${this.props.targetaudience}`}
                        {this.props.type === "BOOK" ? "" : <br />}
                        <b>{this.state.creatortype}:</b> {this.props.creator}</p>
                    <br />
                    <button className="mr-button" onClick={this.librarySave}>Add to Library</button> <button className="mr-button" onClick={this.watchSave}>Add to Watch List</button>
                </div>
            </>
        )
    }
}