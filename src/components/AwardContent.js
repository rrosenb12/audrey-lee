import React from 'react'
import AwardCard from "./AwardCard"

export default function AwardContent(props){
    return(
        <div className="award-content-wrapper">
            {props.awards.map(award => <AwardCard award={award} />)}
        </div>
    )
}