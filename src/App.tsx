import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Buttons } from './Components/Buttons';
import { Inputs } from './Components/Inputs';
import { Menu } from './Components/Menu';
import { LogIn } from './Components/LogIn';
import { SignUp } from './Components/SignUp';
import { PrivateRoute } from './Components/PrivateRoute';
import { CreateNewElement } from 'Components/CreateNewElement';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { getButtonAction } from 'ducks/Buttons/actions';
import { urlBtn, urlCart, urlInput } from 'Consts';
import { getInputAction } from 'ducks/Inputs/actions';
import { getElementsInCartAction } from 'ducks/Cart/actions';
import { Cart } from 'Components/Cart';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getButtonAction(urlBtn));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getInputAction(urlInput));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getElementsInCartAction(urlCart));
  }, [dispatch]);
  return (
    <Router>
      <div className='container_app'>
        <h2 className='header_app'>
          create <br />
          your <br />
<<<<<<< HEAD
          element
=======
          element . . .
>>>>>>> d47a339 (save local code before deploying)
        </h2>

        <Routes>
          <Route path='/logIn' element={<LogIn />} />
          <Route path='/signUp' element={<SignUp />} />

          <Route element={<PrivateRoute />}>
            <Route path='/'>
              <Route index element={<Menu />} />
              <Route path='buttons'>
                <Route index element={<Buttons />} />
                <Route
                  path='createElement'
                  element={<CreateNewElement title='button' />}
                />
              </Route>
              <Route path='inputs'>
                <Route index element={<Inputs />} />
                <Route
                  path='createElement'
                  element={<CreateNewElement title='input' />}
                />
              </Route>
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
