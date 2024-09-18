import React, { useState } from 'react';
import '../../Css_Folder/WhatWeDo.css'; // Adjust the path if needed
import p15 from '../../image/p15.jpg';
import p22 from '../../image/p22.jpg';
import p26 from '../../image/p26.jpg';
import p29 from '../../image/p29.jpg';
import p30 from '../../image/p30.jpg';
import p42 from '../../image/p42.jpg';
import p82 from '../../image/p82.jpeg';
import p83 from '../../image/p83.jpeg';
import pp80 from '../../image/pp80.jpeg';
import pp81 from '../../image/pp81.jpeg';
const WhatWeDo = () => {
  const [expandedCard, setExpandedCard] = useState(null);  // Track the expanded card

  const handleReadMoreClick = (index, e) => {
    e.stopPropagation(); // Prevent card collapse on the click event
    setExpandedCard(expandedCard === index ? null : index); // Toggle between opening and closing the card
  };

  return (
    <div className="what-we-do-container">
      <h2 className="title">What We Do</h2>
      <div className="service-grid">
        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 0 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 0 ? null : 0)}
          >
            <img src={p42} alt="NAI ROSHNI BY MOMA" />
            <h3>NAI ROSHNI BY MOMA</h3>
            {expandedCard === 0 && (
              <>
                <p>Our Agarbatti Training Program covers everything from sourcing raw materials like bamboo sticks and aromatic powders to learning production techniques and fragrances.
                   This provides participants the knowledge needed for self-employment and financial independence.</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(0, e)}
            >
              {expandedCard === 0 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 1 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
          >
            <img src={p29} alt="AGARBATTI MAKING TRAINING BY KVIC" />
            <h3>AGARBATTI MAKING TRAINING BY KVIC</h3>
            {expandedCard === 1 && (
              <>
                <p>Our Agarbatti Training Program is a well-structured course that covers every aspect of the business,
                from production to packaging and marketing.</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(1, e)}
            >
              {expandedCard === 1 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 2 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
          >
            <img src={p30} alt="HONEYBEE MISSION BY KVIC" />
            <h3>HONEYBEE MISSION BY KVIC</h3>
            {expandedCard === 2 && (
              <>
                <p> At SRPM Aspire Education and Welfare Society, we are dedicated to fostering sustainable livelihoods and economic empowerment through our comprehensive Madhumakhi Palan (Beekeeping) Training Program. This initiative is designed to equip individuals, especially those from marginalized communities,
           with the skills and knowledge needed to thrive in the beekeeping industry.<br /><br />
            
            <br /><br /></p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(2, e)}
            >
              {expandedCard === 2 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 3 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)}
          >
            <img src={p22} alt="FOOD PROCESSING TRAINING BY CEDMAP" />
            <h3>FOOD PROCESSING TRAINING BY CEDMAP</h3>
            {expandedCard === 3 && (
              <>
                <p>The Food Processing Training by CEDMAP is designed to provide participants with essential knowledge and skills for starting or expanding a food processing business. The program covers the entire spectrum of food processing, including the selection of raw materials, processing techniques, and packaging standards. It emphasizes hygienic practices and compliance with food safety regulations to ensure product quality and consumer safety. Additionally, participants will learn about market trends and strategies for successfully selling
                   processed food products, making the training comprehensive for budding entrepreneurs.</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(3, e)}
            >
              {expandedCard === 3 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        {/* Add the 7 additional cards here */}
        
        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 4 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
          >
            <img src={p29} alt="DABRA AGARBATTI TRAINING" />
            <h3>DABRA AGARBATTI TRAINING</h3>
            {expandedCard === 4 && (
              <>
                <p>The Dabra Agarbatti Training focuses on the comprehensive production process of traditional incense sticks, covering every aspect from sourcing raw materials like bamboo sticks and aromatic powders to the actual manufacturing techniques. Participants are trained in creating different fragrances, ensuring quality control, and using efficient production methods. In addition to the technical aspects, the training also emphasizes the business side, offering guidance on branding,
                   packaging, and market strategies to successfully sell the products.</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(4, e)}
            >
              {expandedCard === 4 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 5 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 5 ? null : 5)}
          >
            <img src={p83} alt="SHG GROUP FORMATION BY KVIC" />
            <h3>SHG GROUP FORMATION BY KVIC</h3>
            {expandedCard === 5 && (
              <>
                <p>The SHG Formation and Management Training by KVIC provides comprehensive guidance on establishing and managing Self Help Groups (SHG) to promote collective economic empowerment. Participants are taught the process of forming SHGs, maintaining group cohesion, and developing leadership skills. The training covers essential aspects such as savings mobilization, internal lending, and financial management, enabling members to pool resources and access credit. Additionally, the program highlights government schemes and subsidies available to SHGs, helping participants grow their businesses and improve livelihoods through collaborative efforts.</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(5, e)}
            >
              {expandedCard === 5 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 6 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 6 ? null : 6)}
          >
            <img src={p26} alt="COMPETITIVE EXAMS TRAINING BY OBC" />
            <h3>COMPETITIVE EXAMS TRAINING BY OBC</h3>
            {expandedCard === 6 && (
              <>
                <p>The Competitive Exams Training by OBC offers comprehensive
                   guidance to individuals preparing for various government and competitive exams.
                    This program covers key subjects, exam patterns, and time management strategies,
                     helping participants improve their performance and confidence. Expert trainers provide focused
                      coaching on topics like quantitative aptitude, reasoning, general knowledge, and English, ensuring that candidates are well-prepared for the exam challenges. Additionally, mock tests and personalized feedback are provided to enhance exam readiness and success rates.






</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(6, e)}
            >
              {expandedCard === 6 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 7 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 7 ? null : 7)}
          >
            <img src={p82} alt="SHG GROUP FORMATION BY OSHNIC GROUP" />
            <h3>SHG GROUP FORMATION BY OSHNIC GROUP</h3>
            {expandedCard === 7 && (
              <>
                <p>The SHG (Self Help Group) Formation and Management Training by
                   OSHNIC Group guides participants through the process of creating 
                   and running successful SHG groups. This training covers the fundamentals of group formation, leadership development, and financial management, including savings, lending practices, and record-keeping. Participants learn how to build a cohesive group dynamic, promote collective decision-making, and access government schemes and financial support. Additionally, the training focuses on income-generating activities, empowering group members to achieve financial independence and community development.


</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(7, e)}
            >
              {expandedCard === 7 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 8 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 8 ? null : 8)}
          >
            <img src={pp80} alt="COMPUTER OPERATING TRAINING BY WINCARE TECHNOSFT GROUP" />
            <h3>COMPUTER OPERATING TRAINING BY WINCARE TECHNOSFT GROUP</h3>
            {expandedCard === 8 && (
              <>
                <p>The Computer Operating Training by WINCARE TECHNOSFT Group is designed to equip individuals with essential computer skills required in today’s digital world. This training covers basic to intermediate computer operations, including using operating systems, managing files, word processing, spreadsheets, and internet navigation. Participants will also learn important software applications
                   like Microsoft Office, enhancing their productivity and employability. </p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(8, e)}
            >
              {expandedCard === 8 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 9 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 9 ? null : 9)}
          >
            <img src={pp81} alt="SEWING MACHINE TAILORING TRAINING" />
            <h3>SEWING MACHINE TAILORING TRAINING</h3>
            {expandedCard === 9 && (
              <>
                <p>The Sewing Machine Tailoring Training provides hands-on instruction aimed at empowering 
                  individuals with the skills needed to start their own tailoring businesses. Participants learn the fundamentals of sewing, garment construction, and pattern making, using both manual and electric sewing machines. The training covers various tailoring techniques, fabric selection, and finishing methods, ensuring that learners can produce high-quality clothing items. In addition to technical skills, the program offers guidance on pricing, customer service, and marketing, equipping trainees
                   to become self-employed and run successful tailoring ventures.</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(9, e)}
            >
              {expandedCard === 9 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="service-card-container">
          <div
            className={`service-card ${expandedCard === 10 ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 10 ? null : 10)}
          >
            <img src={p15} alt="PMEGP AWARENESS CAMP BY KVIC" />
            <h3>PMEGP AWARENESS CAMP BY KVIC</h3>
            {expandedCard === 10 && (
              <>
                <p>
                The PMEGP Awareness Camp by KVIC aims to educate aspiring entrepreneurs about the Prime Minister’s Employment Generation Programme (PMEGP), a government initiative to promote self-employment through financial assistance. The camp provides detailed information on eligibility criteria, application processes, and the range of industries covered under the scheme. Participants learn about the benefits of PMEGP, including subsidies for setting up micro-enterprises in manufacturing, services, and trading sectors. Additionally, the camp highlights the support KVIC offers in terms of mentorship, skill development, and market 
                linkages, helping participants turn their business ideas into reality.</p>
              </>
            )}
            <button
              className="read-more-btn"
              onClick={(e) => handleReadMoreClick(10, e)}
            >
              {expandedCard === 10 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatWeDo;
