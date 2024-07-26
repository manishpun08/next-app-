import React from "react";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <section className="page_404 py-10 bg-white font-serif">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 text-center mx-auto">
                <div
                  className="four_zero_four_bg bg-center bg-no-repeat h-[400px]"
                  style={{
                    backgroundImage:
                      "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
                  }}
                >
                  <h1 className="text-center text-8xl">404</h1>
                </div>
                <div className="content_box_404 mt-12">
                  <h3 className="text-4xl">Look like you are lost</h3>
                  <p className="text-lg">
                    The page you are looking for is not available!
                  </p>
                  <a
                    href="/"
                    className="link_404 text-white bg-green-600 px-5 py-2 inline-block mt-5"
                  >
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
