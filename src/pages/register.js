import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    if (name === "name" && (!value || value.trim() === "")) {
      errorMsg = "Name is required.";
    } else if (
      name === "email" &&
      (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    ) {
      errorMsg = "Valid email is required.";
    } else if (name === "password" && (!value || value.length < 6)) {
      errorMsg = "Password must be at least 6 characters long.";
    } else if (
      name === "confirmPassword" &&
      value !== data.password
    ) {
      errorMsg = "Passwords do not match.";
    } else if (name === "about" && (!value || value.trim() === "")) {
      errorMsg = "Please write something about yourself.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!data.name || data.name.trim() === "") {
      newErrors.name = "Name is required.";
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!data.password || data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!data.gender) {
      newErrors.gender = "Gender selection is required.";
    }
    if (!data.about || data.about.trim() === "") {
      newErrors.about = "Please write something about yourself.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Registration successful!");
      console.log(data);
    } else {
      toast.error("Please correct the errors in the form.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div
            className="card my-3 border-0 shadow p-4"
            style={{ position: "relative", top: -60 }}
          >
            <div className="card-body">
              <div className="text-center mb-3">
                <img
                  src="/assets/logo.jpg"
                  alt="Store logo"
                  width={200}
                  height={100}
                />
              </div>

              <h3 className="mb-4 text-center text-uppercase">
                Store Signup Here
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group mb-3">
                  <label htmlFor="formName">Enter your name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formName"
                    name="name"
                    value={data.name || ""}
                    placeholder="Enter name"
                    onChange={handleChange}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                {/* Email Field */}
                <div className="form-group mb-3">
                  <label htmlFor="formEmail">Enter your email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="formEmail"
                    name="email"
                    value={data.email || ""}
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                {/* Password Field */}
                <div className="form-group mb-3">
                  <label htmlFor="formPassword">Enter new password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="formPassword"
                    name="password"
                    value={data.password || ""}
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                  {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>

                {/* Confirm Password Field */}
                <div className="form-group mb-3">
                  <label htmlFor="formConfigPassword">Re-enter password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="formConfigPassword"
                    name="confirmPassword"
                    value={data.confirmPassword || ""}
                    placeholder="Re-enter password"
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                </div>

                {/* Gender Radio Buttons */}
                <div className="form-group mb-3">
                  <label>Select Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="genderMale"
                        value="Male"
                        checked={data.gender === "Male"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="genderMale">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="genderFemale"
                        value="Female"
                        checked={data.gender === "Female"}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="genderFemale"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                  {errors.gender && <small className="text-danger">{errors.gender}</small>}
                </div>

                {/* About Field */}
                <div className="form-group mb-2">
                  <label htmlFor="formAbout">
                    Write something about yourself
                  </label>
                  <textarea
                    className="form-control"
                    id="formAbout"
                    name="about"
                    rows="2"
                    value={data.about || ""}
                    placeholder="Write here"
                    onChange={handleChange}
                  ></textarea>
                  {errors.about && <small className="text-danger">{errors.about}</small>}
                </div>

                {/* Links and Buttons */}
                <div className="text-center">
                  <p>
                    Already <a href="#">Login</a>
                  </p>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success text-uppercase"
                  >
                    <span>Register</span>
                  </button>
                  <button
                    type="reset"
                    className="btn btn-danger ms-2 text-uppercase"
                    onClick={() => {
                      setData({});
                      setErrors({});
                    }}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;