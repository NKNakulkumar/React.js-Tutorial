import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { CounterAdvanced } from './counter_advanced'
import { Datetime } from './date'
// import { Toooglenew } from './tooglenewswitch'


// import { Todo } from './components/RTK/RTKTodo'
// import { Posts } from './components/axios_Fullstack/Posts'
// import { Tanstackmain } from './components/TanStackQuery/Tanstack'
// import { Axios } from './components/axios'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import { Home } from './components/Router_project/Home'
// import { About } from './components/Router_project/About'
// import { Movies } from './components/Router_project/Movies'
// import { Contact, contactData } from './components/Router_project/Contact'
// import { AppLayout } from './components/Router_project/AppLayout'
// import { ErrorPage } from './components/Router_project/Errorpage'
// import { getmoviesdata } from './components/Router_project/Getapidata'
// import { MovieDetails } from './components/Router_project/MovieDetails'
// import { getmoviesdetails } from './components/Router_project/Getmoviedetail'

// import Usecallback from './components/Hooks/Memo/Usecallback'
// import { Usememo } from './components/Hooks/Memo/UseMemo'
// import { Reactmemo } from './components/Hooks/Memo/Reactmemo'
// import { ReducerComponent } from './components/Hooks/UseReducer'
// import { LightDark, ThemeProvider } from './components/Hooks/ContextAPI/DarkLight'

// import { Bioprovider } from './components/Hooks/ContextAPI'
// import { Home } from './components/Hooks/ContextAPI/Home'
// import { About } from './components/Hooks/ContextAPI/About'
// import { Services } from './components/Hooks/ContextAPI/Services'
// import { Useid } from './components/Hooks/Useid'
// import { Forwardref } from './components/Hooks/useRef/Forwaedref'
// import { Useref } from './components/Hooks/useRef'
// import { Pokemoncard } from './components/Pokemon project/Pokemon'
// import { Fetchapi } from './components/Hooks/useEffect/FetchApi'
// import { Cleanup } from './components/Hooks/useEffect/Cleanupfun'
// import { UseEffectChallange } from './components/Hooks/useEffect/UseEffect_challenge'
// import {ReactuseEffect} from './components/Hooks/useEffect/index';


// import { ShortCircit } from './components/ShortCircuit'
// import { Item } from './components/usereducer&contextapi/item'
// import { Cart } from './components/usereducer&contextapi/Cart'
// import { CartProvider } from './components/usereducer&contextapi/Cart_context'
// import { Registrationform } from './components/Registrationform'
// import { Todo } from './components/project1/Todo/Todo'
// import { Tooglecomponent } from './components/project1/Togglebutton'
// import { Liftstateup } from './components/LiftstateUp'
// import { DerivedState } from './components/DerivedState'
// import { State } from './components/Hooks/State'
// import { Eventpropagation } from './components/EventPropagation'
// import { EventProps } from './components/EventProps'
// import { EventHandling } from './components/EventHandling'
// import { Netflix } from './components/Netflix'
// import { List } from './components/List'
// import './components/Netflix.module.css'

function App() {

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout/>,
//     errorElement:<ErrorPage/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>,
//       },
//       {
//         path:"/about",
//         element:<About/>,
//       },
//       {
//         path:"/movies",
//         element:<Movies/>,
//         loader: getmoviesdata,
//       },
//       {
//         path:"/movies/:movieId",
//         element:<MovieDetails/>,
//         loader:getmoviesdetails // params details and routing 
//       },
//       {
//         path:"/contact",
//         element:<Contact/>,
//         action:contactData,
//       },
//     ],
//   },
// ]) ;
  return (
    <> 
    {/* <Todo/> */}
       {/* RTK */}
    {/* <CartProvider>
    <Item name="Mackbook" price="20000"/>
    <Item name="Pendrive" price="2000"/>
    <Item name="Phone" price="7000"/>
    <Cart/>
    </CartProvider> */}
    {/* <Tanstackmain/> */}
    {/* <Posts/> */}
    {/* <Axios/> */}
      {/* <RouterProvider router={router} /> */}
 
{/* React-router-dom  */}
  {/* <Usememo/> */}
  {/* <Usecallback/> */}
  {/* <Reactmemo/> */}
  {/* <ReducerComponent/> */}
  {/* <ThemeProvider>
  <LightDark/>
  </ThemeProvider> */}
    
  {/* <Bioprovider>
  <Home/>
  <About/>
  <Services/>
  </Bioprovider> */}
    
    {/* <Useid/> */}
    {/* <Forwardref/> */}
    {/* <Useref/> */}
    {/* <Pokemoncard/> */}
    {/* <Fetchapi/> */}
    {/* <Cleanup/> */}
    {/* <UseEffectChallange/> */}
    {/* < ReactuseEffect/> */}
    {/* <Todo/> */}
    {/* <Tooglecomponent/> */}
    {/* <Liftstateup/> */}
    {/* <ShortCircit/> */}
    {/* <Registrationform/> */}
    {/* <DerivedState/> */}
    {/* <State/> */}
    {/* <Eventpropagation/> */}
    {/* <EventProps/> */}
     {/* <EventHandling/> */}
      {/* <Netflix/> */}
      {/* <List/>  */}
      {/* <Toooglenew/> */}
      {/* <CounterAdvanced/> */}
      <Datetime/>
    </>
  )
}

export default App
