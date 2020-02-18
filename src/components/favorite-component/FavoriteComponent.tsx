import React from "react";
// import mediaDisplay


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
    
    
    render() {
        const displayFavs: displayComponentHere // fix here

        return(
            <div className="favorite">
                {
                    //this is where media display calls will go.
                }
            </div>
        )
    }
}