import { ThreeDCardDemo } from './components/ThreeDCardDemo';
import { BentoGridDemo } from './components/BentoGridDemo';
import { HeroParallaxDemo } from './components/HeroParallaxDemo';
import { AuroraBackgroundDemo } from './components/AuroraBackgroundDemo';

function App() {
	return (
		<>
			<div>
				<AuroraBackgroundDemo />
			</div>
			<div className='flex justify-center'>
				<ThreeDCardDemo />
				<ThreeDCardDemo />
			</div>
			<div className='bg-gray-500/10 p-5'>
				<BentoGridDemo />
			</div>
			<div>
				<HeroParallaxDemo />
			</div>
		</>
	);
}

export default App;
