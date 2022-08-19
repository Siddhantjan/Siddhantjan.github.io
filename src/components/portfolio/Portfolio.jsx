import React from 'react'
import "./portfolio.css";
import IMG1 from '../../assets/homepage.jpeg'
import STAZER from '../../assets/stazer.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "FoodBox",
    github: "https://github.com/Siddhantjan/FoodBox-Phase6-CapstoneProject",
    demo: "",
  },
  {
    id: 2,
    image: STAZER,
    title: "Stazer Service App",
    github: "https://github.com",
    demo: "https://play.google.com/store/apps/details?id=stazer.user.androidstazerserviceapp",
  },
  {
    id: 3,
    image: STAZER,
    title: "Stazer Service App",
    github: "https://github.com",
    demo: "https://play.google.com/store/apps/details?id=stazer.user.androidstazerserviceapp",
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