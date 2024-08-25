import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { login,logOut } from './store/authSliced'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
 
const [loading,setLoading ]= useState(true)
const dispatch = useDispatch()

useEffect(() => {
  authService.getCurrentUser()
  .then((response) => {
    if(response){
    dispatch(login(login({userData: response})))
    }else{
      dispatch(logOut())
    }
  })
  // .catch((error) => { 
  //   console.log("App :: useEffect :: error", error)
  // })
  .finally(
    ()=>{
      setLoading(false)
    }
  )
}, [])
  return !loading ? <div>Loading...</div> : (<div className='min-h-screen'>
    <div className='w-full black'>
      <Header/>
      <main>
        {/* Outlet */}
      </main>
      <Footer/>
    </div>
  </div>)
}

export default App
