import { Route, Routes } from 'react-router-dom'
import Home from './app/home'
import { Footer, TopNavbar } from './components/dev/core'
import ResourcesPage from './app/resources'

function App() {
  return (
    <main>
      <div className='w-full'>
        <TopNavbar />
      </div>
      <Routes>
        <Route
          {...{
            Component: Home,
            path: '/',
          }}
        ></Route>
        <Route
          {...{
            Component: ResourcesPage,
            path: '/resources/:id',
          }}
        ></Route>
      </Routes>
      <div className='w-full'>
        <Footer />
      </div>
    </main>
  )
}

export default App
