import './Certificate.scss'
import ser1 from '../../assets/images/sertificat1.svg'
import ser2 from '../../assets/images/sertificat2.svg'
import ser3 from '../../assets/images/sertificat3.svg'
import ser4 from '../../assets/images/sertificat4.svg'
import ser5 from '../../assets/images/sertificat5.svg'
import ser6 from '../../assets/images/sertificat6.svg'
import ser7 from '../../assets/images/sertificat7.svg'
import ser8 from '../../assets/images/sertificat8.svg'
import ser9 from '../../assets/images/sertificat9.svg'
import ser10 from '../../assets/images/sertificat10.svg'
import ser11 from '../../assets/images/sertificat11.svg'
import ser12 from '../../assets/images/sertificat12.svg'
import ser13 from '../../assets/images/sertificat13.svg'
import ser14 from '../../assets/images/sertificat14.svg'
import ser15 from '../../assets/images/sertificat15.svg'
import ser16 from '../../assets/images/sertificat16.svg'
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
