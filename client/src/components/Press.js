import React from "react";

const Press = () => {
    const imagesArray = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20"];

    return (
        <div className="press__container">
            <div className="press__header">Justcamp in the press</div>
            <div className="press__icon-container">
                {imagesArray.map(image => {
                    return (
                        <img key={image} src={require(`../assets/press_logos/${image}.png`)} alt={image} className="press__icon" />
                    );
                })}
            </div>
        </div>
    );
};

export default Press;
