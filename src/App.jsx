import { ThreeDCardDemo } from './components/ThreeDCardDemo';
import { BentoGridDemo } from './components/BentoGridDemo';
import { HeroParallaxDemo } from './components/HeroParallaxDemo';
import { AuroraBackgroundDemo } from './components/AuroraBackgroundDemo';
import { NavbarDemo } from './components/NavbarDemo';
import { TextGenerateEffectDemo } from './components/TextGenerateEffectDemo';

function App() {
	return (
		<>
			<div className='bg-black'>
				<div>
					<NavbarDemo />
				</div>
				<div>
					<AuroraBackgroundDemo />
				</div>
				<div className='flex justify-center'>
					<ThreeDCardDemo />
					<ThreeDCardDemo />
				</div>
				<div className='p-5'>
					<BentoGridDemo />
				</div>
				<div>
					<HeroParallaxDemo />
				</div>
				<div className='h-[500px] w-full p-10 flex justify-center items-center text-center'>
					<TextGenerateEffectDemo />
				</div>
			</div>
		</>
	);
}

export default App;
