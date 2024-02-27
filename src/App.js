import './App.css';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import VideoContainer from './components/VideoContainer';
import SearchPage from './components/SearchPage';
import Shorts from './components/Shorts';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <VideoContainer />
    },
    {
      path: 'watch',
      element: <WatchVideo />
    },
    {
      path: 'searchpage',
      element: <SearchPage />
    },
    {
      path: 'shorts',
      element: <Shorts />
    }
  ]
}])


function App() {


  return (
      <div className='fixed'>
        <RouterProvider router={appRouter}>
        </RouterProvider>
      </div>
   
  );
}

export default App;
