import React, { useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Login from './app/components/Login'
import {login, logout, selectUser} from './features/userSlice'
import {useSelector, useDispatch } from 'react-redux'
import Chat from './app/components/Chat'
import Sidebar from './app/components/Sidebar'
import {auth} from './app/components/firebase'


function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser)
      if (authUser){
        dispatch(login ({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))


      } else {
        dispatch(logout())

      }
    })
  }, [dispatch])
  return (
    <Wrapper>
      { user ? (
        <>

          <Sidebar />
          <Chat />
        </>
      ): (
        <Login />
      )} 
      
     
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`