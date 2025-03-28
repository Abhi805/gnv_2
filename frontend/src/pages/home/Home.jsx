import React from 'react'
import './home.css'

const cardData = [
  { title: "Wedding Planner", text: "anytime anywhere ", img: "/assets/home/images/cnt_2/g2.jpg" },
  { title: "Govt. Events", text: "more then 200 teams", img: "/assets/home/images/cnt_2/g7.jpg" },
  { title: "Celebrity Managment", text: "anytime anywhere", img: "/assets/home/images/cnt_2/g11.jpg" },
  { title: "Corporate Events", text: "the best & perfect venues", img: "/assets/home/images/cnt_2/g16.jpg" },
  { title: "Sports Events", text: "We make you perfect event", img: "/assets/home/images/cnt_2/g27.jpg" },
  { title: "Road Shows", text: "the best & perfect venues", img: "/assets/home/images/cnt_2/g25.jpg" },
  { title: "Theme Parties", text: "We have million ideas", img: "/assets/home/images/cnt_2/g28.jpg" },
  { title: "Press Conference", text: "We think out of the box", img: "/assets/home/images/cnt_2/g29.jpg" },
  { title: "Exhibitions", text: "We make you perfect event", img: "/assets/home/images/cnt_2/g30.jpg" },
  { title: "Promotional Activities", text: "We have million ideas", img: "/assets/home/images/cnt_2/g31.jpg" },
  { title: "Event Managment", text: "the best & perfect venues", img: "/assets/home/images/cnt_2/g32.jpg" },
  { title: "Brand Managment", text: "We think out of the box", img: "/assets/home/images/cnt_2/g33.jpg" },
  { title: "Model Coordination", text: "We make you perfect event", img: "/assets/home/images/cnt_2/g34.jpg" },
  { title: "Cultural Events", text: "We think out of the box", img: "/assets/home/images/cnt_2/g8.jpg" },







];


export default function Home() {
  return (
    <div className='home'>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"

      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}

            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        {/* container_1 images */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/home/images/cnt_1/g14.jpg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/home/images/cnt_1/g14.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/home/images/cnt_1/g14.jpg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Our Services Section */}
      {/* container cnt_2  image fetch* /}
      <div class="container container_2 px-3">
        <p class="sub-title">Our services</p>
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="section-pragraph text-start">

              <h2 class="big-title"><strong>No.1</strong> Events Management</h2>
              <p className='lorem mt-4'>GNV INDIA ENTERTAINMENT is a Central India based Event Management and Advertisement company. We are best in industry for providing international acts and artists...we also provide celebrities from Bollywood, tv actors, sports personalities for all events appearances and all kind of events etc.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src="/assets/home/images/cnt_1/slider1.jpg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>

        </div>
      </div>

      {/* container_3 Card */}

<div className="container-fluid mt-5">
<div className="row d-flex justify-content-center"> 
          {cardData.map((card, index) => (
             <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-4">
              <div className="card" style={{ width: "16rem" }}>
              <img src={card.img} className="card-img-top img-fluid" alt="Card Image" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*container_3.1 */}

      
    </div>
  )
}
