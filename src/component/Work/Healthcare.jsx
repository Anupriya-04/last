import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../Css_Folder/Health.css';
import '../../Css_Folder/Healthcare.css';
import hel from '../../image/hel.jpeg';
import p23 from '../../image/p23.jpg';
import p51 from '../../image/p51.jpg';
import p53 from '../../image/p53.jpg';
import p54 from '../../image/p54.jpg';
import p55 from '../../image/p55.jpeg';

const Healthcare = () => {
  return (
    <div className="event-list-page">
      {/* Healthcare Section */}
      <div className="health-section">
        <img
          src={hel}
          alt="Healthcare Background"
          className="health-image"
        />
        <div className="health-text">
          <div className="health-title">HEALTH CARE</div>
          <div className="health-subtitle">Caring for Health, Empowering Lives</div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div style={{ marginTop: '20px' }}>
        <h1 style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          marginTop: '70px',
          color: '#333',
        }}>
          Our Commitment to Your Health
        </h1>
      </div>

      {/* Mission Description Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '80%',
        margin: '20px auto',
      }}>
        <p style={{ margin: 0, fontSize: '1.1rem', color: 'black', textAlign: 'justify' }}>
          At SRPM, we are dedicated to providing exceptional healthcare services tailored to meet your needs. 
          Our experienced professionals are committed to ensuring that every patient receives personalized care and support.
          We focus on preventive care, treatment, and holistic well-being to help you achieve a healthier, happier life.
        </p>
      </div>

      {/* Keyframes for Animation */}
      <style>
        {`
          @keyframes fadeInSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* OUR PROGRAMMES Heading with Yellow Background */}
      <div style={{ marginTop: '20px', textAlign: 'center', position: 'relative' }}>
        {/* Yellow background strip */}
        <div style={{
          backgroundColor: '#F5E8CC',
          width: '100%',
          height: '50px',
          position: 'absolute',
          top: '50%',
          left: 0,
          zIndex: 0,
          transform: 'translateY(-50%)',
        }}></div>

        {/* Text on top of the yellow strip */}
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
          color: 'black',
          position: 'relative',
          zIndex: 1,
          display: 'inline-block',
          padding: '0 20px',
          backgroundColor: '#EDE0D4',
        }}>
          OUR WORKS HIGHLIGHTS
        </h1>
      </div>
      <br /><br /><br />

      {/* Compassionate Care Section */}
      <h6 className="training-title">Compassionate Care</h6>

      <div className="content-section" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', maxWidth: '80%', margin: '0 auto' ,backgroundColor: 'F5E8CC' }}>
        {/* Image Section on the left */}
        <div className="image-container" style={{ flex: 1 }}>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p23}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p55}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Content Section on the right */}
        <div className="content" style={{ flex: 2 }}>
          <p>
            Every day, healthcare professionals risk their lives to care for others. Despite their bravery and dedication,
            they often face unfair treatment from society. At SRPM Aspire Education, we recognize their invaluable contributions through our awareness camps, known as Swastha Shivir. These events, conducted with young doctors,
            provide essential check-ups and medical care to the community.
            <br /><br />
            At SRPM Aspire Education, we are committed to changing this narrative. Through our dedicated awareness camps, known as Swastha Shivir, we offer a platform to acknowledge and celebrate the tireless work of these medical professionals. These camps, organized in collaboration with young doctors, are designed to deliver vital health check-ups and medical care to underserved communities.
            <br /><br />
            Our initiative goes beyond providing healthcare services; it extends to honoring and appreciating the selfless efforts of the professionals involved. After each awareness camp, we proudly award medals and certificates to recognize their exceptional commitment and hard work.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br /><br /><br />

      {/* Image below the Compassionate Care Section */}
     
    <div className="container">
      <div className="focus-header">
        <h1>OUR FOCUS</h1>
      </div>
      
      <div className="focus-content">
        <div className="focus-left">
          <div className="focus-item">Encourage Health Seeking Behaviour</div>
          <div className="focus-item">Address the disease burden of the community</div>
          <div className="focus-item">Share load of existing Government services</div>
        </div>

        <div className="focus-image">
          <img
            src={p55} // Replace with actual image path
            alt="Mother and Child"
          />
          <div className="image-caption">
            Improve access to Maternal & Child Healthcare
          </div>
        </div>

        <div className="focus-right">
          <div className="focus-item">Strengthen & supplement existing govt. systems</div>
          <div className="focus-item">Reduce out-of-pocket expenses on healthcare</div>
          <div className="focus-item">Promote the goal of Universal Health Coverage</div>
        </div>
      </div>
    </div>

      <br />
      <br />
      <br />
      <br /><br /><br />
      {/* Celebrating Lifesaving Efforts Section */}
      <h6 className="training-title">Celebrating Lifesaving Efforts</h6>

      <div className="content-section" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', maxWidth: '80%', margin: '0 auto' }}>
        {/* Image Section on the left */}
        <div className="image-container" style={{ flex: 1 }}>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p54}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Content Section on the right */}
        <div className="content" style={{ flex: 2 }}>
          <p>
            At SRPM Aspire Education, we are deeply committed to reshaping this narrative and ensuring that 
            the contributions of healthcare workers are properly acknowledged. Through our Swastha Shivir awareness
            camps, we take a proactive approach to not only provide critical medical services but also to honor those who make
            these services possible. Our awareness camps are organized in collaboration with young doctors and are designed to 
            offer comprehensive medical check-ups, health screenings, and valuable health education to underserved communities.
            <br /><br />
            At SRPM Aspire Education, we are deeply committed to reshaping this narrative and ensuring that
            the contributions of healthcare workers are properly acknowledged. Through our Swastha Shivir awareness camps,
            we take a proactive approach to not only provide critical medical services but also to honor those who make these 
            services possible. Our awareness camps are organized in collaboration with young doctors and are designed to offer comprehensive medical
            check-ups, health screenings, and valuable health education to underserved communities.
          </p>
        </div>
      </div>

      <br /><br />

      {/* Exceptional Care and Dedication Section */}
      <h6 className="training-title">Exceptional Care and Dedication</h6>

      <div className="content-section" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', maxWidth: '80%', margin: '0 auto' }}>
        {/* Image Section on the left */}
        <div className="image-container" style={{ flex: 1 }}>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p51}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-image"
                src={p53}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Content Section on the right */}
        <div className="content" style={{ flex: 2 }}>
          <p>
            Through these camps, we aim not only to address immediate health needs but also to honor the extraordinary service of healthcare professionals. Each Swastha Shivir event concludes with a special ceremony where we present medals and certificates to the participating doctors. These awards are a symbol of our deep appreciation for their exceptional service and commitment. They reflect our recognition of the crucial role these professionals play in advancing community health and ensuring that individuals receive the care they need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
