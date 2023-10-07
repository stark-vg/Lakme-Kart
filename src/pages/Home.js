import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";

const Containerfluid = styled.div`
  position: relative;
  margin:auto;
  background: rgba(0,0,0,.4);
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  ),
  url("https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?cs=srgb&dl=pexels-delbeautybox-705255.jpg&fm=jpg")
    center;
  width="1690px"
  height="1200px"
  alt="logo"
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  background-color: white;
`;

const Containerfluid2 = styled.div`
  position: relative;
  margin:auto;
  background: rgba(0,0,0,.2);
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  ),
  url("https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg?cs=srgb&dl=pexels-cottonbro-3992875.jpg&fm=jpg")
    center;
  width="1000px"
  height="800px"
  alt="logo"
  background-color: white;
  padding: 20px 20px 20px 20px;
`;

const Containerfluidimg = styled.div`
  color: white;
`;

const Containerfluidimg2 = styled.div`
  color: black;

`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Containerfluid>
        <section class="" id="destinations">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                <Containerfluidimg>
                  <h2 class=" a text-center mt-4 text-secondary">
                    Some Products
                  </h2>
                </Containerfluidimg>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 mb-5">
                <div class="card mt-4">
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?cs=srgb&dl=pexels-dan-cristian-p%C4%83dure%C8%9B-1377034.jpg&fm=jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <h4 class="card-title text-secondary">Nail Polish</h4>
                    <p class="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div class="card-footer">
                    <a
                      href="https://www.apple.com/in/iphone/"
                      class="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-5">
                <div class="card mt-4">
                  <img
                    class="card-img-top"
                    src=" https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg?cs=srgb&dl=pexels-cottonbro-4620843.jpg&fm=jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <h4 class="card-title text-secondary">MakeUp Kit</h4>
                    <p class="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div class="card-footer">
                    <a
                      href="https://www.apple.com/in/mac/"
                      class="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-5">
                <div class="card mt-4">
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/4110338/pexels-photo-4110338.jpeg?cs=srgb&dl=pexels-anastasiya-lobanovskaya-4110338.jpg&fm=jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <h4 class="card-title text-secondary">Lipstick</h4>
                    <p class="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div class="card-footer">
                    <a
                      href="https://www.apple.com/in/imac/"
                      class="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="" id="destinations">
          <div class="container">
            <div class="row parallel">
              <div class="col-sm-12 col-md-12"></div>
            </div>
            <div class="row">
              <div class="col-sm-4 mb-5">
                <div class="card mt-4">
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/7446418/pexels-photo-7446418.jpeg?cs=srgb&dl=pexels-karen-la%C3%A5rk-boshoff-7446418.jpg&fm=jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <h4 class="card-title text-secondary">Brush</h4>
                    <p class="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div class="card-footer">
                    <a
                      href="https://www.apple.com/in/airpods/"
                      class="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-5">
                <div class="card mt-4">
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/7521707/pexels-photo-7521707.jpeg?cs=srgb&dl=pexels-kateryna-naidenko-7521707.jpg&fm=jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <h4 class="card-title text-secondary">Base</h4>
                    <p class="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div class="card-footer">
                    <a
                      href="https://www.apple.com/in/watch/"
                      class="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-5">
                <div class="card mt-4">
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/3736398/pexels-photo-3736398.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-3736398.jpg&fm=jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <h4 class="card-title text-secondary">Lotions</h4>
                    <p class="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div class="card-footer">
                    <a
                      href="https://www.apple.com/in/ipad/"
                      class="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Containerfluid>
      <br />

      <Containerfluidimg2>
        <h2 class=" a text-center mt-4 text-secondary">CATEGORIES</h2>
      </Containerfluidimg2>

      <Containerfluid2>
        <div class="col-sm-12 col-md-12"></div>
        <Products />
      </Containerfluid2>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
