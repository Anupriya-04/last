import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
//import "slick-carousel/slick/slick.css";
import Carousel from 'react-bootstrap/Carousel';
import { FaEnvira } from "react-icons/fa6";
import { GiAwareness, GiOlive } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { MdOutlineCastForEducation, MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import '../../Css_Folder/Home.css';
import p16 from '../../image/p16.jpg';
import p22 from '../../image/p22.jpg';
import p28 from '../../image/p28.jpg';
import p3 from '../../image/p3.jpg';
import p30 from '../../image/p30.jpg';
import p31 from '../../image/p31.jpg';
import { default as p32 } from '../../image/p32.jpg';
import p55 from '../../image/p55.jpeg';
import p6 from '../../image/p6.jpg';
const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home21-container">
      {/* Slider Section */}
      <section className="slider21-section" style={{ position: 'relative' }}>
  <div className="slider21-container" style={{ flex: 1 }}>
    <Carousel>
      {/* First Slide */}
      <Carousel.Item interval={3000}>
        <img className="slider21-image" src={p31} alt="First slide" />
        <Carousel.Caption>
          <div style={{
            fontSize: '1rem', 
            fontWeight: 'bold', 
            color: '#fff', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '20px', 
            borderRadius: '10px',
          }}>
            Bringing Smiles <br /> Through Education & Empowerment
          </div>
          <div style={{
            fontSize: '1rem', 
            color: '#fff', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '10px',
          }}>
            Know More
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item interval={3000}>
        <img className="slider21-image" src={p32} alt="Second slide" />
        <Carousel.Caption>
          <div style={{
            fontSize: '1rem', 
            fontWeight: 'bold', 
            color: '#fff', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '20px', 
            borderRadius: '10px',
          }}>
            Empowering the Next Generation
          </div>
          <div style={{
            fontSize: '1rem', 
            color: '#fff', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '10px',
          }}>
            Know More
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item interval={3000}>
        <img className="slider21-image" src={p3} alt="Third slide" />
        <Carousel.Caption>
          <div  className='abouttext' style={{
            fontSize: '1rem', 
            fontWeight: 'bold', 
            color: '#fff', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '20px', 
            borderRadius: '10px',
          }}>
            Building a Brighter Future
          </div>
          <div  className='abouttext' style={{
            fontSize: '1rem', 
            color: '#fff', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '10px',
          }}>
            Know More
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Fourth Slide */}
      <Carousel.Item interval={3000}>
        <img className="slider21-image" src={p6} alt="Fourth slide" />
        <Carousel.Caption>
          <div  className='abouttext' style={{
            fontSize: '1rem', 
            fontWeight: 'bold', 
            color: '#fff', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '20px', 
            borderRadius: '10px',
          }}>
            Inspiring Through Action
          </div>
          <div className='abouttext' style={{
            fontSize: '1rem', 
            color: '#fff', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '10px',
          }}>
            Know More
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</section>


      {/* Main Content Section */}
      <section className="content21-section">
        {/* Success Story Section */}
        <div className="success21-story-section">
          <h2>OUR PROGRAMS</h2>
          
          <div className="story21-card">
            <img src={p28} alt="Success Story 1" />
            <div className="story21-details">
            
              <p><MdOutlineCastForEducation /> EDUCATIONAL TRAINING</p>
              <h3> At SRPM NGO, we are dedicated to transforming lives through the power of education.</h3>
              <p>Bridging Dreams and Reality Through Learning...</p>
              <Link to="/Education">Read more</Link>
            </div>
          </div>

          <div className="story21-card">
            <img src={p30} alt="Success Story 2" />
            <div className="story21-details">
           
              <p><GiOlive /> LIVELIHOOD</p>
              <h3>livelihoods and economic empowerment through our comprehensive Madhumakhi Palan (Beekeeping) Training Program.</h3>
              <p>Bridging Dreams and Reality Through Learning...</p>
              <Link to="/Livelihood">Read more</Link>
            </div>
          </div>



          <div className="story21-card">
            <img src={p55} alt="Success Story 2" />
            <div className="story21-details">
         
              <p><MdOutlineHealthAndSafety /> HEALTHCARE</p>
              <h3> At SRPM Aspire Education, we are deeply committed to reshaping this narrative and ensuring that 
              the contributions of healthcare workers are properly acknowledged.</h3>
              <p>Caring for Health, Empowering Lives...</p>
              <Link to="/Livelihood">Read more</Link>
            </div>
          </div>

          <div className="story21-card">
            <img src={p22} alt="Success Story 2" />
            <div className="story21-details">
            
              <p><GrRestroomWomen /> WOMEN EMPOWERMENT</p>
              <h3>Raw Material Sourcing: Guidance on where to procure raw materials like bamboo sticks, aromatic powders, and essential oils at affordable rates.</h3>
              <p>Empower Her, Empower the World...</p>
              <Link to="/Women">Read more</Link>
            </div>
          </div>


          <div className="story21-card">
            <img src={p16} alt="Success Story 2" />
            <div className="story21-details">
             
              <p><GiAwareness /> AWARENESS CAMP</p>
              <h3>Our health awareness programs focus on preventive healthcare and health education to build healthier communities..</h3>
              <p>Empowering communities for a healthier tomorrow...</p>
              <Link to="/AwarenessCamp">Read more</Link>
          </div>

          <div className="story21-card">
            <img src={p6} alt="Success Story 2" />
            <div className="story21-details">
              
              <p> <FaEnvira /> ENVIRONMENT</p>
              <h3>We conduct hygiene awareness programs in rural areas to improve practices and promote healthy habits.</h3>
              <p>Sustainable Choices for a Greener Future...</p>
              <Link to="/Environment">Read more</Link>
            </div>
          </div>

        
</div>

        </div>

        {/* Latest Events Section */}
       <div>
       <h1 >Latest Events</h1>

        <aside className="latest21-events">
 
  <div className="latest21-events-cards">
    <div className="event21-card">
      <ul className="animated21-list">
        <li>
          <a href="#">Knowledge and awareness - 23 May 2018 <FaCalendarAlt /></a>
        </li>
      </ul>
    </div>
    <div className="event21-card">
      <ul className="animated21-list">
        <li>
          <a href="#">The collective work of the village - 24 May 2018 <FaCalendarAlt /></a>
        </li>
      </ul>
    </div>
    <div className="event21-card">
      <ul className="animated21-list">
        <li>
          <a href="#">Unique initiative in Dimapur village - 31 March 2018 <FaCalendarAlt /></a>
        </li>
      </ul>
    </div>
    <div className="event21-card">
      <ul className="animated21-list">
        <li>
          <a href="#">Success story of community center - 07 July 2018 <FaCalendarAlt /></a>
        </li>
      </ul>
    </div>
    <div className="event21-card">
      <ul className="animated21-list">
        <li>
          <a href="#">Success story of community center - 07 July 2018 <FaCalendarAlt /></a>
        </li>
      </ul>
    </div>
    <div className="event21-card">
      <ul className="animated21-list">
        <li>
          <a href="#">Success story of community center - 07 July 2018 <FaCalendarAlt /></a>
        </li>
      </ul>
    </div>
    <div className="event21-card">
      <ul className="animated21-list">
        <li>
          <a href="#">Success story of community center - 07 July 2018 <FaCalendarAlt /></a>
        </li>
      </ul>
    </div>
    <div className="event21-card">
      <ul className="animated21-list">
        <li>
          <a href="#">Success story of community center - 07 July 2018 <FaCalendarAlt /></a>
        </li>
      </ul>
    </div>
  </div>
</aside>

</div>
      </section>
    </div>
  );
};

export default Home;





































