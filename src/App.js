import './App.css';
import AboutMe from './portfolioContainer/aboutMe/AboutMe';
import Home from './portfolioContainer/home/Home';
import ResumeMe from './portfolioContainer/resume/ResumeMe';

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <ResumeMe/>
     </div>
  );
}

export default App;
