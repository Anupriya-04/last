import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../Css_Folder/Footer.css';

const Fotter = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6" style={{ display: 'flex' }}>
                <div></div>
                <div>
                  <h5>
                    <img
                      src="/SRPMLOGO.png"
                      alt="SRPM Logo"
                      height="30px"
                      style={{ borderRadius: '100%', marginRight: '8px' }}
                    />
                    SRPM
                  </h5>

                  <p className="text-justify">
                    SRPM wants that no one will be illiterate, everyone should know the rights of education. They should be able to earn for their livelihood. The government is doing a good job for them, so people should be aware of that. SRPM wants that, no one will be illiterate, everyone should know the rights of education. They should be able to earn for their livelihood.
                  </p>
                </div>
              </div>

              <div className="col-xs-6 col-md-3"></div>

              <div className="col-xs-6 col-md-3">
                <h6>Links</h6>
                <ul className="footer-links">
                  <li>
                    <Link className="footer-link-button" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link-button" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link-button" to="/education">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link-button" to="/awarecamp">
                      Awareness
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link-button" to="/finishedWork">
                      Finished Work
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; 2024 All Rights Reserved by{' '}
                  <Link className="footer-link-button" to="/">
                    SRPM
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Fotter;
