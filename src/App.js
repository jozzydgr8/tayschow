import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Index } from './Pages/Index';
import { useEffect } from 'react';

function App() {
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
