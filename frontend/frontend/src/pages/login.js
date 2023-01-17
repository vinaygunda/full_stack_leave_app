import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate =useNavigate();


    

    const onPasswordChange= (e) =>{
        setPassword(e.target.value)

    }
    const onEmailchange = (e) => {
        setEmail(e.target.value)
    }
    
    

    const login =(e) => {
        e.preventDefault();
        console.log(email, password)
        fetch("http://localhost:5000/user/login", { method: "POST", body:JSON.stringify({ email, password}), headers: { 'Content-Type': "application/json" }}).then(function(res){
            return res.json()
        }).then(function(result){
            console.log("result",result)
            navigate("/userdashboard")


        })
        //submit logic need to implement
    }
return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e) =>login(e)}>
                <div className="login-title">
                    <h3>Login</h3>
                </div>


                <div className="form-group  mt-3">
                    <label>Email address</label>

                    <input type="email" className="form-control mt-1" id="exampleInputEmail1"araia-describedby="emailHelp"placeholder="Enter Email" value={email} onChange={(e)=> onEmailchange(e)}/>

                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input type="password" className="form-control mt-1" id="exampleInputpassword1" placeholder= "Password" value={password} onChange={(e)=> onPasswordChange(e)}/>

                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <div><Link>Don't have an account <span className="link-color"><Link to="/signup">signup</Link></span></Link></div>






            </form>
        </div>
    )

    }

export default Login














