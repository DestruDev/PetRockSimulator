import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Page1 from './pages/Page1' 
import Page2 from './pages/Page2'  
import Page3 from './pages/Page3'  
import Page4 from './pages/Page4'  

function App() {
  return (
    <div>
      {/* Top Navbar */}
      <header style={{ 
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #ccc',
        padding: '1rem',
        position: 'sticky', 
        top: 0,
        zIndex: 1000 
      }}>
        <nav>
          {[['/', 'Home'], ['/page1', 'Page 1'], ['/page2', 'Page 2'], ['/page3', 'Page 3'], ['/page4', 'Page 4']].map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              style={({ isActive }) => ({
                marginRight: '1rem',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderBottom: isActive ? '2px solid blue' : '2px solid transparent',
                color: isActive ? 'blue' : 'black',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main style={{ padding: '2rem' }}>
        <h1>Pet Rock Simulator</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
