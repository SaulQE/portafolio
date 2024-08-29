import { GridBackgroundDemo } from '../components/GridBackgroundDemo';
import { AuroraBackgroundDemo } from '../components/AuroraBackgroundDemo';
import { BentoGridDemo } from '../components/BentoGridDemo';
import { FeaturesSectionDemo } from '../components/FeaturesSectionDemo';

export const HomePage = () => {
	return (
		<>
			<AuroraBackgroundDemo />
			<GridBackgroundDemo>
				<BentoGridDemo />
			</GridBackgroundDemo>
			<FeaturesSectionDemo />
		</>
	);
};
