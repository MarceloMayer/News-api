import { useEffect, useState } from 'react'
import axios from "axios";
//const axios = require("axios");

const News = () => {
  const [articles, setArticles] = useState(null)
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://ms-finance.p.rapidapi.com/news/list',
      params: {performanceId: '0P0000OQN8'},
      headers: {
        'X-RapidAPI-Key': 'ec18ffc523mshbff8782293dd0f6p152bf0jsn380aed11ff5c',
        'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      
      setArticles(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  },[])
  /*articles é um array c/ os objetos(notícias)
  reduzindo o numero de elementos no array articles e formando o articles2
  com o método slice(iniciar na posição, qtd de itens)*/


  const articles2 = articles?.slice(0,5)
  console.log(articles)
  //caso n use a "?", não funciona a linha acima 
  return (
    <div>
      <h1 id='title'>News <i class="bi bi-newspaper"></i> </h1>
      {articles2?.map((notice,_index )=>(
          <div key={_index}>
          <p id='news'>{notice.title}</p>
          </div>
        )
      )}
    </div>
  )

}




export default News


