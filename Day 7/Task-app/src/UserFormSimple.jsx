import { useState } from "react";

function UserFormSimple() {
  
    const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);
  };

  return(
    <form onSubmit={handleSubmit}>
        <div>
            <input 
                type="text" 
                name="name" 
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange} 
            />
            <p>{errors.name}</p>
        </div>

        <div>
            <input 
                type="email" 
                name="email" 
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange} 
            />
            <p>{errors.email}</p>
        </div>

        <button type="submit">Submit</button>
    </form>
  );
}

export default UserFormSimple;
