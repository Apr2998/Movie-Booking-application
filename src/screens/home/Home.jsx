import React from "react";
import "./Home.css";
import Header from "../../common/header/Header";
import GridListBanner from "../../common/GridListBanner";
import Movielistdisplay from "../../common/Movielistdisplay";
import MovieFilter from "../../common/MovieFilter";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="a">
                    <span>Upcoming Movies</span>
                </div>
                <GridListBanner />
                <div className="flex-container">
                    <div className="left">
                        <Movielistdisplay />
                    </div>
                    <div className="right">
                    <MovieFilter />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;