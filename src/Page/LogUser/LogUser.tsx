import React from "react";
import "./Log.css";
import title from "../Start/title.png";

export const LogUser = () => {
    return(<>
            <div className="contents order-2 order-md-1 mt-5">

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <div className="mb-4 container-fluid">
                                <div className="position-relative d-flex align-items-center justify-content-center mb-lg-5">
                                    <img src={title} alt="title" />
                                </div>
                                <p className="mb-4">  </p>
                            </div>
                            <form action="#" method="post">

                                <div className="">
                                    <label htmlFor="username">Email</label>
                                    <input type="text" placeholder="write our email" className="input100 one" onChange={(e)=> {
                                    }} id="email"/>
                                </div>

                                <div className="">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" placeholder="write our password" className="input100 one" id="password"/>
                                </div>

                                <div>
                                    <button className="btn bg-primary one input100 mt-5 mb-4 text-light text-uppercase" id={"Social"}> Log In </button>
                                </div>

                                <div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">

                                            <a
                                               className=" bg-warning btn d-flex one input100 justify-content-center align-items-center">
                                                Google
                                            </a>

                                        </div>

                                        <div className="col-4">
                                            <a
                                               className=" text-light btn bg-blue d-flex one input100 justify-content-center align-items-center">
                                                Facebook
                                            </a>
                                        </div>

                                        <div className="col-4">
                                            <a
                                               className="bg-dark btn d-flex one input100 justify-content-center align-items-center text-light">
                                                Github
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}