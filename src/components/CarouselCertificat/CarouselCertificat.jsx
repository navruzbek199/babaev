import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ser1 from '../../assets/images/sertificat1.png';
import ser2 from '../../assets/images/sertificat2.png';
import ser3 from '../../assets/images/sertificat3.png';
import ser4 from '../../assets/images/sertificat4.png';
import ser5 from '../../assets/images/sertificat5.png';
import ser6 from '../../assets/images/sertificat6.png';
import ser7 from '../../assets/images/sertificat7.png';
import ser8 from '../../assets/images/sertificat8.png';
import ser9 from '../../assets/images/sertificat9.png';
import ser10 from '../../assets/images/sertificat10.png';
import ser11 from '../../assets/images/sertificat11.png';
import ser12 from '../../assets/images/sertificat12.png';
import ser13 from '../../assets/images/sertificat13.png';
import ser14 from '../../assets/images/sertificat14.png';
import ser15 from '../../assets/images/sertificat15.png';
import ser16 from '../../assets/images/sertificat16.png';
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
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					breakpoints={{
						'@0.00': {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						'@0.75': {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						'@1.00': {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						'@1.50': {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
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
