import React from 'react';


interface IImdbSearchProps {
    imdbTitles: any[]
    page: number
    getNewPageImdbSearchTitles: (search: string, page: number) => void
    changeImdbSearchTitlesPage: (page: number) => void
}

export class ImdbSearchComponent extends React.Component<IImdbSearchProps> {

    componentDidMount() {
        if (this.props.imdbTitles.length === 0) {
            this.props.getNewPageImdbSearchTitles(this.props.page)
        }
    }

    pageTurnForward = () => {
        this.props.changeImdbSearchTitlesPage(this.props.page + 1)
        this.props.getNewPageImdbSearchTitles(this.props.page + 1)
    }

    pageTurnBackwards = () => {
        if(this.props.page > 1) {
            this.props.changeImdbSearchTitlesPage(this.props.page - 1)
            this.props.getNewPageImdbSearchTitles(this.props.page - 1)
        }
    }
}