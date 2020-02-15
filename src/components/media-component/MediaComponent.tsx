import React from "react";
import { Pagination, PaginationItem, PaginationLink, Form, Input, FormGroup, Button } from 'reactstrap';
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
    render() {
        return(
            <div className="main">
                <h1>Mens Rea</h1>
                <h2>Search our media database</h2>
                <div className="content">
                    <div className="content-sm"><h4>THIS PAGE ISN'T DONE YET!  YAY!</h4>
                    <p>Everything is broken forever.</p></div>
                </div>
            </div>
        )
    }
}