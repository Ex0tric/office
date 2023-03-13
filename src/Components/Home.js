import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import { BsFillArrowRightCircleFill } from "react-icons/bs";


function Home() {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // let URL = "https://jsonplaceholder.typicode.com/posts";
    let URL = "http://127.0.0.1:/";

    fetch(URL)
      .then(response =>response.json())
      .then(raw => setData(raw.data))  
      .catch(err=> setError(err))
  },[]);

  return (
    <div className="container">
      {
        data.map((item, index)=>{

          let {name, mobile, age, email} = item;

          return(
            <div className="card text-bg-dark mb-3" key={index}>
              <div className="card-header">{name}</div>
              <div className="card-body">
                <h5 className="card-title">E-mail: {email}</h5>
                <h5 className="card-title">Age: {age}</h5>
                <h5 className="card-title">Mobile: {mobile}</h5>
              </div>
            </div>
            )
          })
        }
    </div>
  );
}
export default Home;
