import { BentoGridDemo } from '../components/BentoGridDemo';
import { HeroParallaxDemo } from '../components/HeroParallaxDemo';

export const ProyectosPage = () => {
	return (
		<>
			<div>
				<HeroParallaxDemo />
				<div className='p-5'>
					<BentoGridDemo />
				</div>
			</div>
		</>
	);
};
