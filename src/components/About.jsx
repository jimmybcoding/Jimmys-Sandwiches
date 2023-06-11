import hamilton from 'src/images/hamilton.jpg';

const hamiltonPic = document.getElementById('hamilton');
hamiltonPic.src = hamilton;

function About() {
  return (
    <div className="about-container">
      <p>Jimmy&apos;s Sandwhiches has been proud to serve Hamilton since 1990</p>
      <img src="./images/hamilton.jpg" className="hamilton-image" id="hamilton"/>
      <p>Online ordering now available:</p>
      <div className="order-btn-div">
        <a href="https://www.tbdine.com" target="blank">Order Takeout</a>
        <a href="https://www.tbdine.com" target="blank">Order Delivery</a>
      </div>
      <section className="contact-hours">
        <div>
          Contact Us:<br></br>
          Phone: 519-123-4567<br></br>
          Address: 123 camelCaseStreet <br></br>
          Email: Jimmysammys@gmail.com <br></br>
        </div>
        <div>
          Hours of Operation: <br></br>
          M-F: 10am- 8pm <br></br>
          Sat: 9am- 10pm <br></br>
          Sun: 10am- 5pm
        </div>
      </section>
    </div>
  )
}

export default About

