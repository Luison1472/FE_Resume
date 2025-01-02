import '../index.css';
import Profile from '/src/pages/Profile.jsx';
import Project from '/src/pages/Project.jsx';
import Footer from '/src/components/Layouts/Footer.jsx';
import ScrollProgress from '/src/components/Layouts/ScrollProgress.jsx';
function Portfolio() {
  return (
    <>

      <ScrollProgress/>
      <Profile />
      <div className="border-t-2  border-gray-500 my-6"></div>
      <Project />
      <div className="border-t-2  border-gray-500 my-6"></div>
      <Footer/>
    </>
  );
}

export default Portfolio;