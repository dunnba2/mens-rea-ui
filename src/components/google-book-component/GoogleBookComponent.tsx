import React from 'react';
import { GoogleBookDisplayComponent } from '../google-book-component/googl-book-display-component/GoogleBookDisplayComponent'

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
    nextPageNewBookSearch: (search:any, page:number) => void
}

export class GoogleBookComponent extends React.Component<IGoogleBookProps, IGoogleBookState> {
    constructor(props:any) {
        super(props)
        this.state = {
            search: '',
            page: 1
        }
    }

    componentDidMount() {
        if (this.props.bookResults.length === 0) {
            this.props.loadMysteryTitles()
        }
    }

    pageTurnForward = () => {
        this.props.getNextLoadPage(this.props.search, this.props.page + 1)
        this.props.nextPageNewBookSearch(this.props.search, this.props.page + 1)
    }

    pageTurnBackwards = () => {
        if (this.props.page > 1) {
            this.props.getNextLoadPage(this.props.search, this.props.page - 1)
            this.props.nextPageNewBookSearch(this.props.search, this.props.page - 1)
        }
    }
    
    newSearch = () => {
        let newPage = 1
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
        return null
    }
}