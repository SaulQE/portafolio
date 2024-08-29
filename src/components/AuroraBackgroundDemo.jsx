import { motion } from 'framer-motion';
import { AuroraBackground } from '../ui/aurora-background';
import { Link } from 'react-router-dom';

export function AuroraBackgroundDemo() {
	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className='relative flex flex-col gap-4 items-center justify-center px-4'
			>
				<div className='font-extralight text-base md:text-2xl dark:text-neutral-200 pt-2'>
					Portafolio en desarrollo...
				</div>
				<div className='text-3xl md:text-6xl font-bold dark:text-white text-center'>
					Saúl Andres Quispesucso Esquivel {/* Lorem ipsum dolor sit amet. */}
				</div>
				<p className='text-lg md:text-3xl mb-6 text-gray-400'>
					DESARROLLADOR DE SOFTWARE {/* Lorem ipsum dolor  */}
				</p>
				<Link
					to={'/proyectos'}
					className='bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2'
				>
					Mis proyectos
				</Link>
			</motion.div>
		</AuroraBackground>
	);
}
