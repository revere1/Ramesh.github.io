import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>Have 3+ years of Experience in Developing Web Applications and Implemented Restful Services using Express Framework. Have good knowledge in Node Js, React Js, ES6. Have good experience on using AWS Services (AWS Lambda, API Gateway,and other AWS Services).</p>
                                            <h2 className="colorlib-heading">PROFESSIONAL  EXPERIENCE</h2>
                                            <ul>
                                                <li>Currently Working as a Software Engineer in Neviton Softech Pvt Ltd., Bangalore. From 31-May-2019 to till date.</li>
                                                <li>My carrier started with Sun KPO IT & Engineering Services. I have worked here from 24-May-2017 to 30-May-2019 as Software Engineer.</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development </h3>
                                        <p>I have experience building websites and chrome extentions using JavaScript,React,Vuejs,HTML,CSS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                        <p>As coming from the CSE background, I have good grasp over fundamental concepts of DSA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Full-Stack Developer</h3>
                                        <p>Work with an established team of developers and interact with product managers
                                        Provides technical advice and assists in solving programming problems</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
