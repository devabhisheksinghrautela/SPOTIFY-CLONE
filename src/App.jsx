import Player from './Components/Player'
import Sidebar from './Components/Sidebar'
import Display from './Components/Display'

const App = () => {
  return (
    <div className= 'h-screen bg-black'>
      <div className= 'h-[90%] flex'>
        <Sidebar />
        <Display/>

      </div>
      
     <Player />
       </div>
  )
}

export default App