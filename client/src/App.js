import { useContext,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'
import axios from 'axios'
import Body from "./routes";


const RootContainer = styled.main`
  width: 99vw;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
`
const Container = styled.section`
  max-width: 1366px;
  margin: 0 auto;
`



function App() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
        console.log("persistent")
      }
      getToken()
    }
  },[auth.isLogged, dispatch])
  

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RootContainer>
          <Container>
            <Body />
          </Container>
        </RootContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
