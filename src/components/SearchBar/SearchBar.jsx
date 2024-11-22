import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.query.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSubmit(values.query);
    resetForm();
  };

  return (
    <header>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        {({ handleChange }) => (
          <Form className={s.form}>
            <Field
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={s.input}
              onChange={handleChange}
            />
            <button type="submit" className={s.button}>
              Search
            </button>
          </Form>
        )}
      </Formik>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;