import { GridBackgroundDemo } from '../components/GridBackgroundDemo';
import { AuroraBackgroundDemo } from '../components/AuroraBackgroundDemo';
import { NavbarDemo } from '../components/NavbarDemo';

export const HomePage = () => {
	return (
		<>
			<div>
				<NavbarDemo />
				<AuroraBackgroundDemo />
				<GridBackgroundDemo />
			</div>
		</>
	);
};
