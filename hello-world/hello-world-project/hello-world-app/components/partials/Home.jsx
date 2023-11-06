import containerStyles from '../../styles/global/container.module.css';
// import DevHeading from '../modules/DevHeading';
import Layout from '../Layout.jsx';

function Home() {
  return (
    <Layout>
      <div className={containerStyles.container}>
        <h1>HOME PAGE (partial)</h1>
        {/* <DevHeading /> */}
      </div>
    </Layout>
  );
}

export default Home;
