import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

export default function RegisterForm({ baseUrl }) {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPasswordRef = useRef(null);

  const p = document.getElementById("password_check");
  const pp = document.getElementById("confirm_password");
  const passwordInput = document.getElementById("passwordInput");
  const confirmpasswordInput = document.getElementById("confirmpasswordInput");

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      confirmpasswordInput.style.borderColor = "green";
      confirmPasswordRef.current.style.setProperty(
        "border-color",
        "green",
        "important"
      );
      pp.textContent = "You are correct";
      console.log(e.target.name);
    } else {
      confirmPasswordRef.current.style.setProperty(
        "border-color",
        "blue",
        "important"
      );
      pp.textContent = "You are wrong";
    }
  };

  const handlePasswordCheck = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length <= 4) {
      p.textContent =
        "Password must not be less than 4 characters and more than 8 characters";
      p.style.color = "red";
    } else if (e.target.value.length > 4 && e.target.value.length <= 8) {
      p.textContent = "Good Password ✔";
      p.style.color = "green";
    } else {
      confirmpasswordInput.disabled = "true";
      p.textContent = "You have exceeded 8 characters ❗";
      p.style.color = "red";
    }
  };

  const user = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    password: password,
    re_password: confirmPassword,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verify email and password
    axios.get(`${baseUrl}/accounts/get_user/${email}/${phone}/`).then((res) => {
      console.log(res.data);
      if (res.data[0].email === email) {
        setMsg("A User with this Email already exists!");
      } else if (res.data[0].phone === phone) {
        setMsg("This Phone Number has already been used by another User!");
      }
    });

    // Create User
    axios.post(`${baseUrl}/auth/users/`, user);
    navigate("/login");
  };

  return (
    <>
      <div className="container-fluid booking py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            {/* <div className="col-lg-6">
                        <h5 className="section-booking-title pe-3">Booking</h5>
                        <h1 className="text-white mb-4">Online Booking</h1>
                        <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <a href="#" className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Read More</a>
                    </div> */}
            <div className="col-lg-12">
              <h1 className="text-white text-center mx-auto mb-3 p-2">
                Register with us
              </h1>
              {/* <p className="text-white mb-4">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p> */}
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label>Enter Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-white border-0"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label>Enter Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating"
                      id="phone"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="phone"
                        placeholder="Your phone number"
                        data-target="phone"
                        value={phone === null ? "" : phone}
                        onChange={(e) =>
                          setPhone(
                            e.target.value === ""
                              ? null
                              : Number(e.target.value)
                          ) && console.log(typeof e.target.value)
                        }
                      />
                      <label>Enter Phone number</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="address"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="address"
                        placeholder="Your address"
                        data-target="address"
                      />
                      <label>Enter Address</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date">
                      <input
                        type="password"
                        className="form-control bg-white border-0"
                        id="passwordInput"
                        placeholder="Enter your password"
                        data-target="password"
                        onChange={handlePasswordCheck}
                        value={password}
                      />
                      <label>Enter Password</label>
                    </div>
                    <p id="password_check"></p>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="password"
                        className="form-control bg-white border-0"
                        id="confirmpasswordInput"
                        placeholder="Confirm your password"
                        onChange={handleConfirmPassword}
                        value={confirmPassword}
                        ref={confirmPasswordRef}
                        name="confirmPassword"
                      />
                      <label>Confirm Password</label>
                    </div>
                    <p id="confirm_password"></p>
                  </div>
                  {/* <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-white border-0" id="select1">
                                            <option value="1">Destination 1</option>
                                            <option value="2">Destination 2</option>
                                            <option value="3">Destination 3</option>
                                        </select>
                                        <label>Destination</label>
                                    </div>
                                </div> */}
                  {/* <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                        <label>Special Request</label>
                                    </div>
                                </div> */}
                  <div className="col-12">
                    <button
                      className="btn btn-primary text-white w-100 py-3"
                      type="submit"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
