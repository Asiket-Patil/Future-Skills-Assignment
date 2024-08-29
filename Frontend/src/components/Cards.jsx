import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Title from './Title'; 

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  console.log(cardsData);


  const fetchcards = (searchTerm = '') => {

    const apiUrl = searchTerm
      ? `http://localhost:5000/cards?search=${searchTerm}` 
      : 'http://localhost:5000/cards';

    axios.get(apiUrl)
      .then(response => {
        setCardsData(response.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  };

 
  useEffect(() => {
    fetchcards();
  }, []);

 
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); 
    fetchcards(searchTerm); // 
  };


  const filteredCards = cardsData.filter((item) => {
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    return title.includes(searchTermLower) || description.includes(searchTermLower);
  });

  return (
    <>
      <Title onSearch={handleSearch} />
      <div className="content">
        {filteredCards.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;