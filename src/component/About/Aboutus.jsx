import React from 'react';
import { MdOutlineHistoryEdu } from "react-icons/md";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import a1 from '../../image/a1.png';
import d1 from '../../image/d1.png';
import d2 from '../../image/d2.png';
import d3 from '../../image/d3.png';
import d4 from '../../image/d4.png';
import d5 from '../../image/d5.png';
import p3 from '../../image/p3.jpg';
// Import the external CSS file
import '../../Css_Folder/Aboutus.css';
const Aboutus = () => {
  const images = [d1, d2, d3, d4, d5];

  return (
    <div>
      {/* About Us Section */}
      <div className="aboutimg" style={{ position: 'relative', textAlign: 'center' }}>
        <img
          src={p3}
          alt='About Us'
          className="about-img"
        />
        <div className='about-h'
          style={{
           
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 'clamp(1rem, 3vw, 1.8rem)', // Adjusted font size for better fit
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for better text readability
            padding: '8px 16px', // Adjusted padding
            borderRadius: '10px', // Rounded corners
            textAlign: 'center',
            width: '100%', // Full width
            maxWidth: '100%', // Ensure it doesn't exceed the container's width
            boxSizing: 'border-box', // Ensure padding is included in width
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Added shadow for depth
            zIndex: 10, // Ensure the text appears above the image
            whiteSpace: 'nowrap', // Prevent text from wrapping
            overflow: 'hidden', // Hide overflow
            textOverflow: 'ellipsis' // Add ellipsis if the text overflows
          }}
        >
          SRPM Aspire Education & Welfare Society
        </div>

        <div style={{ marginTop: '20px' }}>
          <h1 style={{
            animation: 'fadeInSlideUp 2s ease-out',
            fontWeight: 'bold',
            fontSize: '2.5rem',
            marginTop: '50px',
            color: '#333',
          }}>
            OUR MISSION
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <div style={{
        backgroundColor: '#add8e6',
        padding: '50px',
        borderRadius: '8px',
        maxWidth: '90%',
        margin: '0 auto',
        marginTop:"30px"
      }}>
        <p style={{ margin: 0, fontSize: '1.2rem', color: 'black', textAlign: 'justify' }}>
          Our Society SRPM Aspire Education and Welfare Society Samiti works for social helping, building capacity and infusion of technology by imparting transfer of knowledge, enhanced skills, and developing the right attitude in all people's awareness, health, women and child development, environment, old age homes, de-addiction related work in India. SRPM is doing such activities and programs to make people aware of our vision.
        </p>
      </div>

      {/* Key Areas Section */}
      <div style={{ textAlign: 'center', padding: '20px', marginTop: '50px' }}>
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
        }}>
          OUR KEY AREAS
        </h1>
      </div>

      <div style={{
        backgroundColor: '#D3D3D3',
        padding: '50px',
        borderRadius: '8px',
        maxWidth: '90%',
        margin: '0 auto',
      }}>
        <p style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: '1.2rem',
        }}>
          The organization has undertaken a number of projects in Education, Handicraft, Computer Training, Health awareness development programs, environment, etc. in Madhya Pradesh State.<br /><br />
          <PiArrowsInCardinalBold /> Livelihood Cum Skill Development Trainings On Vermin Compost, Vegetables Planting, Bio-gas, Organic Pesticide. <br /><br />
          <PiArrowsInCardinalBold /> SHGs Group Formation & Mobilization.<br /><br />
          <PiArrowsInCardinalBold /> Free Competitive Coaching Classes For OBC And Minority Students.<br /><br />
          <PiArrowsInCardinalBold /> Livelihood Training Nai Roshni For Minority Women<br /><br />
          <PiArrowsInCardinalBold /> Skill Development Training FOR Tribal Women On Embroidery.<br /><br />
          <PiArrowsInCardinalBold /> Handicraft Training Program.<br /><br />
          <PiArrowsInCardinalBold /> Agarbatti And Dhoopbatti Making Livelihood Program.<br /><br />
          <PiArrowsInCardinalBold /> Employment & Self-employment Training Program For Bhopal Gas Victims.<br /><br />
        </p>
      </div>

      {/* Vision Section */}
      <div style={{ textAlign: 'center', padding: '20px', marginTop: '50px' }}>
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
        }}>
          OUR VISION
        </h1>
        <p style={{ margin: '40px', fontSize: '1.2rem', color: 'black', textAlign: 'justify' }}>
          SRPM wants that no one will be illiterate, everyone should know the rights of education. They should be able to earn for their livelihood. The government is doing a good job for them, so people should be aware of that. Facilitate through various means the development of a dynamic and informed world-wide community able to influence policies and actions at all levels of India.
        </p>
      </div>

      {/* Images Section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', margin: '40px 0' }} className="key-areas-images">
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <img
              src={image}
              alt={`d${index + 1}`}

            />
            {index < images.length - 1 && (
              <img
                src={a1}
                alt="Arrow"
                style={{
                  width: '10px',
                  height: 'auto',
                  marginLeft: '10px',
                }}
                className="key-areas-arrow"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* History Section */}
      <div style={{
        backgroundColor: '#ECFFDC',
        padding: '50px',
        borderRadius: '8px',
        maxWidth: '90%',
        margin: '0 auto',
        marginTop: '30px',
      }}>
        <MdOutlineHistoryEdu style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
        }} /> <h1 style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
        }}>
          HISTORY
        </h1>
        <p style={{ margin: '40px', fontSize: '1.2rem', color: 'black', textAlign: 'justify' }}>
          We started from 2012 and tried to give our best to society in the field of education, environment, youth empowerment, and skill development, handicraft embroidery, and women & child development. Technology for the welfare of the society through imparting education, training, awareness, and conducting social survey and research activities to their stakeholders.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
