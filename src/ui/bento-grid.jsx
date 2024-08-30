/* eslint-disable react/prop-types */
import { cn } from '../utils/utils';

export const BentoGrid = ({ className, children }) => {
	return (
		<div
			className={cn(
				'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
				className,
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	image, // URL de la imagen de fondo normal
	hoverImage, // URL de la imagen de fondo al hacer hover
}) => {
	return (
		<div
			className={cn(
				'group w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800',
				'bg-cover bg-center',
				'transition-all duration-500 hover:shadow-xl group/bento row-span-1 rounded-xl group/bento shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4',
				className,
			)}
			style={{
				backgroundImage: `url(${image})`, // Aplica la imagen de fondo
			}}
		>
			{/* Pseudo-elemento para el hover */}
			<div
				className='absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'
				style={{
					backgroundImage: `url(${hoverImage})`, // Aplica el GIF al hacer hover
				}}
			></div>

			{header}
			<div className='group-hover/bento:translate-x-2 transition duration-200'>
				{icon}
				<div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
					{title}
				</div>
				<div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
					{description}
				</div>
			</div>
		</div>
	);
};
