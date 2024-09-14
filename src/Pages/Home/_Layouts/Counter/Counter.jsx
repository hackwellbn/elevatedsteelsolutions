import React, { useEffect, useState } from "react";

const Counter = () => {
  const [companies, setCompanies] = useState(0);
  const [individuals, setIndividuals] = useState(0);
  const [partners, setPartners] = useState(0);

  useEffect(() => {
    // Target numbers
    const totalCompanies = 100;
    const totalIndividuals = 300;
    const totalPartners = 50;
    
    // Duration for the animation (3 seconds)
    const duration = 30000;
    
    // Calculate interval time
    const intervalTime = 300; // Updates every 30ms for smooth animation
    const incrementCompanies = totalCompanies / (duration / intervalTime);
    const incrementIndividuals = totalIndividuals / (duration / intervalTime);
    const incrementPartners = totalPartners / (duration / intervalTime);
    
    // Set intervals for each counter
    const companyInterval = setInterval(() => {
      setCompanies((prev) => {
        const newValue = prev + incrementCompanies;
        return newValue < totalCompanies ? newValue : totalCompanies;
      });
    }, intervalTime);

    const individualInterval = setInterval(() => {
      setIndividuals((prev) => {
        const newValue = prev + incrementIndividuals;
        return newValue < totalIndividuals ? newValue : totalIndividuals;
      });
    }, intervalTime);

    const partnerInterval = setInterval(() => {
      setPartners((prev) => {
        const newValue = prev + incrementPartners;
        return newValue < totalPartners ? newValue : totalPartners;
      });
    }, intervalTime);
    
    // Clear intervals after 3 seconds
    setTimeout(() => {
      clearInterval(companyInterval);
      clearInterval(individualInterval);
      clearInterval(partnerInterval);
    }, duration);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.counterBox}>
        <h2>{Math.floor(companies)}K</h2>
        <p>Companies Worked With</p>
      </div>
      <div style={styles.counterBox}>
        <h2>{Math.floor(individuals)}K</h2>
        <p>Individuals Served</p>
      </div>
      <div style={styles.counterBox}>
        <h2>{Math.floor(partners)}K</h2>
        <p>Partners Engaged</p>
      </div>
    </div>
  );
};

export default Counter;

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    margin: "0 auto",
    color: "white",
  },
  counterBox: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "30px",
  },
};
