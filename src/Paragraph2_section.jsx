import './App.css'
import Photo2 from "./assets/Combined Shape (4).svg"
import Photo3 from "./assets/Clock.svg"



function Paragraph2_section() {
  return (
    <>
    <div className='paragraph_container'>
        <div className='icon_box'>
            <img src={Photo2} alt="" />
            <p className='paragraph2'>0.041 ETH</p>
        </div>
        <div className='icon_box'>
            <img src={Photo3} alt="" />
            <p className='paragraph3'>3 days left</p>
        </div>
    </div>
    </>
  )

}

export default  Paragraph2_section
