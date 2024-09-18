import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../Css_Folder/Education.css';
import '../../Css_Folder/Education1.css';
import edu1 from '../../image/edu1.jpeg'; // Assuming p27 image was missing, added this
import f1 from '../../image/f1.png';
import f2 from '../../image/f2.png';
import f3 from '../../image/f3.png';
import f4 from '../../image/f4.png';
import f6 from '../../image/f6.png';
import p26 from '../../image/p26.jpg';
import p27 from '../../image/p27.jpg';
import p49 from '../../image/p49.jpg';
const Education = () => {
  return (
    <>
      <div className="event-list-page">
        {/* Education Section */}
        <div className="edu-section">
          <img src={edu1} alt="Education Background" className="educationto-image" />
          <div className="edu-text">
            <div className="edu-title">Education</div>
            <div className="edu-subtitle">Bridging Dreams and Reality Through Learning</div>
          </div>
        </div>

        <div style={{ minHeight: '100vh' }}>
          <div style={{ paddingTop: '85px' }}>
            <h1 style={{ fontWeight: 'bold', color: '#354b5e', fontFamily: 'Varela Round, sans-serif', textAlign: 'center' }}>
              OUR EDUCATION
            </h1>
            <p style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px', lineHeight: '1.5', color: '#354b5e', fontFamily: 'Raleway, sans-serif', fontSize: '18px' }}>
              At SRPM, we believe that education is the foundation for building a better future. Our mission is to provide access to quality education for underprivileged children, ensuring they have the tools and opportunities to break the cycle of poverty.
            </p>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>


          {/* Cards Section */}
          <div style={{ paddingTop: '20px', paddingLeft: '6%', paddingRight: '10%' }}>
            <Card style={{ width: '100%', borderRadius: '5px' }} className="d-flex flex-row">
              <Card.Img variant="left" src={p26} style={{ width: '320px', height: '320px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#354b5e', fontSize: '22px' }}>Empowering Education</Card.Title>
                <Card.Text style={{ color: '#354b5e', fontSize: '16px' }}>
                  At SRPM NGO, we are dedicated to transforming lives through the power of education. Our mission is to provide high-quality educational opportunities to underprivileged children and adults, ensuring that everyone has the chance to achieve their full potential.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <br></br>
          <br></br>


          <div style={{ paddingTop: '40px', paddingLeft: '6%', paddingRight: '10%' }}>
            <Card style={{ width: '100%', borderRadius: '5px' }} className="d-flex flex-row-reverse">
              <Card.Img variant="right" src={p27} style={{ width: '320px', height: '320px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#354b5e', fontSize: '22px' }}>Empowering Education</Card.Title>
                <Card.Text style={{ color: '#354b5e', fontSize: '16px' }}>
                  At SRPM NGO, we are dedicated to transforming lives through the power of education. Our mission is to provide high-quality educational opportunities to underprivileged children and adults, ensuring that everyone has the chance to achieve their full potential.
                  Our educational programs are designed to address various needs and challenges. We focus on building foundational skills that are essential for personal and professional growth. Our curriculum includes basic literacy and numeracy, as well as critical thinking and problem-solving skills. These core competencies are vital for success in today’s rapidly evolving world.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>


          <div style={{ paddingTop: '40px', paddingLeft: '6%', paddingRight: '10%' }}>
            <Card style={{ width: '100%', borderRadius: '5px' }} className="d-flex flex-row">
              <Card.Img variant="left" src={p49} style={{ width: '320px', height: '320px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#354b5e', fontSize: '22px' }}>Empowering Education</Card.Title>
                <Card.Text style={{ color: '#354b5e', fontSize: '16px' }}>
                  At SRPM NGO, we are dedicated to transforming lives through the power of education. Our mission is to provide high-quality educational opportunities to underprivileged children and adults, ensuring that everyone has the chance to achieve their full potential.
                  Our educational programs are designed to address various needs and challenges. We focus on building foundational skills that are essential for personal and professional growth. Our curriculum includes basic literacy and numeracy, as well as critical thinking and problem-solving skills. These core competencies are vital for success in today’s rapidly evolving world.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

       </div>

       <br></br>
        <br></br>


          <div className="ngo-section">
      <div className="ngo-item">
        <img  src={f1} alt="Education" className="icon" />
        <h2 className="title education-title">Quality Education</h2>
        <p className="description">
        We aim to provide equitable access to quality education for underprivileged children
        </p>
      </div>
      <div className="ngo-item">
        <img  src={f2} alt="Healthcare" className="icon" />
        <h2 className="title healthcare-title">Holistic Child Development</h2>
        <p className="description">
        Our programs focus on the holistic development of children, combining academic learning with life skills
        </p>
      </div>
      <div className="ngo-item">
        <img  src={f3} alt="Women Empowerment" className="icon" />
        <h2 className="title women-empowerment-title">Digital Literacy</h2>
        <p className="description">
        Integrating technology in education, we aim to bridge the digital divide by  digital literacy programs
        </p>
      </div>
      <div className="ngo-item">
        <img  src={f4} alt="Livelihood" className="icon" />
        <h2 className="title live-title"> Inclusive Education</h2>
        <p className="description">
        We are committed to fostering an inclusive learning environment that supports children from diverse backgrounds
        </p>
      </div>
      <div className="ngo-item">
        <img src={f6}  alt="Empowering Grassroots" className="icon" />
        <h2 className="title empowering-grassroots-title">Community Engagement
        </h2>
        <p className="description">
        By engaging parents and the local community, we create a supportive ecosystem that values education 
        </p>
      </div>
      <div className="ngo-item">
        <img src={f6} alt="Disaster Response" className="icon" />
        <h2 className="title disaster-response-title">Empowering Teachers
        </h2>
        <p className="description">
         
        We invest in the training and development of teachers to enhance their teaching methodologies
        </p>
      </div>
    </div>






    <br></br>
        <br></br>
        <br></br>
     

        {/* Media queries to handle responsiveness */}
        <style>
          {`
          @media (max-width: 768px) {
            .d-flex {
              flex-direction: row; /* Maintain row layout */
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap; /* Allow items to wrap */
            }

              .card-img-left,
              .card-img-right {
                width: 100%;
                height: auto;
                max-width: 100%;
                margin-bottom: 15px;
              }

              .card-body {
                text-align: center;
              }

              .edu-text {
                text-align: center;
                margin-top: 20px;
              }

              .edu-title {
                font-size: 28px;
              }

              .edu-subtitle {
                font-size: 16px;
              }
            }

            @media (max-width: 576px) {
              .edu-title {
                font-size: 24px;
              }

              .edu-subtitle {
                font-size: 14px;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Education;