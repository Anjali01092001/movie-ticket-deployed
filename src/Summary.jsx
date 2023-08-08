import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Summary = () => {
    const { id } = useParams();

    const [show, setShow] = useState({});
    useEffect(() => {
        const shows = JSON.parse(localStorage.getItem("shows"));
        const show = shows.find(data => data.show.id == id);
        setShow(show);
    }, []);
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="row g-5">
                        <div className="col-4">
                            <img className="img-fluid w-100" src={show?.show?.image.medium} alt="/" /><br />
                            <h3 className="my-3">{show.show?.name}</h3>
                            <Link to={`/book/${show?.show?.id}`}><button className="btn btn-success w-100">Book a movie ticket</button></Link>
                        </div>
                        <div className="col-8">
                            <h3>Show Summary</h3>
                            {show?.show?.summary}
                            <div className="my-3">
                                <span class="badge text-bg-success me-3">{show.show?.schedule.time}</span>
                                <span class="badge text-bg-success">{show.show?.rating.average}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Summary;