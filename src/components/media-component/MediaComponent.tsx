import React from "react";
import { Pagination, PaginationItem, PaginationLink, Form, Input, FormGroup } from 'reactstrap';
import {MediaDisplayComponent} from "./media-display-component/MediaDisplayComponent";

interface IMediaState {
    searchTerm: string,
    page: number,
    type: any
}
interface IMediaProps {
    searchResults:any[],
    searchTerm:string,
    page:number,
    type: any,
    user: any,
    getNewPageMediaResults: (searchTerm: string, page: number, type: any) => void,
    changeMediaResultsPage: (searchTerm: string, page: number, type: any) => void,
    getAllMedia: () => void,
    getNextPageMediaResults: (searchTerm: string, page: number, type: any) => void
}
export class MediaComponent extends React.Component<IMediaProps, IMediaState> {
    constructor(props: any) {
        super(props)
        this.state = {
            searchTerm: "",
            page: 1,
            type:null
        }
    }
    componentDidMount() {
        console.log("In componentDidMount")
        console.log(this.props.searchResults.length)
        if (this.props.searchResults.length === 0) {
            this.props.getAllMedia()
        }
    }
    render() {
        const displayList:MediaDisplayComponent[]=this.props.searchResults.map<any>((list:any)=>{
            return <MediaDisplayComponent title={list.title}
                year={list.year}
                creator={list.creator}
                type={list.type}
                key={list.mediaId}
                targetaudience={list.targetAudience}
                userrating={list.userRating}
                user
                loggedIn
            />
        })
        return(
            <div className="main">
                <h1>Mens Rea</h1>
                <h2>Search our media database</h2>
                <div className="content">
                    {displayList}
                </div>
            </div>
        )
    }
}
