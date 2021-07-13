import React from 'react';

const Home=({item})=>{
console.log(item);
  return(
    <>
     <p>sports id : {item.idSport}</p>
     <p>sports name: {item.strSport}</p>
     <p><strong>sports description</strong> : {item.strSportDescription}</p>
     <p><img src={item.strSportThumbGreen} alt=''/></p>
    </>
  )
}
export default Home;
