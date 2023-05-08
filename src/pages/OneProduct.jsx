import React from "react";
import { useParams } from "react-router-dom";
import svg from "../img/socials/gitHub-black.svg"

const OneProduct = ({ products }) => {
  const { id } = useParams();
  const product = products[id];
  console.log(product);
  return (
    <div>
      <section className="section">
        <div className="container">
            <div className="project-details">
                <h1 className="title-1">{product.title}</h1>
                <img src={product.src} alt="" className="project-details__cover img"/>
                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>
                <button className="product-button">
                <a href="#!" className="btn-outline">
                    <img src={svg} alt=""/>
                    GitHub repo
                </a>
                </button>
            </div>
        </div>
    </section>
    </div>
  );
};

export default OneProduct;
