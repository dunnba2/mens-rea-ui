import React from 'react';
import { ImdbSearchDisplayComponent } from './imdb-search-displaly-component/ImdbSearchDisplayComponent';
import { Pagination, PaginationItem, PaginationLink, Form, Input, FormGroup, Button } from 'reactstrap';

interface IImdbSearchState {
    search: any
    page: number
}

interface IImdbSearchProps {
    imdbTitles: any[]
    search: any
    page: number
    getNewPageImdbSearchTitles: (search: any, page: number) => void
    changeImdbSearchTitlesPage: (search: any, page: number) => void
    getMysteryTitles: () => void
    getNextPageImdbSearch: (search: any, page: number) => void
}

export class ImdbSearchComponent extends React.Component<IImdbSearchProps, IImdbSearchState> {

    constructor(props: any) {
        super(props)
        this.state = {
            search: '',
            page: 1
        }
    }

    componentDidMount() {
        if (this.props.imdbTitles.length === 0) {
            this.props.getMysteryTitles()
        }
    }

    pageTurnForward = () => {
        this.props.changeImdbSearchTitlesPage(this.props.search, this.props.page + 1)
        this.props.getNextPageImdbSearch(this.props.search, this.props.page + 1)
    }

    pageTurnBackwards = () => {
        if (this.props.page > 1) {
            this.props.changeImdbSearchTitlesPage(this.props.search, this.props.page - 1)
            this.props.getNextPageImdbSearch(this.props.search, this.props.page - 1)
        }
    }

    newSearchPage = () => {
        let newPage = 1
        this.props.getNewPageImdbSearchTitles(this.state.search, newPage)
        this.setState({
            ...this.state,
            page: newPage
        })
    }

    updateSearch = (event: any) => {
        this.setState({
            ...this.state,
            search: event.target.value
        })
    }

    render() {
        const displayList: ImdbSearchDisplayComponent[] = this.props.imdbTitles.map<any>((list: any) => {
            return <ImdbSearchDisplayComponent Title={list.Title}
                Year={list.Year}
                imdbID={list.imdbID}
                Type={list.Type}
                Poster={list.Poster}
                key={list.imdbID}
            />
        })

        return (
            <div className="main">
                <h1>Mens Rea</h1>
                <h2>Search content on IMDb</h2>
                <div className="content">
                    <div>
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input type="text"
                                    id="imdbSearch"
                                    placeholder="Search Titles"
                                    value={this.state.search}
                                    onChange={this.updateSearch} />
                            </FormGroup>
                            <Button onClick={this.newSearchPage} className="mr-button">Search</Button>
                        </Form>
                    </div>
                    {displayList}

                    <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled={this.props.page === 1} onClick={this.pageTurnBackwards}>
                            <PaginationLink previous className="mr-button"/>
                        </PaginationItem>
                        <PaginationItem onClick={this.pageTurnForward}>
                            <PaginationLink next className="mr-button"/>
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        )
    }
}

