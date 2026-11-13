import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Colors from './Components/Colors'
import Spacing from './Components/Spacing'
import Width from './Components/Width'
import Height from './Components/Height'
import Positions from './Components/Positions'
import Container_class from './Components/Container_class'
import Background_classes from './Components/Background_classes'
import ResponsiceDesi from './Components/ResponsiceDesi'
import Columns from './Components/Columns'
import Flex from './Components/Flex'
import Grid_class from './Components/Grid_class'
import Animations from './Components/Animations'


const Home = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Tailwind CSS Practice!</h1>
      <p className="text-gray-300">
        Click on <span className="text-emerald-400 font-semibold">Width</span>, <span className="text-emerald-400 font-semibold">Height</span>, <span className="text-emerald-400 font-semibold">Colors</span>, or <span className="text-emerald-400 font-semibold">Spacing</span> in the Navbar to view each component page.
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/width" element={<Width />} />
          <Route path="/Width" element={<Width />} />
          <Route path="/height" element={<Height />} />
          <Route path="/Height" element={<Height />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/Colors" element={<Colors />} />
          <Route path="/spacing" element={<Spacing />} />
          <Route path="/Spacing" element={<Spacing />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/Positions" element={<Positions />} />
          <Route path="/container" element={<Container_class />} />
          <Route path="/Container_class" element={<Container_class />} />
          <Route path="/background" element={<Background_classes />} />
          <Route path="/Background_classes" element={<Background_classes />} />
          <Route path="/responsive" element={<ResponsiceDesi />} />
          <Route path="/ResponsiveDesign" element={<ResponsiceDesi />} />
          <Route path="/columns" element={<Columns />} />
          <Route path="/Columns" element={<Columns />} />
          <Route path="/flex" element={<Flex />} />
          <Route path="/Flex" element={<Flex />} />
          <Route path="/grid" element={<Grid_class />} />
          <Route path="/Grid_class" element={<Grid_class />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/Animations" element={<Animations />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
