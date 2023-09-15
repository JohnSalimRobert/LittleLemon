import React from "react";
import reservation from "../images/reservation.jpg"
import outdoorSeating from '../images/outdoor-seating.jpg';
import indoorSeating from '../images/indoor-seating.jpg'
import chandelier from '../images/chandelier.png'

function BookingTable() {
  const imageStyle = {
   transform: 'rotate(180deg)', // Rotate the image 45 degrees  
   width: '3rem',
  };
  return (
    <main>
      <form>
      <div className="container">
        <div className="reservation">
          <div className="reservation_text">
            <h1>Little Lemon </h1>
            <h2>Online Reservation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              purus nisi, lobortis vitae tempor a, molestie vitae mi.
            </p>
          </div>
          <div className="reservation_img">
            <img src={reservation} alt="Reservation_section"/>
          </div>
        </div>
        <div>
        <div className="book-table">
          <h1>Book a Table</h1>
          <h2>No Need To Wait For Table</h2>
          <div className="decor">
            <div className="decorInner"></div>
            <img src={chandelier} alt="decor-chandelier" style={imageStyle} />
            <div className="decorInner"></div>
          </div>
          <div className="bookTable">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time"/>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date"/>
            <label htmlFor="noofguests">Number of Guests</label>
            <input type="range" id="noofguests" name="noofguests" min='1' max='10'/>
          </div>
        </div>
        </div>
        <div>
        <div className="event">
          <h1>Events or celebration</h1>
          <div className="occasion">
            <label htmlFor="occasion">Occasion</label>
            <select name="occasion" id="occasion"  placeholder="Occasion">
              <option value='birthday'>Birthday</option>
              <option value='engagement'>Engagement</option>
              <option value='anniversary'>Anniversary</option>
            </select>
            <label htmlFor="sitting">Sitting</label>
            <div className="seat">
            <label>
              <input type="radio" name="seating" value="Outside" />
              <img src={outdoorSeating} alt="Outdoor seating" />
              </label>
              <label>
              <input type="radio" name="seating" value="Indoor" />
              <img src={indoorSeating} alt="Indoor seating" checked />
            </label>
            </div>
            <label htmlFor="addInfo">Additional Information</label>
            <textarea id="addInfo" name="addInfo" rows="4" cols="40"  placeholder="Type here..."></textarea>
          </div>
        </div>
        </div>
        <div className="user-details">
          <h1>Personal Details</h1>
          <div className="bookTable">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name"/>
            <label htmlFor="phone" >Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder="eg: 03XX-XXXXXXX" pattern="[0-9]3-[0-9]{3}-[0-9]{4}"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="eg: Jxxxx@gmail.com"/>
            <label htmlFor="ccn">Card Number</label>
            <input id="ccn" name="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx"></input>
          </div>
        </div>
      </div>
      </form>
    </main>
  );
}

export default BookingTable;
