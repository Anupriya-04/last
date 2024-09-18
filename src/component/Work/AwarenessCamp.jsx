import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaChartLine, FaHandsHelping, FaHeartbeat, FaLeaf } from 'react-icons/fa';
import '../../Css_Folder/AwarenessCamp.css';

import awe2 from '../../image/awe2.jpg';
import p1 from '../../image/p1.jpg';
import p13 from '../../image/p13.jpg';
import p14 from '../../image/p14.jpg';
import p15 from '../../image/p15.jpg';
import p16 from '../../image/p16.jpg';
import p17 from '../../image/p17.jpg';
import p2 from '../../image/p2.jpg';
import p3 from '../../image/p3.jpg';
import p4 from '../../image/p4.jpg';
const Awareness = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.focus-areas');
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight - 100) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="event-list-page">
      {/* Livelihood Section */}
      <div className="women-section">
        <img src={awe2} alt="Livelihood Background" className="Women-image" />
        <div className="Women-text">
          <div className="Women-title">AWARENESS CAMP</div>
          <div className="Women-subtitle">Empowering communities for a healthier tomorrow</div>
        </div>
      </div>

      {/* Our Mission Section */}
    
      </div>

    
      
      <br></br>

      {/* About Campaign Section */}
      <section className="about-campaign">
        <div className="about-content">
          <h2 className="section-title">What We Focus On</h2>
          <p className="section-description">
            Our campaigns are designed to bring long-term, sustainable change in the following key areas:
          </p>
          <div className={`focus-areas ${inView ? 'animate-active' : ''}`}>
            <div className="focus-item">
              <FaHeartbeat className="focus-icon" />
              <h3>Health & Wellness</h3>
              <p>We promote healthy living through disease prevention, nutrition, and regular health checkups.</p>
            </div>
            <div className="focus-item">
              <FaLeaf className="focus-icon" />
              <h3>Environmental Conservation</h3>
              <p>We educate communities on eco-friendly practices, tree planting, and sustainability.</p>
            </div>
            <div className="focus-item">
              <FaHandsHelping className="focus-icon" />
              <h3>Hygiene & Sanitation</h3>
              <p>We emphasize personal hygiene and proper sanitation to prevent illness and promote well-being.</p>
            </div>
            <div className="focus-item">
              <FaChartLine className="focus-icon" />
              <h3>Education & Empowerment</h3>
              <p>Our programs empower individuals with knowledge, skills, and resources to take charge of their health and environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Awareness Programs Section */}
      <section className="awareness-programs">
        <h2 className="section-title">Featured Awareness Programs</h2>
        <div className="program-grid">
          <Card className="program-card">
            <Card.Img variant="top" src={p13} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Health Awareness</Card.Title>
              <Card.Text className="card-text">
                Our health awareness programs focus on preventive healthcare and health education to build healthier communities.
              </Card.Text>
              <button className="card-btn">Explore More</button>
            </Card.Body>
          </Card>

          <Card className="program-card program-card-alternate">
            <Card.Img variant="top" src={p15} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Hygiene Awareness</Card.Title>
              <Card.Text className="card-text">
                We conduct hygiene awareness programs in rural areas to improve practices and promote healthy habits.
              </Card.Text>
              <button className="card-btn">Explore More</button>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Img variant="top" src={p16} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Environmental Awareness</Card.Title>
              <Card.Text className="card-text">
                We organize campaigns to raise awareness about environmental sustainability and conservation.
              </Card.Text>
              <button className="card-btn">Explore More</button>
            </Card.Body>
          </Card>

          <Card className="program-card program-card-alternate">
            <Card.Img variant="top" src={p14} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Water Conservation</Card.Title>
              <Card.Text className="card-text">
                Our water conservation programs help communities adopt better water management and preservation practices.
              </Card.Text>
              <button className="card-btn">Explore More</button>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Img variant="top" src={p17} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Waste Management & Recycling</Card.Title>
              <Card.Text className="card-text">
                We focus on waste reduction, recycling, and responsible disposal to protect our environment and communities.
              </Card.Text>
              <button className="card-btn">Explore More</button>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Our Complete Works Section */}
      <section className="complete-works-section">
        <h2 className="section-title">Our Journey & Works</h2>
        <div className="works-grid">
          <Card className="work-card">
            <Card.Img variant="top" src={p1} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Health Initiative</Card.Title>
              <Card.Text className="card-text">
                In this initiative, we improved health outcomes in underserved communities through targeted healthcare programs.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="work-card work-card-alternate">
            <Card.Img variant="top" src={p2} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Eco-Friendly Practices</Card.Title>
              <Card.Text className="card-text">
                We introduced eco-friendly practices and sustainability measures in urban and rural areas.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="work-card">
            <Card.Img variant="top" src={p3} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Water Management</Card.Title>
              <Card.Text className="card-text">
                Our water management projects aimed to optimize water usage and improve access to clean water.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="work-card work-card-alternate">
            <Card.Img variant="top" src={p4} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Waste Reduction</Card.Title>
              <Card.Text className="card-text">
                We focused on waste reduction through community programs and innovative recycling techniques.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Awareness;
