import { Link } from "react-router-dom"
import { useState } from "react";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [lastName, setlastname] = useState("");

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const onlastNameChange = (e) => {
        setlastname(e.target.value)
    }
    const onpasswordChange = (e) => {
        setpassword(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }




    const signup = (e) => {
        e.preventDefault();
        console.log(email, password, FirstName, lastName)
        fetch("http://localhost:5000/user/signup", { method: "POST", body:JSON.stringify({ email, password, FirstName, lastName }), headers:{ 'Content-Type': "application/json" } }).then(function(res){
            return res.json();
        }).then(function(result){
            console.log("result",result)


        })

    }    


    
    


    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e) => signup(e)}>
                <div className="login-title">
                    <h3>Signup</h3>
                </div>
                <div className="form-group  mt-3">
                    <label>First name</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" araia-describedby="emailHelp" placeholder="Enter Firstname" value={FirstName} onChange={(e) => onFirstNameChange(e)} />
                </div>
                <div className="form-group  mt-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" araia-describedby="emailHelp" placeholder="Enter Lastname" value={lastName} onChange={(e) => onlastNameChange(e)} />

                </div>



                <div class="form-group  mt-3">
                    <label>Email address</label>
                    <input type="email" className="form-control mt-1" id="exampleInputEmail1" araia-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => onEmailChange(e)} />


                </div>
                <div className="form-group mt-3">
                    <label for="exampleInputpassword1">password</label>
                    <input type="password" class="form-control mt-1" id="exampleInputpassword1" placeholder="Enter password" value={password} onChange={(e) => onpasswordChange(e)} />


                </div>
                <button type="submit" className="btn btn-primary mt-3">submit</button>
                <div><Link>Already have an account <span className="Link color"><Link to="/login">Login</Link></span></Link></div>





            </form>
        </div>

    )
}

export default Signup






