import foto1 from '../../img/foto1.jpg';
import foto2 from '../../img/foto2.jpg';
import foto3 from '../../img/foto3.jpg';
import foto4 from '../../img/foto4.jpg';
import foto7 from '../../img/foto7.jpg';

const Galeria = () => {


  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={foto1} alt="First slide" style={{ maxWidth: '80%', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={foto2} alt="Second slide" style={{ maxWidth: '80%', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={foto4} alt="Third slide" style={{ maxWidth: '80%', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={foto7} alt="Third slide" style={{ maxWidth: '80%', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={foto3} alt="Third slide" style={{ maxWidth: '80%', margin: '0 auto' }} />
        </div>
      </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
);

};

export default Galeria;