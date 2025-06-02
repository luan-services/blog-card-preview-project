import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'

function App() {

  return (
    <>
      <div  className="min-h-screen bg-custom-primary font-figtree"> 
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
