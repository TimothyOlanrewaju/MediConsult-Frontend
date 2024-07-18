export default function PlaceOrders() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid d-flex flex-row">
        <div className="col-xl-4 col-lg-4 col-md-6 col-12 m-1">
          <div className="card card-hover ">
            <a href="blog-single.html">
              <img
                src="../assets/images/"
                className="img-fluid  rounded-top-md"
                alt="product Image"
              />
            </a>
            <div className="card-body">
              <a href="#" className="badge bg-info mb-3">
                Category
              </a>
              <h3>
                <a href="blog-single.html" className="text-inherit">
                  Product Name
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem
                ipsum...
              </p>
              <div className="row align-items-center g-0 mt-4">
                <div className="col-auto">
                  <img
                    src="../assets/images/avatar/avatar-7.jpg"
                    alt=""
                    className="rounded-circle avatar-sm me-2"
                  />
                </div>
                {/* <div className="col lh-1">
                  <h5 className="mb-1"></h5>
                  <p className="fs-6 mb-0"></p>
                </div> */}
                <div className="col-auto">
                  <button className="btn btn-success">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-12 m-1">
          <div className="card card-hover ">
            <a href="blog-single.html">
              <img
                src="../assets/images/"
                className="img-fluid  rounded-top-md"
                alt="product Image"
              />
            </a>
            <div className="card-body">
              <a href="#" className="badge bg-info mb-3">
                Category
              </a>
              <h3>
                <a href="blog-single.html" className="text-inherit">
                  Product Name
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem
                ipsum...
              </p>
              <div className="row align-items-center g-0 mt-4">
                <div className="col-auto">
                  <img
                    src="../assets/images/avatar/avatar-7.jpg"
                    alt=""
                    className="rounded-circle avatar-sm me-2"
                  />
                </div>
                {/* <div className="col lh-1">
                  <h5 className="mb-1"></h5>
                  <p className="fs-6 mb-0"></p>
                </div> */}
                <div className="col-auto">
                  <button className="btn btn-success">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
