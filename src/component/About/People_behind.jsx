import React from 'react';
import '../../Css_Folder/PeopleBehindSmile.css'; // Import custom CSS for styling

const people = [
  {
    name: 'MR OMVEER SINGH ',
    title: 'Founder & CEO',
    description: `Mr Omveer Singh Meena is a graduate from Barkatullah University. After an illustrious career in media, spending 10 years handling various positions, he started his own computer center in Mandideep, Raisen (M.P), and has been working with private and government skill development schemes since then. 
In 2012, Mr. Meena joined hands with some of his friends to set up SRPM Aspire Education and Welfare Society and is currently working as the President of the society.`
  },
  {
    name: 'MR ROHIT SINGH BISHT',
    //title: 'Project Manager',
    description: 'Mr Rohit Singh Bisht is M.B.A, m.p master trainer and a research analysist. Mr Rohit specialized in consulting, project handling, project making, Investing. He is associated with various social cause aimed at bridging the gap or disparity in the society through various initiatives on education, healthcare, livelihood and capacity building since 2016. ',
  },
  {
    name: 'MR MANOHAR LOVANSHI',
    //title: 'Head of Communications',
    description: 'A Master in Business Administration From Bhopal. He handles all financial Budget inflow/outflow of project budget.',
  },
  {
    name: 'MR SANJAY SHUKLA',
    //title: 'Volunteer Coordinator',
    description: 'A Lic agent by profession, he does financial support and investment strategy.',
  },
];

const PeopleBehind = () => {
  return (
    <div className="new-people-container">
      <header className="new-people-header">
        <h1>People Behind the Smile</h1>
        <p>Meet the passionate team making a difference every day!</p>
      </header>

      <div className="new-people-grid">
        {people.map((person, index) => (
          <div className="new-person-card" key={index}>
            <div className="new-person-content">
              <h3 className="new-person-name">{person.name}</h3>
              <h4 className="new-person-title">{person.title}</h4>
              <p className="new-person-description">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleBehind;
