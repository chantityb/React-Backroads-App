import Title from './Title.js'
import { serviceBlurbs } from '../data.js'

const Services = () => {
  return (
            <section className="section services" id="services">
            <Title
              title= 'our'
              subTitle = 'services'
            />
            <div className="section-center services-center">
              {serviceBlurbs.map((blub) => {
                  return (
                      <article className="service" key={blub.id}>
                        <span className="service-icon"><i className={blub.icon}></i></span>
                        <div className="service-info">
                              <h4 className="service-title">{blub.title}</h4>
                            <p className="service-text">
                            {blub.text}
                            </p>
                        </div>
                      </article>
                  );
              })}                
            </div>
            </section>
  )
}

export default Services
