import React from "react";

const NotFoundPage:React.FC =()=>{
    return(
        <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            <div className="mb-7 fs-1">🙁</div>

            <h2 className="mb-5">404. Page not found.</h2>

            <p className="mb-7 text-gray-500">
              Sorry, we couldn't find the page you where looking for. We suggest
              that you return to home page.
            </p>

            <a className="btn btn-dark" href="index.html"> Go to Homepage </a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default NotFoundPage;