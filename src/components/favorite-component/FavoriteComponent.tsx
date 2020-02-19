import React from "react";
import { FavoriteDisplayComponent } from "./favorite-display-component/FavoriteDisplayComponent";



interface IFavoriteState{
    id: number
}

interface IFavoriteProps{
    user: any
    favorites: any[]
    getAllFavoriteList: (id:number) => void //almost complete
    getAllFavoritesByType:(id:number, type:string) => void
    removeItemFromFavorite:() => void

}

export class FavoriteComponent extends React.Component<IFavoriteProps, IFavoriteState> {
    constructor(props:any){
        super(props)
        this.state = {
            id: 0 // this may need to change
        }
    }

    componentDidMount() {
        if(this.props.favorites.length === 0) {
            this.props.getAllFavoriteList(this.props.user.id)

        }
    }

    getByType = () => {
        //function that the button will call
        /// might need to add type to the state?
        this.props.getAllFavoritesByType(this.props.user, this.props.favorites)
    }
    
    deleteMedia = () => {
        this.props.removeItemFromFavorite(this.props.user, this.props.favorites)

    }
    
    render() {
        const displayFavs: FavoriteDisplayComponent[] = this.props.favorites.map<any>((list:any) => {
            return <FavoriteDisplayComponent title={list.title}
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
                    {displayFavs}
                </div>
            </div>
        )
    }
}