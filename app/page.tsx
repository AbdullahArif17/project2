import Link from 'next/link';
import styles from './Home.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <h1>Welcome to My Website</h1>
      <Image src={'/next.svg'} alt={'next'} width={400} height={400}></Image>
      <nav>
        <ul>
          <li><Link href="/About">About Us</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
