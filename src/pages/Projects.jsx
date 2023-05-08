import React from "react";
import { Route, Routes, Link } from "react-router-dom";
const Projects = ({ products }) => {
  return (
    <div>
    <section className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <div className="projects">
          {products.map((product) => (
            <Link to={`/OneProduct/${product.id}`} className="project">
              <img
                alt="Project-img"
                className="project-img"
                src={product.src}
              />
              <h3 className="project-title">{product.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Projects;
