import React from "react";

interface ILandingProps {
    user: any,
    iDreamBooks: any[],
    getRecommendedTitles: () => void
}

interface ILandingState {
    position: number,
    feature: any
}

export class LandingComponent extends React.Component<ILandingProps, ILandingState> {
    constructor(props: any) {
        super(props)
        this.state = {
            position: 0,
            feature: null
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
    setFeature = () => {
        this.setState({
            ...this.state,
            feature: this.props.iDreamBooks[this.state.position]
        })
    }
    componentWillMount() {
        console.log("For some reason, this still has to be will mount...")
        this.props.getRecommendedTitles();
        console.log(this.props.iDreamBooks)
        this.getPos();
        console.log(this.state.position)
        this.setFeature();
        console.log(this.state.feature)
    }
    render() {
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
                        <button className="mr-button">Media Search</button> <button className="mr-button">IMDb Search</button>
                        <br /><br />
                    </div>
                </div>
                <div className="paralax2"></div>
                <div className="main">
                    <div className="content">
                        <div className="content-sm">
                            <h4>Mystery Feature:<br />
                                {this.state.feature.title} by {this.state.feature.author}</h4>
                            <p><i>{this.state.feature.review_snippet}</i><br />
                                <a href={this.state.feature.review_link} target="_blank">{this.state.feature.review_publication_name}, {this.state.feature.review_date}</a></p>
                        </div>
                        <div className="content-sm">
                            <h4>Stay a little while...</h4>
                            <p>This is where we sell the site!</p>
                        </div>
                    </div>
                </div>
                <div className="paralax1"></div>
                <br /><br />
            </>
        )
    }
}