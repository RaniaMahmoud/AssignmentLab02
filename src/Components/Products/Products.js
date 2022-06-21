import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axiosInst from "../../axios/Axios";

const Items = () => {
    const [items, setItems] = useState([]);

    //const Loading= useSelector((state)=>state.loading.isLoad)

    useEffect(() => { 
         axiosInst.get("products")
        //fetch("https://fakestoreapi.com/products")
        //get("products")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 ms-5">
            {/* {Loading&& 
            <div className="d-flex justify-content-center">
                <div className="spinner-border " role="status"></div>
            </div>} */}
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