import React from "react";
import Logo from "../Images/Logo.png";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutContent}>
            <h2>About Zigma</h2>
            <p>
              At Zigma Bank, we pride ourselves on being a leading provider of
              comprehensive banking services, delivering excellence across India
              and beyond. With a firm commitment to innovation, customer
              satisfaction, and community development, we are dedicated to meeting
              the diverse financial needs of individuals and businesses on a
              global scale.
            </p>
            <p>
              Our Vision Our vision is to be a global banking leader, renowned for
              our integrity, innovation, and unwavering commitment to our
              customers. We strive to create lasting value and financial security
              for our clients, employees, and stakeholders through superior
              service and sustainable practices.
            </p>
            <p>
              Our Mission Our mission is to empower our customers by providing
              secure, reliable, and innovative banking solutions. We aim to
              support personal and business growth through a comprehensive range
              of financial products and services tailored to meet the unique needs
              of each customer.
            </p>
        </div>
      </div>
      <div className={styles.aboutRight}>
        <img src={Logo} alt="Zigma Logo" />
      </div>
    </div>
  );
}
