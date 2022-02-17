import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Carouseles() {
  return (
    <>
      <Carousel className="justify-content-md-center">
        <Carousel.Item className="">
          <img
            className="w-100"
            src="https://cs8.pikabu.ru/post_img/big/2017/12/14/6/151324247811505263.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://cs5.pikabu.ru/post_img/big/2019/01/12/7/1547292284164625832.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://img3.akspic.ru/previews/5/7/9/0/20975/20975-derevo-gora-gornyj_hrebet-sneg-oblako-x750.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carouseles;
