import React from "react";
import {saveToLibrary} from "../../../remote/mens-rea-app/save-to-library"
import {saveToWatch} from "../../../remote/mens-rea-app/save-to-watch"
import SubmitReviewComponent from "../../submit-review-component/SubmitReviewComponent";
import ReviewComponent from "../../reviews-component/ReviewComponent";
import { getReviews } from "../../../remote/mens-rea-app/mens-rea-get-reviews";


interface IMediaDisplayProps {
    title: string,
    creator: string,
    year: number,
    targetaudience: string,
    userrating: number,
    type: string,
    mediaId: number,
    user: any,
    loggedIn: boolean
}
interface IMediaDisplayState {
    creatortype: string,
    imgsrc: string,
    modal: boolean,
    review: string,
    recommended: boolean

}
export class MediaDisplayComponent extends React.PureComponent<any, IMediaDisplayState> {
    constructor(props: any) {
        super(props)
        this.state = {
            creatortype: "",
            imgsrc: "",
            modal: false,
            review: '',
            recommended: false

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
    librarySave = async () => {
        
        console.log("in librarySave")
        if (!this.props.user) {
            let a=document.getElementById("failed");
            if (a) {a.style.display="block";}
            
        }
        else {
            let uID=this.props.user.id;
            let mID=this.props.mediaId;
            let resp=await saveToLibrary(uID, mID)
            if (resp.status===200) {
                let a=document.getElementById("successful");
                if (a) {a.style.display="block";}
            }
        }
    }
    watchSave = async () => {
        
        console.log("in watchSave")
        if (!this.props.user) {
            let a=document.getElementById("failed");
            if (a) {a.style.display="block";}
            
        }
        else {
            let uID=this.props.user.id;
            let mID=this.props.mediaId;
            console.log(uID);
            console.log(mID);
            let resp=await saveToWatch(uID, mID)
            if (resp.status===200) {
                let a=document.getElementById("successful");
                if (a) {a.style.display="block";}
            }
        }
    }
    hideAlert=()=>{
        let a=document.getElementById("failed");
        if (a) {a.style.display="none";}
    }
    hideAlertS=()=>{
        let a=document.getElementById("successful");
        if (a) {a.style.display="none";}
    } 

    getReviewList = async () => {
        let reviews = await getReviews(this.props.mediaId)
        return reviews
    }

    render() {
        return (
            <>
            <div className="alert-f" id="failed">
                You must be logged in to use this feature!
                <span className="close-f" onClick={this.hideAlert}>x</span>
                </div>
                <div className="alert-s" id="successful">
                Saved!
                <span className="close-s" onClick={this.hideAlertS}>x</span>
                </div>
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
                    {/* <ReviewComponent mediaId={this.props.mediaId} bookTitle={this.props.title} /> */}
                    <SubmitReviewComponent bookTitle={this.props.title} userId={this.props.user ? this.props.user.id : ''} mediaId={this.props.mediaId}/>
                    <button className="mr-button" onClick={this.librarySave}>Add to Library</button> <button className="mr-button" onClick={this.watchSave}>Add to Watch List</button>
                </div>
            </>
        )
    } 
}