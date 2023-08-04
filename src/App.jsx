import Header from './Component/Header'
import './App.css'
import Image_advt from './Component/Image_advt'
import Product from './Component/Product'
import Footer from './Component/Footer'


function App() {

  return (
    <div className='w-full h-[2800px] flex flex-col justify-between'>
      <div className="">
        <Header/>
        <Image_advt />
        <Product />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default App
