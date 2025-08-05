import styles from './Netflix.module.css'
import styled from "styled-components"

export const List = ({ data}) => {
  if (!data) {
    return <li>Error: Missing data</li>; // Display error only once
  }

  const { id, img_url, name, description, watch_url,rating } = data;

  // const buttonStyle = {};
  const Buttonnakul = styled.button({
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating<=8.4? "green":"black"}`,
    color: "white"
  })
    
  // templete literals in jsx
  const Nametag= styled.h2`
   margin: 0;
    font-size: 1.5rem;
    color: red;
  `
  
const ratingclass = rating>= 8.4? "super_hit":"average"
  return (
    <div className={styles.card}>
      <li key={id} className={styles["card-content"]}>
        <img src={img_url} alt={name}className={styles["card-image"]} />
        <p>  <span className={`border ${ratingclass}`}> {rating} </span></p>
        {/* <h2 className={styles["card-title"]}>{name}</h2> */}
        <Nametag>{name}</Nametag>
        {/* <p className={styles["card-description"]}>{description}</p> */}
        <p className="m-0 text-black text-2xl underline">{description}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          {/* <button className={styles["card-button"]} style={buttonStyle}>Watch Now</button> */}
          <Buttonnakul>Watch Now</Buttonnakul>
        </a>
      </li>
    </div>
  );
};