import './Trust.scss';
import trust1 from '../../assets/images/trust1.png';
import trust2 from '../../assets/images/trust2.png';
import trust3 from '../../assets/images/trust3.png';
import trust4 from '../../assets/images/trust4.png';
const Trust = () => {
	return (
		<div className='me_page'>
			<div className='container'>
				<h2 className='trust_title'>Почему мне можно доверять</h2>
				<div className='trust_box'>
					<div className='tr_card'>
						<img src={trust1} alt='trust' />
						<p>
							1. Профессионализм: Я обладаю высоким уровнем профессионализма в
							своей оюласти. Я знаю свой бизнес и имею необходимые навыки, чтобы
							достигать новых успехов.
						</p>
					</div>
                    <div className='tr_card'>
						<img src={trust2} alt='trust' />
						<p>
						3. Ответственность: Я несу полную ответственность , и готов принимать решения, которые могут повлиять на успех. Я забочусь о своих клиентах, своих сотрудниках и своих партнерах, и готоа приложить максимум усилий, чтобы добиться результатов.
						</p>
					</div>
                    <div className='tr_card'>
						<img src={trust3} alt='trust' />
						<p className='second'>
						2. Целеустремленность: Я очень целеустремленный человек, который знает , чего я хочу, и готов работать усердно, чтобы достичь своих целей. Я стремлюсь к успеху и готов принимать риски, чтобы достичь результата.

						</p>
					</div>
                    <div className='tr_card'>
						<img src={trust4} alt='trust' />
						<p>
						4. Инновационность: Я нахожу в постоянном поиске идей и возможностей для улучшения. Я готов экспериментировать и пробовать новые подходы, чтобы добиться лучшего результата.

						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trust;
