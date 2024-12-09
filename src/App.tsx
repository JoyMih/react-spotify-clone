// import { useState } from 'react'
import './App.css'
import Display from './components/Display';
import MediaPlayer from './components/MediaPlayer';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <div className='flex'>
        < Sidebar />
        < Display />
      </div>
      < MediaPlayer />
    </>
  )
}

export default App;
