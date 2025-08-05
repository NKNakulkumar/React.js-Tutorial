import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Practices } from './practice'
import App from './App.jsx'
// import { Profile } from './components/Profilecard' // practice
import { Provider } from 'react-redux'
import{ store} from './components/RTK/Store.jsx'; // Ensure this path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    {/* <Practices/> */}
    {/* <Profile/> */}
  </StrictMode>,
)
