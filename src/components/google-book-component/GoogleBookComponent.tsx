import React from 'react';
import { GoogleBookDisplayComponent } from '../google-book-component/googl-book-display-component/GoogleBookDisplayComponent'
import { Form, FormGroup, Input, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface IGoogleBookState {
    search: any
    page: number
}

interface IGoogleBookProps {
    bookResults:any[]
    search:any
    page:number
    loadMysteryTitles: () => void
    getNextLoadPage: (search:any, page:number) => void
    newBookSearch: (search:any, page:number) => void
    // nextPageNewBookSearch: (search:any, page:number) => void
}

export class GoogleBookComponent extends React.Component<IGoogleBookProps, IGoogleBookState> {
    constructor(props:any) {
        super(props)
        this.state = {
            search: '',
            page: 0
        }
    }

    componentDidMount() {
        if (this.props.bookResults.length === 0) {
            this.props.loadMysteryTitles()
        }
    }

    pageTurnForward = () => {
        // this.props.nextPageNewBookSearch(this.props.search, this.props.page + 1)
        this.props.getNextLoadPage(this.props.search, this.props.page + 10) 
    }

    pageTurnBackwards = () => {
        if (this.props.page > 0) {
            // this.props.nextPageNewBookSearch(this.props.search, this.props.page - 1)
            this.props.getNextLoadPage(this.props.search, this.props.page - 10)
        }
    }
    
    newSearch = () => {
        let newPage = 0
        this.props.newBookSearch(this.state.search, newPage)
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
        const displayBooks: GoogleBookDisplayComponent[] = this.props.bookResults.map<any>((list: any) => {
            return <GoogleBookDisplayComponent title={list.volumeInfo.title}
            authors={list.volumeInfo.authors ? [list.volumeInfo.authors[0]] : ['No Author']}
            date={list.volumeInfo.publishedDate}
            description={list.volumeInfo.description}
            imageLink={list.volumeInfo.imageLinks ? list.volumeInfo.imageLinks.thumbnail : 'https://cdnw.nickpic.host/s80vee.png'}
            previewBook={list.volumeInfo.previewLink}
            key={list.id}
            />
        })

        return (
            <div className="main">
                <h1>Mens Rea</h1>
                <h2>Search content on Google Books</h2>
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
                            <Button onClick={this.newSearch} className="mr-button">Search</Button>
                        </Form>
                    </div>
                    {displayBooks}

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