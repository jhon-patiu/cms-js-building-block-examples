import containerStyles from '../../styles/global/container.module.css';
// import { Component as SectionHeading } from '../modules/SectionHeading';
import Layout from '../Layout.jsx';

function Home() {
  return (
    <Layout>
      <div className={containerStyles.container}>
        <h1>HOME PAGE (partial)</h1>
        {/* <SectionHeading /> */}
      </div>
    </Layout>
  );
}

export default Home;
