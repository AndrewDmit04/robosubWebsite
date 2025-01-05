
import Welcome from '@/app/(pages)/(home)/components/welcome';
import AboutRoboSub from '@/app/(pages)/(home)/components/about';
import DepthSection from '@/app/(pages)/(home)/components/depthSection';
import DepartmentsSection from './components/DepartmentsSection';
function HomePage() {
  return (
    <div>   
        <DepthSection/>
        <Welcome />
        <AboutRoboSub />
        <DepartmentsSection/>        
    </div>
  );
}

export default HomePage;
