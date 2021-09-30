import React from 'react';
import {
  Highlight,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";
import "./Hit.css";

const Hit = (props) => {
    return (
        <>
        
        <div className="hit-title-name">
            <Highlight attribute="title" hit={props.hit}/>
        </div>
        <div>
            <img className="poster-size" src={props.hit.poster} alt={props.hit.title}/>
        </div>
        <div className="hit-genre">
            <Highlight attribute="genres" hit={props.hit}/>
        </div>
        <div className="hit-overview">
            <Highlight attribute="overview" hit={props.hit}/>
        </div>
        </>
    )
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
}

export default Hit;
