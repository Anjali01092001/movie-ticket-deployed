import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookShow = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState({});
    useEffect(() => {
        const shows = JSON.parse(localStorage.getItem("shows"));
        const show = shows.find(data => data.show.id == id);
        setShow(show);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Show booked Successfully");
        navigate("/");
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <div className="row g-4 my-5">
                        <h2 className="text-center">Book Show</h2>
                        <div className="col-4 offset-4">
                            <div class="card">
                                <img src={show.show?.image.medium} class="card-img-top" alt="..." />
                                <div class="card-body" >
                                    <h5 class="card-title">{show.show?.name}</h5>
                                    <p class="card-text">{show.show?.schedule.time}</p>
                                    <input type="text" className="form-control mb-3" placeholder="Enter your name" />
                                    <input type="submit" class="btn btn-success w-100" value={"Book Now"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default BookShow;