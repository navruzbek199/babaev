import React from 'react';
import './MePage.scss';
import imgbro from '../../assets/images/bro.png';
import flag1 from '../../assets/images/Russia.png';
import flag2 from '../../assets/images/Farsi.png';
import flag6 from '../../assets/images/Gzech.png';
import flag3 from '../../assets/images/Turkey.png';
import flag4 from '../../assets/images/British.png';
import flag5 from '../../assets/images/Uzbekistan.png';
import dots from '../../assets/images/dots.png';
const MePage = () => {
	return (
		<div className='me_page'>
			<div className='container'>
				<div className='about_bro'>
					<div className='about_left'>
						<img className='bro_img' src={imgbro} alt='img' />
						<div className='mobile_name'>
							<p>Jurabek Babaev </p>
						</div>
						<p className='mobile_bio'></p>
						<div className='left_in'>
							<p>CEO - AstroLab Co.</p>
						</div>
						<div className='left_in'>
							<p>CEO - Juba Marketing Co.</p>
						</div>
						<div className='left_in'>
							<p>CEO & Travel Expert в Juba Travel</p>
						</div>
					</div>
					<div className='about_right'>
						<h2>Jurabek Babaev </h2>
						<p>
							Я Jurabek Babaev. Я предприниматель, маркетолог, тревел эксперт,
							учитель
						</p>

						<ul>
							<li>
								Изучал International Tourism Managment в Ташкентский
								государственный экономический университет .
							</li>
							<li>
								Изучал Докторантура "Менеджмент в сфере туризма" в Tashkent
								State University of Economics (TSUE)
							</li>
							<li>Учился в UJS PMP 30 - Project Management Professional .</li>
							<li>
								Изучал Hospitality & Tourism Management в Bukhara State
								University
							</li>
						</ul>
					</div>
				</div>
				<div className='about_lang'>
			
          <div className='lang_box'>
						<div>
							{' '}
							<p>Russian</p>
							<img src={flag1} alt='img' />
						</div>
						<img className='mydots' src={dots} alt='img' />
					</div>
          <div className='lang_box'>
						<div>
							{' '}
							<p>English</p>
							<img src={flag4} alt='img' />
						</div>
						<img className='mydots' src={dots} alt='img' />
					</div>
          <div className='lang_box'>
						<div>
							{' '}
							<p>Uzbek</p>
							<img src={flag5} alt='img' />
						</div>
						<img className='mydots' src={dots} alt='img' />
					</div>
      
          <div className='lang_box'>
						<div>
							{' '}
							<p>Czech</p>
							<img src={flag6} alt='img' />
						</div>
						<img className='mydots' src={dots} alt='img' />
					</div>
          <div className='lang_box'>
						<div>
							{' '}
							<p>Turkish</p>
							<img src={flag3} alt='img' />
						</div>
						<img className='mydots' src={dots} alt='img' />
					</div>
          <div className='lang_box'>
						<div>
							{' '}
							<p>Farsi</p>
							<img src={flag2} alt='img' />
						</div>
						<img className='mydots' src={dots} alt='img' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MePage;
