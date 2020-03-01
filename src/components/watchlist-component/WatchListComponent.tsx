import React from 'react'
import { WatchListDisplayComponent } from './watchlist-display-component/WatchListDisplayComponent'

interface IWatchListProps {
    user: any
    watchList: any[]
    watchListMessage: string
    getAllWatchList: (id: number) => void
}

export class WatchListComponent extends React.Component<IWatchListProps, any> {

    componentDidMount() {
        this.props.getAllWatchList(this.props.user.id) 
    }

    render() {
        const displayWatchList: WatchListDisplayComponent[] = this.props.watchList.map<any>((list:any) => {
            return <WatchListDisplayComponent title={list.title}
                    year={list.year}
                    creator={list.creator}
                    type={list.type}
                    key={list.mediaId}
                    targetAudience={list.targetAudience}
                    userRating={list.userRating}
                />
        })
    
        return (
            <div className="main">
                <h1>Mens Rea</h1>
                <h2>Watch List</h2>
                <div className="content">
                    <h3>{this.props.watchListMessage}</h3>
                    {displayWatchList}
                </div>
            </div>
        )
    }

}