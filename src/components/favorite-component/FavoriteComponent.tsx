import React from "react";
import { FavoriteDisplayComponent } from "./favorite-display-component/FavoriteDisplayComponent";

interface IFavoriteProps {
    user: any
    favorites: any[]
    favoritesMessage: string
    getAllFavoriteList: (id: number) => void
}

export class FavoriteComponent extends React.Component<IFavoriteProps, any> {

    componentDidMount() {
        console.log("in did mount");
        if (this.props.favorites.length === 0) {
            this.props.getAllFavoriteList(this.props.user.id)
        }
    }


    render() {
        const displayFavs: FavoriteDisplayComponent[] = this.props.favorites.map<any>((list: any) => {
            return <FavoriteDisplayComponent title={list.title}
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
                <h2>Favorites</h2>
                <div className="content">
                    <h3>{this.props.favoritesMessage}</h3>
                    {displayFavs}
                </div>
            </div>
        )
    }
}