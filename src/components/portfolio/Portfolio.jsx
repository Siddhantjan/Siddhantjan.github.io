import React from 'react'
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Stazer Service App",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 2,
    image: IMG1,
    title: "Stazer Service App",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: IMG1,
    title: "Stazer Service App",
    github: "https://github.com",
    demo: "https://google.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="projectimg" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Demo
                </a>
              </div>
            </article>
          );
        })
      }

      </div>
    </section>
  );
}

export default Portfolio