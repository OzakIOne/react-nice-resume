import Head from 'next/head';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Portfolio from '../components/Portfolio/Portfolio';
import Resume from '../components/Resume/Resume';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Niagamix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        name={props.main.name}
        description={props.main.description}
        github={props.main.github}
        project={props.main.project}
      />
      <About
        name={props.main.name}
        bio={props.main.bio}
        street={props.main.address.street}
        city={props.main.address.city}
        state={props.main.address.state}
        zip={props.main.address.zip}
        phone={props.main.phone}
        email={props.main.email}
        resumeDownload={props.main.resumedownload}
      />
      <Resume
        skillmessage={props.resume.skillmessage}
        education={props.resume.education}
        work={props.resume.work}
        skills={props.resume.skills}
      />
      <Portfolio projects={props.portfolio.projects} />
      <Contact
        name={props.main.name}
        message={props.main.contactmessage}
        street={props.main.address.street}
        city={props.main.address.city}
        state={props.main.address.state}
        zip={props.main.address.zip}
        phone={props.main.phone}
      />
      <Footer author={props.main.name} networks={props.main.social} />
    </>
  );
}

export async function getStaticProps() {
  const dataDir = join(process.cwd(), 'data/data.json');
  const data = JSON.parse(readFileSync(dataDir, { encoding: 'utf-8' }));
  return {
    props: {
      ...data,
    },
  };
}
