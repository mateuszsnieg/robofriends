import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className="bg-gray dib br3 pd3 ma2 grow bw2 shodow-5">
            <img alt="robot"src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p> {email}</p>
            </div>
        </div>
    );
}

export default Card;