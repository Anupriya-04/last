import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../Css_Folder/Livelihood.css';
import '../../Css_Folder/livelihood1.css';
import g1 from '../../image/g1.png';
import g2 from '../../image/g2.png';
import g3 from '../../image/g3.png';
import g4 from '../../image/g4.png';
import g5 from '../../image/g5.png';
import g6 from '../../image/g6.png';
import p19 from '../../image/p19.jpg'; // Replace with the correct path to your image
import p25 from '../../image/p25.jpg';
import { default as p28 } from '../../image/p28.jpg';
import { default as p29 } from '../../image/p29.jpg';
import { default as p30 } from '../../image/p30.jpg';
import { default as p31 } from '../../image/p31.jpg';
import { default as p32 } from '../../image/p32.jpg';


const Livelihood = () => {
  return (
    <div className="event-list-page">
      {/* Livelihood Section */}
      <div className="livelihood-section">
        <img
          src={p25}
          alt="Livelihood Background"
          className="livelihood-image"
        />
        <div className="livelihood-text">
          <div className="livelihood-title">LIVELIHOOD</div>

          <div className="livelihood-subtitle">Bridging Dreams and Reality Through Learning</div>
          

         

        </div>
      </div>

      {/* WHY SKILLING Section */}
      <div className="why-skilling">
        <h1>WHY SKILLING?</h1>
      </div>

      {/* Paragraph Section */}
      <div className="paragraph-section">
        <p>
          At SRPM Aspire Education and Welfare Society, we believe that sustainable livelihood is the cornerstone of resilient and self-sufficient communities. Our Livelihood Program is designed to equip individuals, especially marginalized and underprivileged groups, with the necessary skills, resources, and opportunities to build a stable and sustainable future. Through our tailored training programs, we focus on enhancing vocational and technical skills, making people more employable in today’s fast-evolving job market. From agriculture and handicrafts to digital literacy and small-scale entrepreneurship, we ensure...
        </p>
      </div>

      <h1 className="done-title">WHAT WE HAVE DONE</h1>

      {/* Content with Image Section */}
      <div className="content-section"  style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', maxWidth: '80%', margin: '0 auto' }}>
        {/* Image Section on the left */}
        <div className="image-container" style={{ flex: 1 }}>
          <h1 className="training-title">AGARBATTI TRAINING</h1>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p19}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p28}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p29}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Content Section on the right */}
        <div className="content" style={{ flex: 2 }}>
          <p>
            At SRPM Aspire Education and Welfare Society, we are committed to empowering individuals by
            providing them with skills that foster sustainable livelihoods. One of our key initiatives is the Agarbatti
            (Incense Stick) Training Program, specifically designed to uplift marginalized communities 
            and provide them with an opportunity for self-employment and financial independence.<br /><br />
            Our Agarbatti Training Program is a well-structured course that covers every aspect of the business, from production to packaging and marketing. Here's what participants will learn:
            <br /><br />
            Raw Material Sourcing: Guidance on where to procure raw materials like bamboo sticks, aromatic powders, and essential oils at affordable rates.
            <br /><br />
            Production Techniques: Step-by-step training on how to manually roll incense sticks, the drying process, and adding different fragrances.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
<br></br>



<div className="livelihood-module-container">
      <h1 className="module-title">LIVELIHOOD MODULE</h1>

      <div className="module-grid">
        {/* Sustainable Agriculture */}
        <div className="module-item">
          <div className="circle">
            <img src={g1} alt="Sustainable Agriculture" className="module-icon" />
          </div>
          <div className="module-text">
            <h3> Sustainable Agriculture</h3>
            <p>Modern farming techniques and organic farming practices.</p>
          </div>
        </div>

        {/* Handicrafts & Artisanal Skills */}
        <div className="module-item">
          <div className="circle">
            <img src={g2} alt="Handicrafts" className="module-icon" />
          </div>
          <div className="module-text">
            <h3> Handicrafts & Artisanal Skills</h3>
            <p>Training in making traditional arts, textiles, and crafts.</p>
          </div>
        </div>

        {/* Small-Scale Enterprises */}
        <div className="module-item">
          <div className="circle">
            <img src={g3} alt="Small Scale Enterprises" className="module-icon" />
          </div>
          <div className="module-text">
            <h3> Small-Scale Enterprises</h3>
            <p>Entrepreneurship skills for small businesses and home industries.</p>
          </div>
        </div>

        {/* Financial Literacy */}
        <div className="module-item">
          <div className="circle">
            <img src={g4} alt="Financial Literacy" className="module-icon" />
          </div>
          <div className="module-text">
            <h3> Financial Literacy</h3>
            <p>Understanding savings, investments, and basic financial management.</p>
          </div>
        </div>

        {/* Vocational Training */}
        <div className="module-item">
          <div className="circle">
            <img src={g5} alt="Vocational Training" className="module-icon" />
          </div>
          <div className="module-text">
            <h3> Vocational Training</h3>
            <p>Providing specialized skill sets for diverse job opportunities.</p>
          </div>
        </div>

        {/* Social Empowerment */}
        <div className="module-item">
          <div className="circle">
            <img src={g6} alt="Social Empowerment" className="module-icon" />
          </div>
          <div className="module-text">
            <h3> Social Empowerment</h3>
            <p>Building community networks and promoting self-reliance.</p>
          </div>
        </div>
      </div>
    </div>



    
<br></br>


















      <div className="content-section"  style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', maxWidth: '80%', margin: '0 auto' }}>
        {/* Image Section on the left */}
        <div className="image-container" style={{ flex: 1 }}>
          <h1 className="training-title">Madhumakhhi Palan</h1>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p30}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p31}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p32}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Content Section on the right */}
        <div className="content" style={{ flex: 2 }}>
          <p>
          At SRPM Aspire Education and Welfare Society, we are dedicated to fostering sustainable livelihoods and economic empowerment through our comprehensive Madhumakhi Palan (Beekeeping) Training Program. This initiative is designed to equip individuals, especially those from marginalized communities,
           with the skills and knowledge needed to thrive in the beekeeping industry.<br /><br />
            Our Agarbatti Training Program is a well-structured course that covers every aspect of the business, from production to packaging and marketing. Here's what participants will learn:
            <br /><br />
            Beekeeping is not just a source of honey but a sustainable livelihood that supports biodiversity and enhances agricultural productivity. <br /><br />
            Our training program aims to provide participants with the tools to start and manage their own beekeeping 
            ventures, contributing to their financial independence and the local economy.
           
          </p>
        </div>
      </div>











    </div>
  );
};

export default Livelihood;

