import React, { useEffect, useState } from 'react'
import "./Homesection2.scss"


function Homesection2() {
    const [films, setFilms] = useState([]);

  useEffect(() => {
      
      const fetchFilms = async () => {
        try {
          const response = await fetch("http://localhost:3100/film10"); // Express sunucusundan filmleri getir
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setFilms(data);
        } catch (error) {
          console.error('Error fetching films:', error);
        }
      };
      
      fetchFilms();
    }, []);
    
  return (
    <>
    <section className='Homesection2'>
    <div className='Homesection2_container'>
      <h1 className='Homesection2_h1'>Top Movies</h1>
      <div className='Homesection2_div'>

        {films.map((film) => (
            <>
            <div className='Homesection2_div_card' key={film._id}>
                <img className='Homesection2_div_card_img' src={film.imgUrl}alt="" />
                <div className='Homesection2_div_card_div'>{film.name}</div>
            </div>
            </>
        
        ))}
      </div>
     
    
    </div>
    </section>
    </>
  )
}

export default Homesection2