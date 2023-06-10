import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ser1 from '../../assets/images/sertificat1.svg';
import ser2 from '../../assets/images/sertificat2.svg';
import ser3 from '../../assets/images/sertificat3.svg';
import ser4 from '../../assets/images/sertificat4.svg';
import ser5 from '../../assets/images/sertificat5.svg';
import ser6 from '../../assets/images/sertificat6.svg';
import ser7 from '../../assets/images/sertificat7.svg';
import ser8 from '../../assets/images/sertificat8.svg';
import ser9 from '../../assets/images/sertificat9.svg';
import ser10 from '../../assets/images/sertificat10.svg';
import ser11 from '../../assets/images/sertificat11.svg';
import ser12 from '../../assets/images/sertificat12.svg';
import ser13 from '../../assets/images/sertificat13.svg';
import ser14 from '../../assets/images/sertificat14.svg';
import ser15 from '../../assets/images/sertificat15.svg';
import ser16 from '../../assets/images/sertificat16.svg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./CarouselCertificat.scss";

// import required modules
import { Pagination } from 'swiper';

export default function CarouselCertificat() {
	return (
		<>
			
			<div className='project_slide'>
				<Swiper
					modules={[Pagination]}
					spaceBetween={10}
					slidesPerView={1}
					pagination={{ clickable: true }}
			
				>
		<SwiperSlide>
					<div className='serti_card'>
						<img src={ser1} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser2} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser3} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser4} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser5} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser6} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser7} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser8} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser9} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser10} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser11} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser12} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser13} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser14} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser15} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='serti_card'>
						<img src={ser16} alt='' />
					</div>
				</SwiperSlide>
				</Swiper>
			</div>

		</>
	);
}
