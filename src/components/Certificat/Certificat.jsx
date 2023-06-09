import './Certificate.scss'
import ser1 from '../../assets/images/sertificat1.png'
import ser2 from '../../assets/images/sertificat2.png'
import ser3 from '../../assets/images/sertificat3.png'
import ser4 from '../../assets/images/sertificat4.png'
import ser5 from '../../assets/images/sertificat5.png'
import ser6 from '../../assets/images/sertificat6.png'
import ser7 from '../../assets/images/sertificat7.png'
import ser8 from '../../assets/images/sertificat8.png'
import ser9 from '../../assets/images/sertificat9.png'
import ser10 from '../../assets/images/sertificat10.png'
import ser11 from '../../assets/images/sertificat11.png'
import ser12 from '../../assets/images/sertificat12.png'
import ser13 from '../../assets/images/sertificat13.png'
import ser14 from '../../assets/images/sertificat14.png'
import ser15 from '../../assets/images/sertificat15.png'
import ser16 from '../../assets/images/sertificat16.png'
import CarouselCertificat from '../CarouselCertificat/CarouselCertificat'
const Certificat = () => {
  return (
    <div className='me_page'>
    <div className='container'>
<h3 className='certificate_title'>Сертификаты</h3>
<div className="mobile_serti">

        <CarouselCertificat/>
</div>
        <div className="certi_box">
          <div className="serti_card">
            <img src={ser1} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser2} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser3} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser4} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser5} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser6} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser7} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser8} alt="" />
          </div>
        
          <div className="serti_card">
            <img src={ser10} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser11} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser12} alt="" />
          </div>
          <div className="serti_card">
            <img src={ser13} alt="" />
          </div>
 
        </div>
    </div>
</div>
  )
}

export default Certificat
