import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaLeaf, FaRecycle, FaTree, FaWater } from 'react-icons/fa';
import '../../Css_Folder/Environment.css';
import p24 from '../../image/p24.jpg';
import p40 from '../../image/p40.jpg';
import p60 from '../../image/p60.jpg';
import p63 from '../../image/p63.jpg';
import p92 from '../../image/p92.jpg';
import p93 from '../../image/p93.jpg';
import pp89 from '../../image/pp89.jpeg';
import pp90 from '../../image/pp90.jpeg';
import pp91 from '../../image/pp91.jpeg';
const Environment = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.focus-areas12');
      if (aboutSection) { // Ensure the element exists before calling getBoundingClientRect
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight - 100) {
          setInView(true);
        }
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
      <div className="event-list-page12">
        <div className="environment-section12">
          <img src={p40} alt="Environment Background" className="Environment-image12" />
          <div className="Environment-text12">
            <div className="Environment-title12">ENVIRONMENTAL AWARENESS</div>
            <div className="Environment-subtitle12">Promoting a Sustainable Future</div>
          </div>
        </div>

        {/* Focus Areas Section */}
        <section className="about-campaign12">
          <div className="about-content12">
            <h2 className="section-title12">Our Environmental Focus Areas</h2>
            <p className="section-description12">
              We are committed to fostering environmental sustainability through the following key initiatives:
            </p>
            <div className={`focus-areas12 ${inView ? 'animate-active12' : ''}`}>
              <div className="focus-item12">
                <FaTree className="focus-icon12" />
                <h3>Reforestation & Tree Planting</h3>
                <p>We engage communities in tree planting activities to restore deforested areas and improve air quality.</p>
              </div>
              <div className="focus-item12">
                <FaRecycle className="focus-icon12" />
                <h3>Waste Management & Recycling</h3>
                <p>Our programs focus on reducing waste through recycling initiatives and promoting responsible disposal practices.</p>
              </div>
              <div className="focus-item12">
                <FaWater className="focus-icon12" />
                <h3>Water Conservation</h3>
                <p>We advocate for efficient water use and implement projects to ensure clean and accessible water resources.</p>
              </div>
              <div className="focus-item12">
                <FaLeaf className="focus-icon12" />
                <h3>Sustainable Agriculture</h3>
                <p>Our initiatives support sustainable farming practices that protect natural resources and enhance food security.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Environmental Programs Section */}
        <section className="environment-programs12">
          <h2 className="section-title12">Featured Environmental Programs</h2>
          <div className="program-grid12">
            <Card className="program-card12">
              <Card.Img variant="top" src={p60} className="card-img12" />
              <Card.Body>
                <Card.Title className="card-title12">Tree Planting Campaign</Card.Title>
                <Card.Text className="card-text12">
                  Join our tree planting drives to combat deforestation and enhance local green spaces.
                </Card.Text>
             
              </Card.Body>
            </Card>

            <Card className="program-card12 program-card-alternate12">
              <Card.Img variant="top" src={p92} className="card-img12" />
              <Card.Body>
                <Card.Title className="card-title12">Recycling Workshops</Card.Title>
                <Card.Text className="card-text12">
                  Participate in our workshops to learn about effective recycling techniques and waste management.
                </Card.Text>
               
              </Card.Body>
            </Card>

            <Card className="program-card12">
              <Card.Img variant="top" src={p93} className="card-img12" />
              <Card.Body>
                <Card.Title className="card-title12">Water Conservation Projects</Card.Title>
                <Card.Text className="card-text12">
                  Discover our projects aimed at improving water conservation and access to clean water.
                </Card.Text>
                
              </Card.Body>
            </Card>

            <Card className="program-card12 program-card-alternate12">
              <Card.Img variant="top" src={p63} className="card-img12" />
              <Card.Body>
                <Card.Title className="card-title12">Sustainable Agriculture</Card.Title>
                <Card.Text className="card-text12">
                  Learn about our efforts to promote sustainable farming practices and environmental stewardship.
                </Card.Text>
               
              </Card.Body>
            </Card>

           
          </div>
        </section>

        {/* Our Complete Works Section */}
        <section className="complete-works-section12">
          <h2 className="section-title12">Our Achievements & Projects</h2>
          <div className="works-grid12">
            <Card className="work-card12">
              <Card.Img variant="top" src={pp91} className="card-img12" />
              <Card.Body>
                <Card.Title className="card-title12">Urban Green Spaces</Card.Title>
                <Card.Text className="card-text12">
                  Our projects have successfully transformed urban areas with green spaces and improved air quality.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="work-card12 work-card-alternate12">
              <Card.Img variant="top" src={p24} className="card-img12" />
              <Card.Body>
                <Card.Title className="card-title12">Community Recycling Initiatives</Card.Title>
                <Card.Text className="card-text12">
                  We've implemented community-based recycling programs that significantly reduced local waste.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="work-card12">
              <Card.Img variant="top" src={pp89} className="card-img12" />
              <Card.Body>
                <Card.Title className="card-title12">Water Management Solutions</Card.Title>
                <Card.Text className="card-text12">
                  Our solutions have optimized water usage and improved access to clean water in various regions.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="work-card12 work-card-alternate12">
              <Card.Img variant="top" src={pp90} className="card-img12" />
              <Card.Body>
                <Card.Title className="card-title12">Sustainable Farming Projects</Card.Title>
                <Card.Text className="card-text12">
                  We've introduced sustainable farming practices that benefit both the environment and local communities.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default Environment;
