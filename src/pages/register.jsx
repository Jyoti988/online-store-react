import { useState } from "react";
import Base from "../components/Base";

const Register = () => {

    let [data,setData] = useState({
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
        about: '',
        gender: ''
        
    })

    const [errorData, setErrorData] = useState({
        isError: false,
        errorData: null
    })

    const clearData = () => {
        setData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            about: '',
            gender: ''
        })
    }

     const handleChange = (event, property) => {
        //   console.log(event)
        //   console.log(property)
        setData({
            ...data,
            [property]: event.target.value
        })
    }

   
     //do signup function
     const submitForm = (event) => {

        event.preventDefault();

        console.log(data)

        // //validate client side 
        // if (data.name == undefined || data.name.trim() == '') {
        //     toast.error("Name is required !!")
        //     return
        // }

        // if (data.email == undefined || data.email.trim() == '') {
        //     toast.error("Email is required !!")
        //     return
        // }

        // //basics...

        // if (data.password == undefined || data.password.trim() == '') {
        //     toast.error("Password is required !!")
        //     return
        // }

        // if (data.confirmPassword == undefined || data.confirmPassword.trim() == '') {
        //     toast.error("Confirm Password is required !!")
        //     return
        // }

        // if (data.password != data.confirmPassword) {
        //     toast.error("Password and Confirm password not matched !!")
        //     return
        // }

        // //all right:
        // //call api
        // setLoading(true)
        // registerUser(data)
        //     .then(userData => {
        //         //success handler
        //         console.log(userData)
        //         toast.success("User created successfully !!");
        //         clearData()

        //     })
        //     .catch(error => {
        //         //error handler
        //         console.log(error)
        //         setErrorData({
        //             isError: true,
        //             errorData: error
        //         })
        //         toast.error("Error in creating user ! Try again")
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })

    }

    const registerForm = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card my-3 border-0 shadow p-4" style={{ position: 'relative', top: -60 }}>
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <img src="/assets/logo.jpg" alt="Store logo" width={200} height={100} />
                                </div>

                                <h3 className="mb-4 text-center text-uppercase">Store Signup Here</h3>

                                <form onSubmit={submitForm}>
                                    {/* Name Field */}
                                    {JSON.stringify(data)}

                                    <div className="form-group mb-3">
                                        <label htmlFor="formName">Enter your name</label>
                                        <input type="text" className="form-control" id="formName"  value={data.name}  placeholder="Enter name" onChange={(event)=>handleChange(event,'name')}/>
                                    </div>

                                    {/* Email Field */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="formEmail">Enter your email</label>
                                        <input type="email" className="form-control" id="formEmail"  placeholder="Enter email" onChange={(event) => handleChange(event, 'email')}
                                            value={data.email} />
                                    </div>

                                    {/* Password Field */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="formPassword">Enter new password</label>
                                        <input type="password" className="form-control" id="formPassword"  onChange={(event) => handleChange(event, 'password')}
                                            value={data.password}  placeholder="Enter password" />
                                    </div>

                                    {/* Confirm Password Field */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="formConfigPassword">Re-enter password</label>
                                        <input type="password" className="form-control" id="formConfigPassword"  onChange={(event) => handleChange(event, 'confirmPassword')}
                                            value={data.confirmPassword} placeholder="Re-enter password" />
                                    </div>

                                    {/* Gender Radio Buttons */}
                                    <div className="form-group mb-3">
                                        <label>Select Gender</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="genderMale" value="male"   checked={data.gender == 'male'}
                                                onChange={(event) => handleChange(event, 'gender')}/>
                                                <label className="form-check-label" htmlFor="genderMale">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="female"  checked={data.gender == 'female'}
                                                onChange={(event) => handleChange(event, 'gender')} />
                                                <label className="form-check-label" htmlFor="genderFemale">Female</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* About Field */}
                                    <div className="form-group mb-2">
                                        <label htmlFor="formAbout">Write something about yourself</label>
                                        <textarea className="form-control" id="formAbout" rows="2" placeholder="Write here" onChange={(event) => handleChange(event, 'about')}
                                            value={data.about}></textarea>
                                    </div>

                                    {/* Links and Buttons */}
                                    <div className="text-center">
                                        <p>Already <a href="#">Login</a></p>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success text-uppercase">
                                            <span>Register</span>
                                        </button>
                                        <button type="reset" className="btn btn-danger ms-2 text-uppercase" onClick={clearData}>Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Base title="Electro Store / Signup" description="Fill the form correctly to register with us. By registering, you can access our services.">
            {registerForm()}
        </Base>
    );
};

export default Register;
