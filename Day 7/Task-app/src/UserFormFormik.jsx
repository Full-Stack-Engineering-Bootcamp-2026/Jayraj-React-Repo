import { useFormik } from "formik";

function UserFormFormik() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      }

      return errors;
    },

    onSubmit:(values) => {
        console.log(values);
    }
  });


  return(
    <form onSubmit={formik.handleSubmit}>
        <div>
            <input 
                type="text" 
                name="name" 
                placeholder="Enter Name"
                onChange={formik.handleChange}
                value={formik.values.name} 
            />
            <p>{formik.errors.name}</p>
        </div>

        <div>
            <input 
                type="email" 
                name="email" 
                placeholder="Enter Email"
                onChange={formik.handleChange}
                value={formik.values.email} 
            />
            <p>{formik.errors.email}</p>
        </div>

        <button type="submit">Submit</button>
    </form>
  );
}

export default UserFormFormik;
