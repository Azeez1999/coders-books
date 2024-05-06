import React from 'react';

const Testimonial = () => {
  return (
    <section className="testimonial text-center bg-cover bg-center py-16" style={{ backgroundImage: "url('https://i.ibb.co/PTJDkgb/testimonials.jpg')" }}>
      <div className="container">
        <div className="heading white-heading relative mb-10">
          Testimonial
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img src="https://i.ibb.co/d7tSD1R/heading-line-white.png" alt="Heading Line" />
          </div>
        </div>
        <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide">
                <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="mx-auto rounded-full" alt="Client" />
                <p className="text-white text-lg mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h4 className="text-white mt-8">Client 1</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="mx-auto rounded-full" alt="Client" />
                <p className="text-white text-lg mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h4 className="text-white mt-8">Client 2</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="mx-auto rounded-full" alt="Client" />
                <p className="text-white text-lg mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h4 className="text-white mt-8">Client 3</h4>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#testimonial4" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
