import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const API = "https://api.tvmaze.com/search/shows?q=all";

const ShowListing = () => {
    const [empData, setempData] = useState(0);
    useEffect(() => {
        fetch(API).then((res) => {
            return res.json();
        }).then((resp) => {
            setempData(resp);
            localStorage.setItem("shows", JSON.stringify(resp));
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <>
            <div className="row my-5">
                <h2 className="text-center mb-3">Shows Listing</h2>
                <div className="shows">
                    {empData &&
                        empData.map(currentData => (
                            <div key={currentData.id}>
                                <div className="container">
                                    <div className="card me-4 mb-4">
                                        {/* <img src={currentData.show.image.medium} className="card-img-top" alt="/" /> */}
                                        <div class="card-body">
                                            <div className="title">
                                                <h5 class="card-title">{currentData.show.name}</h5>                                            
                                                <h6><span class="fa fa-star checked"></span>{currentData.show.rating.average} </h6>
                                            </div>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{currentData.show.id}</li>
                                            <li class="list-group-item">{currentData.show.status}</li>
                                        </ul>
                                        <div class="card-body">
                                            <Link to={`/summary/${currentData.show.id}`}><button type="button" className="btn btn-sm btn-success w-100">View Summary</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ShowListing;
