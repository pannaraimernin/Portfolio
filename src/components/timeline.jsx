import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at FireOneOne <span>Jan 2018 - May 2018</span></h2>
                        <p>FireOneOne is a start up which anticipating, creating the design and technology that makes business more productive. I was an intern as a Data scientist. responsible for client's recommend system on the website. by using variety of tools (Python, Tabealu)
                        <ul>
  
                          <li> Performed user's data visualization using Tabealu</li>
                          <li> Bulit recommened system from the similarities (gender, age)by using algorithm</li>
                          <li> Clean user's data using Python to predict user's group</li>

                          </ul>
                          


</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at Khon kaen University ,Thailand <span>2014 - 2018</span></h2>
                        <p>
                          As an economics background where I grained natural of bussiness and financial skills, I will able to analyst and understand the flow of bussiness,other hobby during my  college I also was manager football team club!
            
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Thailand Software Park <span>2019-2020</span></h2>
                        <p>6 months of intensive training in a variety of modern full stack technologies.<br/>
                        Frontend Technologies: React, Redux, Context API, HTML, CSS, JS<br/>Backend Technologies: Express.js, Node.js, Axios <br/>
                        Databases:SQL, Sequelize.js, ER diagramming <br/>
                        OS Types: macOS, Linux <br/>
                        CI/CD: Docker, Test Driven Development <br/>
                        Agile best practices
</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
