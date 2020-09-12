import React from 'react'
import audrey1 from './audrey1.jpg'

export default function Home(){
    return(
        <div className="homewrapper">
            <p className="bioleft">
                <strong>
                Audrey Lee is a twenty-one year old writer and student from Philadelphia, Pennsylvania who attends Franklin & Marshall College in Lancaster, Pennsylvania where she is earning her B.A. in creative writing and American studies. She has attended the University of Virginia Young Writers Workshop, Ithaca College Writers Institute, and University of Iowa Young Writers Studio. A 2020, Best of the Net nominee by Drunk Monkeys, ​Audrey has interned at Apiary Magazine and is a former resident at Sundress Academy for the Arts. Her first collection of poetry, <i>Probably, Angels</i>, is available through Maverick Duck Press.
                </strong>
            </p>
            <div className="imgwrapper">
                <h5>poet, essayist, fiction writer, and literary creative</h5>
                <img className="audreyhome" src={audrey1} alt="audrey lee"/>
            </div>
            <p className="bioright">
                <strong>
                She is the winner of the 2016 DeSales University Poetry Contest, the 2020 Jerome Irving Bank Prize, and her writing has been recognized by the Scholastic Art and Writing Awards and Columbia College of Chicago. Her work has been featured in or is forthcoming from The Sierra Nevada Review, Rookie Magazine, DIALOGIST, The Indiana Review, and Teen Vogue. She is in the top 1% of Sonic Youth listeners on Spotify.  Her work has been featured in The Sierra Nevada Review, DIALOGIST, The Indiana Review, Glass: A Journal of Poetry, and Teen Vogue. She is a Best of the Net nominee. 
                </strong>
            </p>
        </div>
    )
}