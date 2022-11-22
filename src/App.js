import React, { useState } from "react"; //use-state will help like whenever I write any letter , it will get update in the form.
import "./App.css";
import "./components/formInput.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FormInput from "./components/FormInput";
import CreatableSelect from "react-select/creatable"; //implemented CreatableSelect library for the "Hobbies" section.
import Form from "react-bootstrap/Form";
import { Alert } from "bootstrap"; //for the alert box

const App = () => {
  const hoptions = [
    { value: "Running", label: "Running" },
    { value: "Swimming", label: "Swimming" },
    { value: "Painting", label: "Painting" },
    { value: "Sleeping", label: "Sleeping" },
  ];

  const [values, setValues] = useState({
    //use-state will help like whenever I write any letter , it will get update in the form.
    firstname: "", //creating a new object for values.These values will be empty initially.
    lastname: "",
    birthday: "",
    gender: "",
    city: "",
    hobbies: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // we have created the function to prevent from refreshing as when we click the submit button , the default action which belongs to the event will not occur.Basically to prevent the native behaviour of the browser.

    alert(
      //Taking the values and displaying them after submit button.
      values.firstname +
        " " +
        values.lastname +
        " \n" +
        values.birthday +
        " \n" +
        values.city +
        " \n" +
        values.gender +
        " \n" +
        values.hobbies
    );
  };
  const onChange = (e) => {
    //to change the values , having previous values, they are gonna update using target name and value will be updated immediately.
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const test = (e) => {
    const hobbiestemp = [];
    e.map((singleItem) => {
      //used to push the hobbies items to array.
      hobbiestemp.push(singleItem.value);
      // console.log(singleItem.value)
    });
    console.log(hobbiestemp);
    setValues({ ...values, hobbies: hobbiestemp });
  };

  return (
    <div className="App">
      <div className="pseudobackground"></div>
      <form className="formStyle" onSubmit={handleSubmit}>
        <div className="inputscontainer">
          <div className="formInput">
            <FormInput
              id="1"
              name="firstname"
              type="text"
              placeholder="First Name"
              errorMessage="First name should be alphabets and can't contain any special character!"
              label="First Name"
              pattern="^[A-Za-z]+$"
              required="true"
              value={values["firstname"]}
              onChange={(e) => onChange(e)}
            />

            <FormInput
              id="2"
              name="lastname"
              type="text"
              placeholder="Last Name"
              errorMessage="Second name should be alphabets and can't contain any special character!"
              label="Last Name"
              pattern="^[A-Za-z]+$"
              required="true"
              value={values["lastname"]}
              onChange={(e) => onChange(e)}
            />
            <FormInput
              id="3"
              name="birthday"
              type="date"
              placeholder="Birthday"
              errorMessage=""
              label="Birthday"
              value={values["birthday"]}
              onChange={(e) => onChange(e)}
            />
            <label>Hobbies</label>
            <CreatableSelect //CreatableSelect library imported from react-select.The Creatable component enables users to create new options along with choosing existing options.
              onChange={(e) => {
                test(e);
              }}
              className="hobbiesselect"
              isMulti //this library is multi-select and we can choose multi-hobbies(more than one).
              isClearable
              options={hoptions} //pre-defined options
            />
            <FormInput
              id="4"
              name="city"
              type="text"
              placeholder="City"
              errorMessage=""
              label="City"
              value={values["city"]}
              onChange={(e) => onChange(e)}
            />
            <label>Gender</label>
            <select
              name="gender"
              onChange={(e) => {
                onChange(e);
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            {setValues}
            <br />

            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
