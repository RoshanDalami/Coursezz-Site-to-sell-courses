import React, { useState } from "react";
import "./Footer.css";
function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      setError("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {isSubscribed ? (
                  <p>Thanks for subscribing!</p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <label >
                      Email:
                      <input
                        type="email"
                        value={email}
                        placeholder='Enter your email'
                        onChange={handleEmailChange}
                        required
                      />
                    </label>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>{e.preventDefault(); 
                    setEmail('')}}>Subscribe</button>
                  </form>
                )}
                <p>&copy; 2023 Team MSG</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
