import { GridBackgroundDemo } from '../components/GridBackgroundDemo';
import { AuroraBackgroundDemo } from '../components/AuroraBackgroundDemo';
import { BentoGridDemo } from '../components/BentoGridDemo';

export const HomePage = () => {
	return (
		<>
			<AuroraBackgroundDemo />
			<GridBackgroundDemo>
				<BentoGridDemo />
			</GridBackgroundDemo>
		</>
	);
};
