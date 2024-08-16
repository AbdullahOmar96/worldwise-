
/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css"

export default function CityItem ({city, key}){


    const formatDate = (date) => 
        new Intl.DateTimeFormat("en",
            {
                // weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            ).format(new Date(date))
        
        // const options = { weekday: 'long', year: 'numeric', month: 'long' };
        // return new Date(date).toLocaleDateString('en-US', options);
    
    

    const { cityName 
        , date 
        , emoji
    } = city;  
    return (<li className={styles.cityItem} key={key}>
        <span className={styles.emoji} >
        {emoji}
        </span>
        <h3 className={styles.name}>
            {cityName}
        </h3>
        <line className={styles.date}>
            {formatDate(date)}

        </line>
        <button className={styles.deleteBtn}>
            &times;
        </button>
        
        

    </li>
    )
  }
//   .cityItem,
// .cityItem:link,
// .cityItem:visited {
//   display: flex;
//   gap: 1.6rem;
//   align-items: center;

//   background-color: var(--color-dark--2);
//   border-radius: 7px;
//   padding: 1rem 2rem;
//   border-left: 5px solid var(--color-brand--2);
//   cursor: pointer;

//   color: inherit;
//   text-decoration: none;
// }

// .cityItem--active {
//   border: 2px solid var(--color-brand--2);
//   border-left: 5px solid var(--color-brand--2);
// }

// .emoji {
//   font-size: 2.6rem;
//   line-height: 1;
// }

// .name {
//   font-size: 1.7rem;
//   font-weight: 600;
//   margin-right: auto;
// }

// .date {
//   font-size: 1.5rem;
// }

// .deleteBtn {
//   height: 2rem;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   border: none;
//   background-color: var(--color-dark--1);
//   color: var(--color-light--2);
//   font-size: 1.6rem;
//   font-weight: 400;
//   cursor: pointer;
//   transition: all 0.2s;
// }

// .deleteBtn:hover {
//   background-color: var(--color-brand--1);
//   color: var(--color-dark--1);
// }
