import React from 'react'
import './home.css'
import AVS from '../assets/avs2.jpg'
import Ivertech from '../assets/ivertech.jpg'

function Home() {
    return (
        <div className="home">
            <main className="container">
                <h1 className="title">MMS GROUPE</h1>
                <div className="all-logo">
                    <div className="logo-avs">
                        <h1 className="title-avs">AVS MAYOTTE</h1>
                        <a href="https://erp.avsmayotte.com/">
                            <img className="avs" src={AVS} alt="" />
                        </a>    
                    </div>
                    <div className="logo-ivertech">
                        <h1 className="title-ivertech">IVERTECH MAYOTTE</h1>
                        <a href="https://erp.ivertech.fr/">
                            <img className="ivertech" src={Ivertech} alt="" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
