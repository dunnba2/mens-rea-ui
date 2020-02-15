import React from "react";
// import mediaDisplay


interface IFavoriteState{ //
    limit:number
    offset:number
}

interface IFavoriteProps{
    user:any
    allFavorite:any[]
    getAllFavorite:(l:number, o:number) => void
}

export class FavoriteComponent extends React.Component {
    constructor(props:any){
        super(props)
        this.state = {
            //use media display to render page??
        }
    }
    
    
    render() {
        return(
            <div className="favorite">
                {
                    //this is where media display calls will go.
                }
            </div>
        )
    }
}