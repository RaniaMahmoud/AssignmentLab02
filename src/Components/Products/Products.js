import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInst from "../../axios/Axios";

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => { 
        axiosInst.get("products")
        .then((result) => {
            console.log(result.data);
            setItems(result.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 ms-5">
                {items.map((item) => {
                    console.log(item);
                    return (
                        <div className="col" key={item.id}>
                            <div className="card card h-100">
                                <img src={item.image} style={{ height: "500px"}} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a href={`details/${item.id}`} className="btn btn-dark">Details</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Items;