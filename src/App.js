import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Index } from './Pages/Index';
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import {UseContextData} from './context/UseContextData';
import {UseContextAuth} from './context/UseContextAuth';
import { SignUser } from './Pages/SignUser';
import { Cart } from './Pages/Cart';



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

const isGitHubPages = window.location.hostname.includes("github.io");
if (!isGitHubPages) { // Enable App Check only if not on Edge or GitHub Pages
  initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(process.env.REACT_APP_appcheck),
      isTokenAutoRefreshEnabled: true
  });
}

// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.REACT_APP_appcheck),
//   isTokenAutoRefreshEnabled: true 
// });
const auth = getAuth();
const provider = new GoogleAuthProvider();
//db
const db = getFirestore();
const userRef = collection(db, 'user')
export {auth, provider, userRef}
function App() {

  //import 
  const {dispatch,loading} = UseContextData();
  const {dispatch: dis, user, loading:load} = UseContextAuth();
  //auth
  useEffect(()=>{
    dis({type:'loading', payload:true})
    const authenticate = async ()=>{
      try{
        const unsubscribe = onAuthStateChanged(auth, user=>{
          if(user){
            const user = auth.currentUser;
            dis({type:'signUser', payload:user});
            console.log('signed in')
          }else{
            dis({type:'signUser', payload:null});
            console.log('logged out')
          }

          // const userID = user && user.uid
          // const q = userID != process.env.REACT_APP_acceptedID ? query(orderRef, where('userID', '==', userID)) : orderRef;
          // const unSubscribeOrder = onSnapshot(q, (querySnapshot) => {
          //   const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          //   dispatch({type:'getOrder', payload:dataList})
            
          // }, (error) => {
          //   console.error('Error fetching data: ', error);
          // });
        })
      }catch(error){
        console.error(error)
      }
    }

    authenticate();

  
        
    
    return ()=>{
      authenticate();
    }
  },[]);



  //data
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
        <Route path='cart' element={<Cart/>} />

        </Route>
        <Route path='/tayschow/login' element={<SignUser/>}  >

        </Route>
        <Route path='/login' element={<SignUser/>}  >

        </Route>


        <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='cart' element={<Cart/>} />
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
