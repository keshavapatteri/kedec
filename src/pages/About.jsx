import React from 'react';
import { Link } from 'react-router-dom';
import './dev.css';
import './About.css';
function About() {
  return (
    <div className='d-flex flex-column  vh-80'>
      <h1>
        About Page
        {/* Ecommerce or "electronic commerce */}


      </h1>
      <h2 style={{ marginLeft: '350px' }}>Ecommerce or "electronic commerce"</h2>
      <p style={{ marginLeft: '380px' }}> is the trading of goods and services online.<br />
        The internet allows individuals and businesses to buy and sell <br />an increasing amount of physical goods, digital goods, and services electronically</p>

      {/* ---------------------- */}
      {/* BUTTON */}
      <div>
        <button className="custom-button"
        >
          <a
            href="https://portfolioo-seven-sigma.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            My Portfolio Click here
          </a>
        </button>
      </div>
      {/* ---------------------- */}

      {/* ECOM 1ST IMAGE, DATA */}
      <div style={{ display: 'flex', marginLeft: '150px', paddingBottom: '50px' }}>
        <img
          src="https://www.investopedia.com/thmb/HTsQttB_aZtIFO2aNUau7T82UXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ecommerce-d7e19a12ebed400eb1b2344b2cbb0e7d.png"
          alt="Ecommerce Example"
          style={{ width: '500px', height: '300px', imageAlign: 'center' }}

        />
        <div>
          <h2 style={{ paddingLeft: '200px', paddingBottom: '20px' }}>What Is Electronic Commerce (E-commerce)?</h2>
          <p style={{ width: '60%', marginLeft: '200px ', textAlign: 'left' }}>Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones, and other smart devices. Nearly every imaginable product and service is available through e-commerce transactions, including books, music, plane tickets, and financial services such as stock investing and online banking. As such, it is considered a very disruptive technology.     </p>
        </div>
      </div>

      {/* ---------------------------------- */}

      {/* ECOM 2ST IMAGE, DATA */}
      <div style={{ display: 'flex', marginLeft: '150px', paddingBottom: '50px' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLXyNJeRpCvFzdJmfe-Y9w_mCqTBw4O1j-w&s"
          alt="Ecommerce Example"
          style={{ width: '480px', height: '280px', imageAlign: 'center' }}

        />
        <div>
          <h2 style={{ paddingLeft: '200px', paddingBottom: '20px' }}>Understanding E-commerce</h2>
          <p style={{ width: '60%', marginLeft: '200px ', textAlign: 'left' }}>As noted above, e-commerce is the process of buying and selling tangible products and services online. It involves more than one party along with the exchange of data or currency to process a transaction. It is part of the greater industry that is known as electronic business (e-business), which involves all of the processes required to run a company online.     </p>
        </div>



      </div>

      {/* ----------------------------------- */}

{/* ECOM 3ST IMAGE, DATA */}
<div style={{ display: 'flex', marginLeft: '150px', paddingBottom: '50px' }}>
        <img
          src="   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xeWLTcqcwn3bfhHMr-dJ3hhdzS7acyUG5A&s"
          alt="Ecommerce Example"
          style={{ width: '480px', height: '280px', imageAlign: 'center' }}

        />
        <div>
          <h2 style={{ paddingLeft: '200px', paddingBottom: '20px' }}>History of E-commerce</h2>
          <p style={{ width: '60%', marginLeft: '200px ', textAlign: 'left' }}>Most of us have shopped online for something at some point, which means we've taken part in e-commerce. So it goes without saying that e-commerce is everywhere. But very few people may know that e-commerce has a history that goes back to before the internet began.     </p>
        </div>



      </div>

      {/* ----------------------------------- */}

    </div>
  )
}

export default About