import { useState } from "react";

function Manage() {

  // const [data, setData] = useState([]);
  const [products, setProducts] = useState({name: '', email: '', mobile:'', age:''});
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

let name, value;

function read(e){
  name = e.target.name;
  value = e.target.value;
  setProducts({...products,[name]: value })
  console.log(products);
  }

  function addProduct(){
    
    fetch('http://127.0.0.1:8000/',
			{
				method : 'POST',
				body : JSON.stringify(products),  
				headers : {
					"Content-Type" : "application/json"
				}
			})
			.then(response=>response.json())
			.then(data=>{
				setResponse(data)
			})
			.catch(err=>{
				setError(err)
			})
  }

  
  
  return (
  <div className="container">
    {response != null ? (<div className="alert alert-primary" role="alert">Added</div>) : null}
    <div className="container add-form">
      <h2 className="heading m-4 text-center fw-bold">Add Product here</h2>
      <div className="row">
        <div className="mb-2 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
            NAME
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the name"
            onChange={(e)=>{read(e)}}
          />
        </div>
        <div className="mb-2 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
            onChange={(e)=>read(e)}
          />
        </div>
        <div className="mb-2 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
            Mobile
          </label>
          <input
            type="number"
            name="mobile"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Mobile"
            onChange={(e)=>read(e)}
          />
        </div>
        <div className="mb-2 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Age"
            onChange={(e)=>read(e)}
          />
        </div>
      </div>
      <button
        className="btn btn-primary d-block"
        onClick={addProduct}
      >Add Now!!!
      </button>
    </div>
    </div>);}

    

export default Manage;

