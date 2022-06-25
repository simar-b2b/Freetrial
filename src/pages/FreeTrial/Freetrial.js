import React from "react";
import Timer from "./Timer";
import Logo from "../../images/Logo.png";
import ProductImage from "../../images/product.png";
import trusted from "../../images/trusted.svg";
import choose from "../../images/choose.svg";
import stars from "../../images/stars.png";
import customerone from "../../images/thumnail-1.png";
import customertwo from "../../images/thumnail-2.png";
import verified from "../../images/verified-buyer.png";
import calender from "../../images/calender.png";
import Return from "../../images/return.png";
import Truck from "../../images/truck.png";
import PromoBar from "./PromoBar";

const Freetrial = () => {
  return (
    <>
      <div className="container-fluid">
        <PromoBar />
      </div>
      <div className="container-fluid shadow-sm  bg-body rounded">
        <div className="container">
          <div className="row text-center justify-content-md-start align-items-start py-3 ">
            <div className="col-12 text-md-start text-center">
              <img src={Logo} className="img-fluid w-15" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center justify-content-center align-items-center py-5">
          <div className="col-12">
            <h1 className="pb-3">FREE TRIAL IS STILL AVAILABLE</h1>
            <h5 className="text-muted pb-2">
              Only{" "}
              <span className="stock border p-1 fw-bold text-dark">47</span>{" "}
              left in stock, offer ends in
            </h5>
            <div className="timer d-flex justify-content-center align-items-center gap-3 mt-4">
              <Timer />
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center py-5">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 py-5 px-md-5 px-3 bg-semibrown">
            <div className="product-image mb-5">
              <img src={ProductImage} className="img-fluid" alt="" />
            </div>
            <div className="trusted-reviews">
              <img src={trusted} className="" alt="" />
              <div className="customer-review mt-2 row col-12">
                <div className="col-2">
                  <img src={customerone} alt="" />
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-12 d-flex gap-5 pb-2 align-items-center">
                      <p className="m-0">
                        <img src={stars} alt="" />
                        <span className="ms-2 fw-semibold">Carly W.</span>
                      </p>
                      <img className="mt-1 ms-4" src={verified} alt="" />
                    </div>
                    <div className="col-12">
                      <p className="m-0 w-90">
                        {" "}
                        “LOVE! Best sheets ever. So luxurious. So soft. I was
                        skeptical but they do what they say. 1 month in and
                        still no odors.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customer-review mt-3 row col-12">
              <div className="col-2">
                <img src={customertwo} alt="" />
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-12 d-flex gap-5 pb-2 align-items-center">
                    <p className="m-0">
                      <img src={stars} alt="" />
                      <span className="ms-2 fw-semibold">Rebecca M.</span>
                    </p>
                    <img className="mt-1 ms-1" src={verified} alt="" />
                  </div>
                  <div className="col-12">
                    <p className="m-0 w-90">
                      “So far, I am very happy with the Miracle sheets! It's
                      true, they don't smell, and it's true, I don't have bed
                      smell. I have long believed in silver for combating
                      bacteria, and think the sheets are a perfect idea. They
                      are cool to sleep on and feel soft and "silky". I'm very
                      pleased I purchased the Sateen Luxe sheets.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className=" why-choose-us pt-4">
              <img src={choose} className="" alt="" />
              <div className="row col-12 px-2 mt-2">
               <div className="choose-image col-2">
               <img src={calender} alt="" />
               </div>
               <div className="col-8 choose-text">
               <p ><span className="fw-semibold">30-Day Satisfaction Guarantee </span><br/>If you're not satisfied with your product(s), we'll make it right! We promise.</p>
               </div>
              </div>
              <div className="row col-12 px-2">
              <div className="choose-image col-2">
              <img src={Truck} alt="" />
              </div>
              <div className="col-8 choose-text">
              <p ><span className="fw-semibold">Over 130,000 successfully shipped orders </span><br/>Happy customers, end to end tracking and reliable customer service.</p>
              </div>
             </div>
             <div className="row col-12 px-2">
             <div className="choose-image col-2">
             <img src={Return} alt="" />
             </div>
             <div className="col-8 choose-text">
             <p ><span className="fw-semibold">30-Day Guarantee </span><br/>Miracle offers a 30-Day Money Back Guarantee in case you don't fall in love with our product.</p>
             </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freetrial;
