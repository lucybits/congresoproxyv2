import ProxieChat from '../../components/proxiechat/ProxieChat';
import Banner from './components/banner/Banner';
import AboutUs from './components/aboutus/AboutUs';
import Trusters from './components/trusters/Trusters';
import Overview from './components/overview/Overview';
import Details from './components/details/Details';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <AboutUs />
      <ProxieChat />
      <Trusters />
      <Overview />
      <Details />
    </div>
  );
};

export default Home;
