import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselProps: React.FC = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <div
        className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover flickity-cell is-selected"
        style={{
          backgroundImage: "url(assets/img/covers/cover-1.jpg)",
          transform: "translateX(300%)",
        }}
      >
        <div
          className="card bg-dark-5 bg-hover text-white text-center"
          style={{
              minHeight: '470px'
          }}
        >
          <div className="card-body mt-auto mb-n11 py-8">
            <h1 className="mb-0 fw-bolder">Women</h1>
          </div>
          <div className="card-body mt-auto py-8">
            <a className="btn btn-white stretched-link" href="shop.html">
              Shop Women <i className="fe fe-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover flickity-cell is-selected"
        style={{
          backgroundImage: "url(assets/img/covers/cover-1.jpg)",
          transform: "translateX(300%)",
        }}
      >
        <div
          className="card bg-dark-5 bg-hover text-white text-center"
          style={{
              minHeight: '470px'
          }}
        >
          <div className="card-body mt-auto mb-n11 py-8">
            <h1 className="mb-0 fw-bolder">Women</h1>
          </div>
          <div className="card-body mt-auto py-8">
            <a className="btn btn-white stretched-link" href="shop.html">
              Shop Women <i className="fe fe-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover flickity-cell is-selected"
        style={{
          backgroundImage: "url(assets/img/covers/cover-1.jpg)",
          transform: "translateX(300%)",
        }}
      >
        <div
          className="card bg-dark-5 bg-hover text-white text-center"
          style={{
              minHeight: '470px'
          }}
        >
          <div className="card-body mt-auto mb-n11 py-8">
            <h1 className="mb-0 fw-bolder">Women</h1>
          </div>
          <div className="card-body mt-auto py-8">
            <a className="btn btn-white stretched-link" href="shop.html">
              Shop Women <i className="fe fe-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default CarouselProps;
