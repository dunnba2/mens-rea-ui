import React from "react";
import { Pagination, PaginationItem, PaginationLink, Form, Input, FormGroup } from 'reactstrap';
import { MediaDisplayComponent } from "./media-display-component/MediaDisplayComponent";

interface IMediaState {
    searchTerm: string,
    page: number,
    type: any,
}
interface IMediaProps {
    searchResults: any[],
    searchTerm: string,
    page: number,
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
            type: null
        }
    }
    componentDidMount() {
        console.log("In componentDidMount")
        console.log(this.props.searchResults.length)
        if (this.props.searchResults.length === 0) {
            console.log("Loading full media set.")
            this.props.getAllMedia()
        }
    }
    newSearchPage = (event: any) => {
        event.preventDefault();
        let currentPage = 1;
        console.log(this.state.searchTerm, this.state.type)
        this.props.getNewPageMediaResults(this.state.searchTerm, currentPage, this.state.type)
        this.setState({
            ...this.state,
            page: currentPage
        })
    }
    updateSearch = (event: any) => {
        this.setState({
            ...this.state,
            searchTerm: event.target.value
        })
    }
    captureType = (event: any) => {
        this.setState({
            ...this.state,
            type: event.target.value
        })
    }
    render() {
        const displayList: MediaDisplayComponent[] = this.props.searchResults.map<any>((list: any) => {
            return <MediaDisplayComponent title={list.title}
                year={list.year}
                creator={list.creator}
                type={list.type}
                key={list.mediaId}
                targetaudience={list.targetAudience}
                userrating={list.userRating}
                mediaId={list.mediaId}
                user={this.props.user}
            />
        })
        const mediatypes = [
            { label: "book", value: "BOOK" },
            { label: "movie", value: "MOVIE" },
            { label: "show", value: "SHOW" }
        ]
        return (
            <div className="main">
                <h1>Mens Rea</h1>
                <h2>Search our media database</h2>
                <div className="content">
                    <div>
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                {/* <Input type="text"
                                    id="mediaSearch"
                                    placeholder="Search Titles"
                                    value={this.state.searchTerm}
                                    onChange={this.updateSearch} /> */}
                                <Input type="select" name="select" id="mediatype" value={this.state.type} onChange={this.captureType}>
                                    <option >Choose an Option</option>
                                    <option value="BOOK">Book</option>
                                    <option value='MOVIE'>Movie</option>
                                    <option value='SHOW'>TV Show</option>
                                </Input>
                                <button onClick={this.newSearchPage} className="mr-button">Search</button>
                            </FormGroup>
                        </Form>
                        {displayList}
                    </div>
                </div>
            </div>
        )
    }
}
