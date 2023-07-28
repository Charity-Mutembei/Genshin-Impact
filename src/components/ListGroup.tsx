import Genshin from "../assets/genshin-1.png";
import Genshin2 from "../assets/genshin-2.png";
import LastOfUs from "../assets/last-of-us.png";
import LastOfUs2 from "../assets/last-of-us-2.png";
import style from "./ListGroup.module.css";

function ListGroup() {
  return (
    <>
      <div className={style.body}>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Genshin} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Genshin2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Genshin} className="d-block w-100" alt="..." />
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
          {/* <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
    </>
  );
}
export default ListGroup;
