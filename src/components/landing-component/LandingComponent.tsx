import React from "react";

export class LandingComponent extends React.Component {
    render() {
        return(
            <>
            <div className="main">
            <h1>Mens Rea</h1>
            <h2>your guide to mystery media</h2>
            <div className="content">
                <h4>About Mens Rea</h4>
                <p>Purpose, goal, and sales-pitchy nonsense, plus maybe news or something.</p>
                <p>Links to features and some junk.</p>
            </div>
            </div>
            <div className="paralax2"></div>
            <div className="main">
            <div className="content">
                <div className="content-sm"><p>Feature item, woo-hoo!</p></div>
                <div className="content-sm"><p>What can only registered users do?  Sell it!</p></div>
            </div>
            </div>
            <div className="paralax1"></div>
            <br/><br/>
            </>
        )
    }
}