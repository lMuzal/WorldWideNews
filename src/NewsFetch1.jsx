import { useState, useEffect } from "react";
import { axios } from "axios";

export default function NewsFetch1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
  }, []);
  
  const fetchData = () => {
      axios.get('https://newsapi.org/v2/top-headlines?country=pl&apiKey=ac8c157a8e134cb9bddac2bdda438e2a')
        .then(response =>{
          setData(response.json);
          console.log(data)
        })

  return(
    <div>
      {data}
    </div>
  )

  }
} 