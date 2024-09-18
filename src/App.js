
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutus from './component/About/Aboutus'
import Awareness from './component/Awareness/Awareness';
import Contactus from './component/Contact/Contactus';
import Finished_work from './component/Finished/Finished_work';
import Fotter from './component/Footer/Footer';
import Home2 from './component/Home/Home';
import Navbarr from './component/Navbaar/Navbaar';
import Student_Attendence from './component/Student/Student_Attendence';
import AwarenessCamp from './component/Work/AwarenessCamp';
import Education from './component/Work/Education';
import Environment from './component/Work/Environment';
import Healthcare from './component/Work/Healthcare';
import Livelihood from './component/Work/Livelihood';
import Women from './component/Work/Women';
import People_behind from './component/About/People_behind';

function App() {
  return (
    <>
      <Router>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/education" element={< Education />} />
          <Route path="/student" element={<Student_Attendence />} />
          <Route path="/finishedWork" element={<Finished_work />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/livelihood" element={<Livelihood />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/women" element={<Women />} />
          <Route path="/awarecamp" element={<AwarenessCamp />} />
          <Route path="/environment" element={<Environment />} />
          <Route path='/people' element={<People_behind />} />
        </Routes>
        <Fotter />
      </Router>
    </>
  );
}

export default App;
