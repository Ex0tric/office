import {useState, useEffect } from "react";
// import "./style1.css"
import "./Page.css";

function Page() {

  const [data, setData] = useState(null);
  const [error, setError] = useState('Error Occured');

  // useEffect(() => {

  //   // let URL = "https://jsonplaceholder.typicode.com/posts";
  //   let URL = "http://192.168.0.162:8000/locationid/1";
  //   fetch(URL)
  //     .then(response =>response.json())
  //     .then(raw => {console.log(raw.records[0]); return setData(raw);})  
  //     .catch(err=> setError(err))
  //   },[]); 

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://192.168.0.162:8000/locationid/1');
        const data = await response.json();
        const users = data.records[0]
        setData(users);
      }
      fetchData();
    }, []);

    if(data){console.log(data.phones[0].number.number)}

    return(
      <>
      { data ? 
        <div className="wrapper">
          <div className="location-details mb-4">
            <iframe title="myFrame"
                src={`https://maps.google.com/maps?q=${data.geoData.displayLatitude},${data.geoData.displayLongitude}&amp;hl=es;z=14&amp;&output=embed`}
                width="100%" height="400"></iframe>
          </div>
          <div className="container">
              <div className="row">
                    <div className="col-12">
                        <div className="popUpsInheader">
                            <a className="blueBtn" type="button" style={{textDecoration: "none"}} data-bs-toggle="modal" data-bs-target="#emailModal">Email Us</a>
                            <a className="blueBtn" type="button" style={{textDecoration: "none"}} data-bs-toggle="modal" data-bs-target="#phoneModal">Phone Number</a>
                            <a className="blueBtn" type="button" style={{textDecoration: "none"}} data-bs-toggle="modal" data-bs-target="#hoursModal">Working Hours</a>
                            </div>
                    </div>
                    
                    <div className="col-12 col-lg-8">
                        <h1 className="listing-title"><span className="yext-name">{data.name}</span> <span
                                className="established text-muted small">({data.yearEstablished})</span>
                        </h1>
                        <div className="headerAddress">
                            <div className="main-address">
                                Address: <span className="yext-address">{data.address.address},</span>
                                <span className="yext-city">{data.address.city}, </span>
                                <span className="yext-state">{data.address.state} ,</span>
                                <span className="yext-postalCode">{data.address.postalCode}, </span>
                                <span className="yext-country">{data.address.countryCode}</span>
                            </div>
                        </div>
                        <div className="keyword-section categories-section section">
                            <ul style={{ listStyleType: 'none', display: 'flex', paddingLeft:'0'}}>
                                { 
                                  data.categories.map((cat, index)=>{
                                    return(
                                      <li className="keywords" key={index}><a href="#">{cat.name}/</a></li>
                                    )
                                  })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="rating-section" style={{color:"#000", fontSize:"25px"}}><i className="fa fa-star"
                                aria-hidden="true"></i> <span className="rating_obtainer">{data.rating}</span>/5 <span
                                className="total-rating">({data.total_reviews})</span></div>
                      <div className="submit-review"><a href="#submitReview">Submit Review</a></div>
                    </div>
              </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="description-section section">
                  <article id="module">
                      <p className="yext-description" id="collapseExample" aria-expanded="false">{data.description}</p>
                      <a role="button" className="collapsed" data-bs-toggle="collapse" href="#collapseExample"
                          aria-expanded="false" aria-controls="collapseExample"></a>
                  </article>
                </div>
                <div className="keyword-section specialities-section section border-2 border-bottom">
                  <article>
                      <h4>Specialities</h4>
                      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                      {
                        data.specialties.map((item, index)=>{
                        return(
                          <li key={index} className="keywords" style={{flex: '0 0 33.33%', listStyleType: 'none'}}>{item}</li>
                        )
                        })
                      }

                      </ul>
                  </article>
                </div>
                <div className="keyword-section brands-section section border-2 border-bottom" >
                        <article>
                            <h4>Brands</h4>
                            <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                                {
                                  data.brands.map((item, index)=>{
                                  return(
                                    <li key={index} className="keywords" style={{flex: '0 0 33.33%', listStyleType: 'none'}}>{item}</li>
                                  )
                                  })
                                }
                            </ul>
                    </article>
                    </div>
                    <div className="keyword-section products-section section border-2 border-bottom">
                        <article>
                            <h4>Products</h4>
                            <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                            {
                                  data.products.map((item, index)=>{
                                  return(
                                    <li key={index} className="keywords" style={{flex: '0 0 33.33%', listStyleType: 'none'}}>{item.productsName}</li>
                                  )
                                  })
                                }
                        </ul>
                    </article>
                    </div>
              </div>
            </div>
          </div>
            
          <div className="modal fade" id="emailModal" tabindex="-1" aria-labelledby="emailModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="emailModalLabel">Contact Us via Email</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="email modelBodySection">
                    {
                      data.emails.map((item, key)=>{
                        return(
                        <div key={key} className="email-address">{item.description}: <a href={`mailto:${item.address}`} className="yext-emails">{item.address}</a></div>
                        )
                      })
                    }
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="blueBtn" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="phoneModal" tabindex="-1" aria-labelledby="phoneModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="phoneModalLabel">Contact Us via Phone</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="number modelBodySection">
                    {
                      data.phones.map((item,key)=>{
                        return(
                        <div className="phone-number" key={key}>
                            {item.type} : <a type={item.type}
                                href={`tel:${item.number.countryCode}${item.number.number}`}>
                                {item.number.number}
                            </a>
                            <a className='d-none yext-phone ' type="main">
                                {item.number.number}
                            </a>
                        </div>
                        )
                      })
                    }
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="blueBtn" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

      

        </div>
          
          : null}
      </>
      )
  
}
export default Page;