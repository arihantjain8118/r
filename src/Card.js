import React , { Component } from 'react';

const Card = ({id,name,email})=> {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
            <img alt='photo' src={`https://robohash.org/${id}?200x200`} />
            {/* <img alt ='Photo'   src = 'data:image/jpeg;base64,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' /> */}
            <div>
                <h2>
                    Hey! {name}
                </h2>
            
            
                <p>{email}</p>
                </div>
        </div>
        
    );
}

export default Card;