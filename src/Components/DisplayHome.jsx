import Navbar from './Navbar'
import { albumsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import {songsData} from '../assets/assets'
const DisplayHome = () => {
  return (
   <>
   <Navbar/>
   <div className= 'mb-4'>
    <h1 className= 'my-5 font-bold text 2x1'>Featured Charts</h1>
    <div className= 'flex overflow-auto'>
    {albumsData.map((item, index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
   </div>
   <div className= 'mb-4'>
    <h1 className= 'my-5 font-bold text 2x1'>Today's Biggest Hits</h1>
    <div className= 'flex overflow-auto'>
    {songsData.map((item, index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
   </div>
   </>
  )
}

export default DisplayHome