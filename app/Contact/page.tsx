import Link from 'next/link';
import styles from './Contact.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <h1>Contact Us</h1>
      <Image src={'/globe.svg'} alt={'globe'} width={400} height={400}></Image>
      <p>Feel free to reach out to us!</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default Contact;
