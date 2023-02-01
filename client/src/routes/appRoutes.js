import SignIn from "../components/signin-form/signIn";
import { Route, Routes } from "react-router-dom";
import SignUp from "../components/signup-form/signUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/posts' element={<SignIn />} />
      <Route path='/users' element={<SignIn />} />
      <Route path='/users/:id' element={<SignIn />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signout' element={<SignIn />} />
    </Routes>
  );
}

export default AppRoutes;
