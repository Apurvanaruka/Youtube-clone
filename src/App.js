import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import VideoContainer from './components/VideoContainer';


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
  }]
}])


function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
