
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInst from "../../axios/Axios";
import '../ProductsDetails/Details.css';

const Details=(props) =>{

    const params = useParams();
    // console.log(params);
    const [item, setItem] = useState({});

    useEffect(() => {
        axiosInst
            .get(`products/${params.id}`)
            // fetch(`https://api.themoviedb.org/3/movie/338953?api_key=${ApIKey}`)
            .then((result) => {
                console.log(result.data);
                setItem(result.data);
            }).catch((error) => {
                console.log("sdf");
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="card border-info card mb-3 mt-5 ms-5 cardWidth">
            <div className="card-header text-center"><h2 className="card-title">{item.title}</h2></div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            
                            <h5 className="card-title mt-4">{item.title}</h5>
                            <p className="card-text mt-5">{item.description}</p>
                            {/* <h5 className="mt-4">Budget {item.budget}$</h5> 
                            <h5 className="mt-4">status {item.status}</h5> */}
                            <div className="card-header mt-5">
                                <h5>Details</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className="fs-5 fw-bold">Price:</span> <span className="fs-4 fst-italic">{item.price}$</span></li>                                
                                {/* {item.production_companies.map((comp) => {
                                    console.log(comp);
                                    return(
                                        <>
                                            <li class="list-group-item">{comp.name}</li>
                                        </>
                                    )
                                })} */}
                            </ul>
                            {/* <p className="card-text">Release Date <small className="text-muted">{item.release_date}</small></p> */}
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-end me-5 mt-5 pb-5">
                <a href="/" className="btn btn-dark btn-lg me-5">Products</a>
            </div>
        </>

    );
}
export default Details;