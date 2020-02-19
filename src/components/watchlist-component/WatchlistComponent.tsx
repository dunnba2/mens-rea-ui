import React from "react"
import { WatchlistDisplayComponent } from "./watchlist-display-component/WatchlistDisplatComponent"


interface IWatchlistState{
    id:number
}

interface IWatchlistProps{
    user:any
    watchlists: any[]
    getAllWatchlist:(id:number) => void
}
export class WatchlistComponent extends React.Component<IWatchlistProps, IWatchlistState>{
    constructor(props:any){
        super(props)
        this.state = {
            id: 0 // this may need to change
        }
    }

    componentDidMount() {
        if(this.props.watchlists.length === 0) {
            this.props.getAllWatchlist(this.props.user.id)
        }
    }
    render() {
        const displayWatch: WatchlistDisplayComponent[] = this.props.watchlists.map<any>((list:any) => {
            return <WatchlistDisplayComponent title={list.title}
            year={list.year}
            creator={list.creator}
            type={list.type}
            key={list.mediaId}
            targetAudience={list.targetAudience}
            userRating={list.userRating} 
            />
        })

        return(
            <div className="main">
                <h1>Mens Rea</h1>
                <h2>Favorites</h2>
                <div className="content">
                    {displayWatch}
                </div>
            </div>
        )
    }
}