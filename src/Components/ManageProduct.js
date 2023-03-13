import { useEffect, useState } from "react";

function Manage(){

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let URL = "http://127.0.0.1:8000/";

  fetch(URL)
    .then((response) => response.json())
    .then((raw) => setData(raw.data))
    .catch((err) => {
      setError(err);
      console.log(error);
    });
  });

  // updateProduct(index, id){

  //   fetch('http://localhost:8000/product?id='+id,
  //   {
  //     method : 'PUT',body : JSON.stringify(current), headers : { 'Content-Type' : 'application/json'}
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })

  // }

  return (
    <div className="container mt-4">
        <table className="table table-success table-striped-columns ">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th> 
              <th>E-Mail</th>
              <th>Mobile</th>
              <th>Age</th>
              <th className="w-25 text-center">Operation</th>
            </tr>
          </thead>
          <tbody>
            {
            data.map((item, index)=>{
              return(
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.age}</td>
                <td className="d-flex justify-content-center">
                <button className="btn btn-primary me-2">Update</button>
                <button className="btn btn-danger">Delete</button>
                </td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>)
}

export default Manage;