import "sanitize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import { FormikEffect } from "./EffectComponent";

import DisplayFormikState from "./DisplayFormikState";

const handleSubmit = (values, bag) => {
  console.log(`handleSubmit`);
  bag.setSubmitting(false);
};

function Example() {
  return (
    <Formik
      initialValues={{ name: "", surname: "", card_holder: "" }}
      onSubmit={handleSubmit}
    >
      {formik => {
        return (
          <Form>
            <FormikEffect
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              submitForm={formik.submitForm}
              isSubmitting={formik.isSubmitting}
              isValidating={formik.isValidating}
              didUpdate={(prevState, props) => {
                console.log("inside", prevState, props);
                const { name, surname } = props.values;
                console.log("inside", name, surname);
                if (props.isSubmitting) {
                  return;
                }

                if (
                  name !== prevState.values.name ||
                  surname !== prevState.values.surname
                ) {
                  props.setFieldValue("card_holder", `${name} ${surname}`);
                  console.log("submitForm");
                  props.submitForm();
                }
              }}
            />
            <div>
              <label>Name</label>
              <br />
              <Field name="name" placeholder="Insert name" />
            </div>
            <br />
            <div>
              <label>Last Name</label>
              <br />
              <Field name="surname" placeholder="Insert surname" />
            </div>
            <br />
            <div>
              <label>
                Card Holder <small>(read only)</small>
              </label>
              <br />
              <Field
                name="card_holder"
                readOnly
                placeholder="Insert card holder"
              />
            </div>
            <br />
            <input type="submit" />
            <br />
            <br />
            <DisplayFormikState />
          </Form>
        );
      }}
    </Formik>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
