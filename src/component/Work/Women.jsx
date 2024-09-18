import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../Css_Folder/Women.css';
import '../../Css_Folder/Women2.css';
import e1 from '../../image/e1.png';
import e2 from '../../image/e2.png';
import e3 from '../../image/e3.png';
import e4 from '../../image/e4.png';
import e5 from '../../image/e5.png';
import e6 from '../../image/e6.png';
import p22 from '../../image/p22.jpg';
import p41 from '../../image/p41.jpg';
import p42 from '../../image/p42.jpg';
import p43 from '../../image/p43.jpg';
import wom1 from '../../image/wom1.jpeg';

const Women = () => {
  return (
    <div className="event-list-page">
      {/* Livelihood Section */}
      <div className="women-section">
        <img src={wom1} alt="Livelihood Background" className="Women-image" />
        <div className="Women-text">
          <div className="Women-title">WOMEN EMPOWERMENT</div>
          <div className="Women-subtitle">Empower Her, Empower the World</div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div style={{ marginTop: '70px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.5rem', color: '#333' }}>
          Unlocking the Power of Women
        </h1>
      </div>

      {/* <br></br>
      <br></br> */}
      {/* Mission Description Section */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '50px',
          borderRadius: '8px',
          maxWidth: '90%',
          margin: '20px auto',
        }}
      >
        <p style={{ margin: 0, fontSize: '1.2rem', color: 'black', textAlign: 'justify' }}>
          At SRPM Aspire Education and Welfare Society, we believe that empowering women is the key to
          creating a stronger, more equitable society. Our initiatives are dedicated to improving the social, economic,
          and educational status of women in our communities. We provide women with the tools, resources,
          and opportunities they need to rise above challenges and lead empowered lives.
        </p>
      </div>
      <br></br>
      <br></br>
      {/* OUR PROGRAMMES Heading with Yellow Background */}
      <div style={{ marginTop: '20px', textAlign: 'center', position: 'relative' }}>
        {/* Yellow background strip */}
        <div className='clss-h1'
          style={{
            backgroundColor: '#F5E8CC',
            width: '100%',
            height: '50px',
            position: 'absolute',
            top: '50%',
            left: 0,
            zIndex: 0,
            transform: 'translateY(-50%)',
          }}
        >

          {/* Text on top of the yellow strip */}
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '2.5rem',
              color: 'black',
              position: 'relative',
              zIndex: 1,
              display: 'inline-block',
              padding: '0 20px',
              backgroundColor: 'transparent',

            }}
          >
            OUR PROGRAMMES
          </h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* FOOD PROCESSING TRAINING FOR WOMEN (KVIC) Section */}
      <h6 className="training-title">FOOD PROCESSING TRAINING FOR WOMEN (KVIC)</h6>
      <div
        className="content-section"
        style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', maxWidth: '80%', margin: '0 auto' }}
      >
        {/* Image Section */}
        <div className="image-container" style={{ flex: 1 }}>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img className="carousel-image" src={p22} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-image" src={p41} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Content Section */}
        <div className="content" style={{ flex: 2 }}>
          <p>
            At SRPM Aspire Education and Welfare Society, we are committed to empowering individuals by
            providing them with skills that foster sustainable livelihoods. One of our key initiatives is the Agarbatti
            (Incense Stick) Training Program, specifically designed to uplift marginalized communities
            and provide them with an opportunity for self-employment and financial independence.
            <br />
            <br />
            Our Agarbatti Training Program is a well-structured course that covers every aspect of the business,
            from production to packaging and marketing. Here's what participants will learn:
            <br />
            <br />
            Raw Material Sourcing: Guidance on where to procure raw materials like bamboo sticks, aromatic powders, and essential oils at affordable rates.
            <br />
            <br />
            Production Techniques: Step-by-step training on how to manually roll incense sticks, the drying process, and adding different fragrances.
          </p>
        </div>
      </div>

      {/* WHAT WE DO Section */}
      <div style={{ textAlign: 'center', padding: '20px', marginTop: '50px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>WHAT WE DO...</h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {/* Women Empowerment Section */}
      <div
        className="women-empowerment-container"
        style={{ display: 'flex', alignItems: 'flex-start', maxWidth: '90%', margin: '0 auto', justifyContent: 'center', paddingLeft: "50px" }}
      >



        {/* Focus Cards Container (Right) */}
        <div className="focus-cards-container" style={{ flex: '1 1 70%', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div className="focus-card">
            <img src={e1} alt="Leadership" className="focus-icon" />
            <h3>Encourage Women Leadership</h3>
            <p>Inspire women to take on leadership roles in their communities and workplaces.</p>
          </div>

          <div className="focus-card">
            <img src={e2} alt="Gender Equality" className="focus-icon" />
            <h3>Promote Gender Equality</h3>
            <p>Advocate for equal rights and opportunities for women in all areas of life.</p>
          </div>

          <div className="focus-card">
            <img src={e3} alt="Vocational Training" className="focus-icon" />
            <h3>Provide Vocational Training</h3>
            <p>Equip women with the skills they need for financial independence.</p>
          </div>

          <div className="focus-card">
            <img src={e4} alt="Healthcare" className="focus-icon" />
            <h3>Support Women's Health</h3>
            <p>Ensure that women have access to necessary health services, including maternal care.</p>
          </div>

          <div className="focus-card">
            <img src={e5} alt="Education" className="focus-icon" />
            <h3>Enhance Education for Girls</h3>
            <p>Promote education initiatives to increase literacy rates and opportunities for girls.</p>
          </div>

          <div className="focus-card">
            <img src={e6} alt="Economic Independence" className="focus-icon" />
            <h3>Foster Economic Independence</h3>
            <p>Provide financial education and resources to help women build businesses or careers.</p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      {/* SKILL DEVELOPMENT TRAINING FOR WOMEN Section */}
      <h6 className="training-title">SKILL DEVELOPMENT TRAINING FOR WOMEN (MOMA)</h6>
      <div
        className="content-section"
        style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', maxWidth: '80%', margin: '0 auto' }}
      >
        {/* Image Section */}
        <div className="image-container" style={{ flex: 1 }}>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img className="carousel-image" src={p43} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-image" src={p42} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Content Section */}
        <div className="content" style={{ flex: 2 }}>
          <p>
            Our Agarbatti Training Program covers everything from sourcing raw materials like bamboo sticks and aromatic powders to learning production techniques and fragrances. This provides participants the knowledge needed for self-employment and financial independence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Women;
