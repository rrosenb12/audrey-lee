import React from 'react'

export default class AwardCard extends React.Component{
    render(){
        return(
            <div className="award-card">
                {console.log(this.props.award)}
            </div>
        )
    }
}