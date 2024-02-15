import './App.css';
import Education from './Component/Education';
import PersonalInfo from './Component/PersonalInfo';
import Skills from './Component/Skill';
import Workexp from './Component/Workexp';
import { Route, Routes } from 'react-router-dom';
import Preview from './pages/Previewpage/Preview';
import Detailfilling from './pages/Detailfillingpage/Detailfilling';
import { Toaster } from 'react-hot-toast';
import Saveresume from './Component/Saveresume';
import Aboutus from './pages/Aboutuspage/Aboutus';
import Homepage from './pages/Homepage/Homepage';



function App() {
  return (

    <>

      {/* for success or error massage */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />


      {/* for routing */}
      <Routes>
        <Route path="/Detailfilling" element={<Detailfilling />} />
        <Route exact path="/personal" element={<PersonalInfo />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path='/work' element={<Workexp />} />
        <Route exact path='/myresume' element={<Saveresume />} />
        <Route exact path='/skills' element={<Skills />} />
        <Route exact path='/preview' element={<Preview />} />
      </Routes>

    </>

  );
}

export default App;
