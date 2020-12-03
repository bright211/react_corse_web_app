import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledForm } from "./styles";
import { Input, Button, Select } from "../../atoms";
import { useInput } from "../../../hooks";
import { auth, realDb } from "../../../api";
import {useDispatch} from 'react-redux'
import * as Types from '../../../store/types'

const LoginForm = () => {
  const [state, setState] = useState({
    schools: [],
  });
  const fullName = useInput("", "Please enter your fullName");
  const email = useInput("", "Please enter your email");
  const password = useInput("", "Please enter your password");
  const school = useInput("", "Please select your school");
  const phone = useInput("", "Please enter your phone", "onlyNumber");
  const router = useHistory();
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("App -> user", user);
      if (user) {
        localStorage.setItem("@USER", user.uid);
        router.push("/home");
      }
    });
    realDb.ref("/schools/").on("value", (data) => {
      const temp = [];
      if (data.val()) {
        Object.keys(data.val()).map((item, index) => {
          const name = data.val()[item].name;
          const id = item;
          temp.push({ value: id, label: name });
        });
        setState({ ...state, schools: temp });
      }
    });
  }, []);
  const FormSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(user=>{
        console.log(user.user.uid)
        realDb.ref(`/users/${school.value}`).push({
          name: fullName.value,
          password: password.value,
          email: email.value,
          uid: user.user.uid,
          phone: phone.value,
          school:school.value
        })
        dispatch({type:Types.SET_DATA, payload:{
          name: fullName.value,
          uid: user.user.uid,
          password: password.value,
          email: email.value,
          phone: phone.value,
          school:school.value
        }})
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <StyledForm onSubmit={FormSubmit}>
      <Input
        label="Full Name"
        type="text"
        required
        placeholder="Your Fullname…"
        value={fullName.value}
        onChange={fullName.onChange}
        onInvalid={fullName.onInvalid}
      />
      <Input
        label="Email"
        type="email"
        required
        placeholder="Your email…"
        value={email.value}
        onChange={email.onChange}
        onInvalid={email.onInvalid}
      />
      <Input
        label="Password"
        type="password"
        required
        placeholder="Your password…"
        value={password.value}
        onChange={password.onChange}
        onInvalid={password.onInvalid}
      />
      <Input
        label="Phone number"
        type="tel"
        required
        placeholder="Phone number..."
        value={phone.value}
        onChange={phone.onChange}
        onInvalid={phone.onInvalid}
        pattern="^[0-9-+\s()]*$"
      />
      <Select
        label="School"
        required
        firstValue=""
        onChange={school.onChange}
        onInvalid={school.onInvalid}
      >
        {state.schools.map((item, index) => (
          <option value={item.label} key={index}>
            {item.label}
          </option>
        ))}
      </Select>
      <Button m="20px 0 0 0">Register</Button>
    </StyledForm>
  );
};

export default LoginForm;
