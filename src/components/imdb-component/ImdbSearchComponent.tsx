import React from 'react';
import { render } from '@testing-library/react';
import { ImdbSearchDisplayComponent } from './imdb-search-displaly-component/ImdbSearchDisplayComponent';
import { Card, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface IImdbSearchState {
    imdbTitles: any[]
    search:string
    page:string
}

interface IImdbSearchProps {
    imdbTitles: any[]
    search:string
    page: number
    getNewPageImdbSearchTitles: (search: string, page: number) => void
    changeImdbSearchTitlesPage: (search: string, page: number) => void
    getMysteryTitles:() => void
}

export class ImdbSearchComponent extends React.Component<IImdbSearchProps,IImdbSearchState> {

    componentDidMount() {
        if (this.props.imdbTitles.length === 0) {
            this.props.getMysteryTitles()
        }
    }

    pageTurnForward = () => {
        this.props.changeImdbSearchTitlesPage(this.props.search, this.props.page + 1)
        this.props.getNewPageImdbSearchTitles(this.props.search, this.props.page + 1)
    }

    pageTurnBackwards = () => {
        if(this.props.page > 1) {
            this.props.changeImdbSearchTitlesPage(this.props.search, this.props.page - 1)
            this.props.getNewPageImdbSearchTitles(this.props.search, this.props.page - 1)
        }
    }

    render() {
        const displayList: ImdbSearchDisplayComponent[] = this.props.imdbTitles.map<any>((list:any) => {
            return <ImdbSearchDisplayComponent Title={list.Title}
            Year={list.Year}
            imdbID={list.imdbID}
            Type={list.Type}
            Poster={list.Poster}
            key={list.imdbID}
            />
        })

        return (
            <div className="content">
                
                    {displayList}
                
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={this.props.page === 1} onClick={this.pageTurnBackwards}>
                        <PaginationLink previous />
                    </PaginationItem>
                    <PaginationItem onClick={this.pageTurnForward}>
                        <PaginationLink next />
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}

