import React from "react";
import { IDreamBookDisplayComponent } from "./idream-book-display-component/IDreamBookDisplayComponent";
import { Link } from "react-router-dom";

interface ILandingState {
    position: number

}

export class LandingComponent extends React.Component<any, ILandingState> {
    constructor(props: any) {
        super(props)
        this.state = {
            position: 0,
            // feature: null
        }
    }
    getPos = () => {
        let pos = Math.floor(Math.random() * 25) + 1;
        pos -= 1;
        this.setState({
            ...this.state,
            position: pos
        })
    }

    componentDidMount() {
        if (this.props.iDreamBooks.length === 0) {
            this.props.getRecommendedTitles()
        }
        this.getPos();
    }

    checkUserFavs = () => {
        console.log(this.props.loggedIn);
        
        if(this.props.loggedIn) {
            this.props.history.push('/favorites')
        }
        else {
            this.props.history.push('login')
        }
    }

    checkUserWatch = () => {
        if(this.props.loggedIn) {
            this.props.history.push('/watchlist')
        }
        else {
            this.props.history.push('/login')
        }
    }

    render() {
        const displayBook: IDreamBookDisplayComponent[] = this.props.iDreamBooks.map((book: any) => {
            return <IDreamBookDisplayComponent title={book.title}
                author={book.author}
                review_snippet={book.review_snippet}
                review_link={book.review_link}
                review_publication_name={book.review_publication_name}
                review_date={book.review_date}
            />
        })
        return (
            <>
                <div className="main">
                    <h1>Mens Rea</h1>
                    <h2>your guide to mystery media</h2>
                    <div className="content">
                        <h4>Mens Rea: the guilty mind...</h4>
                        <p>Mens rea is the state of mind  that speaks to the intent to commit a crime.  Without mens rea, there is no crime.</p>
                        <p>The Mens Rea guide to mystery media is a place for lovers of mystery to explore and share their favourite works, be they show, movie, or book,
                            suggest new works for others to explore, build a library of the media they've already explored, offer recommendations, and create a watch list
                            for the cinema, novels, and television they want to watch.
                        </p>
                        <p>Interested?  Feel free to jump in now and explore our custom libraries, browse external libraries if you cannot find what you want within our existing
                            collection, and read reviews from our registered users, or, if you'd like to explore the full range of features we offer, scroll further for a closer
                            look at the features available exclusively to our registered users.
                        </p>
                        <Link to="/media" className="mr-button">Media Search</Link> <Link to="/imdbsearch" className="mr-button">IMDb Search</Link>
                        <br /><br />
                    </div>
                </div>
                <div className="paralax2"></div>
                <div className="main">
                    <div className="content">
                        {displayBook[this.state.position]}
                        <div className="content-sm">
                            <h4>Stay a little while...</h4>
                            <p>Members on Mens Rea are invited to share their thoughts on their favourite (or least favourite!) movies, shows, and books, can issue recommendations
                                 to other users, and have access to the ability to create robust watch lists to keep track of media they would like to see, as well as extensive
                                 libraries to showcase everything they already have.
                            </p>
                            <p>Already a member?  Login or visit your watch list or library here!</p>
                            <button onClick={this.checkUserWatch} className="mr-button">Watch List</button><button onClick={this.checkUserFavs} className="mr-button">Library</button><Link to="/login" className="mr-button">Login</Link>
                            <br/><br/><br/>
                            <p>Not a member yet?  Consider joining us to get access to all of our features!</p>
                            <Link to="/register" className="mr-button">Register</Link>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="paralax1"></div>
                <br /><br />
            </>
        )
    }
}