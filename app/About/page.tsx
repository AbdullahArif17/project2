import Link from 'next/link';
import styles from './About.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <h1>About Us</h1>
      <Image src={'/file.svg'} alt={'file'} width={400} height={400}></Image>
      <p>This is a simple website built with Next.js and React.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default About;
