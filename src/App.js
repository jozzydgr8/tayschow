import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Index } from './Pages/Index';

function App() {
  const router = createBrowserRouter(
      createRoutesFromChildren(
        <>
        <Route path='/taykitchen' element={<Layout/>}>
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
