import img1 from '../../img/Horizontal6.jpg'
import img2 from '../../img/Horizontal2.jpg'
import img3 from '../../img/Horizontal3.jpg'
import img4 from '../../img/Horizontal4.jpg'
import img5 from '../../img/Horizontal5.jpg'

const Carrousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        data-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img4} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img5} alt="Fifth slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carrousel;