import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewsFetch(props) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataMap, setDataMap] = useState([]);
  // eslint-disable-next-line react/prop-types
  const country = props.country;
  // eslint-disable-next-line react/prop-types
  const infoSection = props.section;

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);


  useEffect(() => {
    if (data) {
      const mappedData = data.map(obj => ({
        prop1: getProp1(obj, country),
        prop2: JSON.stringify(obj.title),
        prop3: obj.url
      }));
      setDataMap(mappedData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const apiKey = 'apiKey=ac8c157a8e134cb9bddac2bdda438e2a';
  const apiCall = `https://newsapi.org/v2/top-headlines?country=${country}&category=${infoSection}&${apiKey}`;

  console.log(apiCall)

  const fetchData = () => {
    axios.get(apiCall)
      .then(res => {
        setData(res.data.articles);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };

  const getProp1 = (obj, selectedCountry) => {
    if (selectedCountry === 'us' || selectedCountry === 'ua' || selectedCountry === 'in' || selectedCountry === 'nl') {
      return JSON.stringify(obj.source.name);
    } else {
      return JSON.stringify(obj.author);
    }
  };

  const handleClick = (event, index) => {
    event.preventDefault();
    const clickedData = dataMap[index];
    window.open(clickedData.prop3);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

    return (
      <div>
      {dataMap.map((value, index) => (
        <div key={index}>
          <div className='pb-2 break-words px-6'>
            <strong>{value.prop1}</strong>
          </div>
          <div className='pb-10 break-words px-6 cursor-pointer'>
            <div onClick={(event) => handleClick(event, index)}>{value.prop2}</div>
          </div>
        </div>
      ))}
    </div>
    );
  }
