import React from 'react'
import bmw from '../Img/bmw.jpg'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Unforgiveness gives them control</h2>
                    </div>
                    <div className="hide">
                        <h2>Try Again <span>Fail Again</span> Fail Better <span>Beneficence</span></h2>
                    </div>
                    <div className="hide">
                        <h2>Facts..</h2>
                    </div>
                </div>

                <p>Contact the Don for that butterfly crab legs with a little shrimp, and living lash chasing that paper</p>
                <button>Hit me up</button>
                <img src={bmw} alt="bmw"/>
            </div>
        </div>
    )
}

export default AboutSection