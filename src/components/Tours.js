import Title from './Title.js'
import { tourCards } from '../data.js'

const Tours = () => {
  return (
            <section className="section" id="tours">
              <Title
              title= 'featured'
              subTitle = "tours"
              />
             <div className="section-center featured-center">
              {tourCards.map((card => { 
                  return (
                      <article className="tour-card" key={card.id}>
                          <div className="tour-img-container">
                              <img src={card.img} className="tour-img" alt={card.title} />
                              <p className="tour-date">{card.date}</p>
                          </div>
                          <div className="tour-info">
                              <div className="tour-title">
                                  <h4>{card.title}</h4>
                              </div>
                              <p>
                                  {card.text}
                              </p>
                              <div className="tour-footer">
                                  <p>
                                      <span><i className={card.icon}></i></span> {card.country}
                                  </p>
                                  <p>{card.duration} days</p>
                                  <p>from ${card.price}</p>
                              </div>
                          </div>
                      </article>
                  );
                }))}
            </div>
            </section>
  )
}

export default Tours
