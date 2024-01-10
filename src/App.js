import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import VideoContainer from './components/VideoContainer';
import SearchPage from './components/SearchPage';


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
    }]
}])


function App() {
  return (
    <Provider store={store}>
      <div className=' fixed'>
        <RouterProvider router={appRouter}>
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
