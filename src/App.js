import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Index } from './Pages/Index';
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth } from 'firebase/auth';



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//appcheeck app cjeck
window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(process.env.REACT_APP_appcheck),
  isTokenAutoRefreshEnabled: true // This automatically refreshes App Check tokens
});
export const auth = getAuth();
function App() {

  //auth


  //animation
  useEffect(()=>{
    const animation = ()=>{
      var containers = document.querySelectorAll('.aSection');
      var secondCont = document.querySelectorAll('.fSection');
      var windowHeight = window.innerHeight;
      secondCont.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationRight')
        }

      })
      containers.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimation')
        }

      })
    }
    window.addEventListener('scroll', animation);
  },[])
  const router = createBrowserRouter(
      createRoutesFromChildren(
        <>
        <Route path='/tayschow' element={<Layout/>}>
        <Route index element={<Index/>}/>

        </Route>

        <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        </Route>

        </>
        
      )
  )
  return (
    
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
