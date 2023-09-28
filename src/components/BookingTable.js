import React, { useEffect, useState } from "react";
import reservation from "../images/reservation.jpg";
import outdoorSeating from "../images/outdoor-seating.jpg";
import indoorSeating from "../images/indoor-seating.jpg";
import chandelier from "../images/chandelier.png";

function BookingTable({ availableTimes, updateTimes, submitForm }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    cardNo: "",
    time: "17:00",
    date: "",
    noOfGuests: "",
    occasion: "",
    sitting: "Inside",
    addInfo: "",
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    submitForm(form)
  };

  const handleTime = (e) => {
    console.log(e);
    const newTime = e.target.value;
    console.log(newTime);
    setForm({
      ...form,
      time: newTime,
    });
    updateTimes(newTime);
    console.log(form);
  };
  const imageStyle = {
    transform: "rotate(180deg)", // Rotate the image 45 degrees
    width: "3rem",
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
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
              <img src={reservation} alt="Reservation_section" />
            </div>
          </div>
          <div>
            <div className="book-table">
              <h1>Book a Table</h1>
              <h2>No Need To Wait For Table</h2>
              <div className="decor">
                <div className="decorInner"></div>
                <img
                  src={chandelier}
                  alt="decor-chandelier"
                  style={imageStyle}
                />
                <div className="decorInner"></div>
              </div>
              <div className="bookTable">
                <label htmlFor="time">Choose time</label>
                <select
                  id="time "
                  name="time"
                  value={form.time}
                  onChange={(e) => {
                    handleTime(e);
                  }}
                >
                  {availableTimes? availableTimes.map((time) => {
                    return (
                      <option key={time} id="time" name="time" value={time}>
                        {time}
                      </option>
                    );
                  }) : null }
                </select>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      date: e.target.value,
                    });
                  }}
                />
                <label htmlFor="noofguests">Number of Guests</label>
                <input
                  type="range"
                  id="noofguests"
                  name="noofguests"
                  min="1"
                  max="10"
                  value={form.noOfGuests}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      noOfGuests: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="event">
              <h1>Events or celebration</h1>
              <div className="occasion">
                <label htmlFor="occasion">Occasion</label>
                <select
                  name="occasion"
                  id="occasion"
                  placeholder="Occasion"
                  value={form.occasion}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      occasion: e.target.value,
                    });
                  }}
                >
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </select>
                <label htmlFor="sitting">Sitting</label>
                <div className="seat">
                  <label>
                    <input
                      type="radio"
                      name="seating"
                      value="Outside"
                      onChange={(e) => {
                        setForm({
                          ...form,
                          sitting: e.target.value,
                        });
                      }}
                    />
                    <img src={outdoorSeating} alt="Outdoor seating" />
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="seating"
                      value="Inside"
                      onChange={(e) => {
                        setForm({
                          ...form,
                          sitting: e.target.value,
                        });
                      }}
                      checked
                    />
                    <img src={indoorSeating} alt="Indoor seating" />
                  </label>
                </div>
                <label htmlFor="addInfo">Additional Information</label>
                <textarea
                  id="addInfo"
                  name="addInfo"
                  rows="4"
                  cols="40"
                  placeholder="Type here..."
                  value={form.addInfo}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      addInfo: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="user-details">
            <h1>Personal Details</h1>
            <div className="bookTable">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={form.name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    name: e.target.value,
                  });
                }}
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="eg: 03XX-XXXXXXX"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                value={form.phone}
                onChange={(e) => {
                  setForm({
                    ...form,
                    phone: e.target.value,
                  });
                }}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="eg: Jxxxx@gmail.com"
                value={form.email}
                onChange={(e) => {
                  setForm({
                    ...form,
                    email: e.target.value,
                  });
                }}
              />
              <label htmlFor="ccn">Card Number</label>
              <input
                id="ccn"
                name="ccn"
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxLength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                value={form.cardNo}
                onChange={(e) => {
                  setForm({
                    ...form,
                    cardNo: e.target.value,
                  });
                }}
              ></input>
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default BookingTable;
