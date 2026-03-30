import { useFormik } from "formik";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    onSubmit: (values) => {
      console.log("Form Data:", values);
    }
  });

  return (
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;