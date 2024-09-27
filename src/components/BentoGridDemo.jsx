/* eslint-disable no-undef */
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import {
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconBrandGit,
} from '@tabler/icons-react';

// Importa todas las imágenes y GIFs del directorio 'img'
const images = import.meta.glob('../img/**/*.{png,jpg,jpeg,gif}', {
	eager: true,
});

export function BentoGridDemo() {
	return (
		<BentoGrid className='max-w-4xl mx-auto'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					icon={item.icon}
					image={item.image} // Pasa la URL de la imagen normal
					hoverImage={item.hoverImage} // Pasa la URL del GIF
				/>
			))}
		</BentoGrid>
	);
}

const getImageUrl = name => {
	const path = `../img/${name}`;
	return images[path]?.default || '';
};

const items = [
	{
		title: 'The Dawn of Innovation',
		description: 'Explore the birth of groundbreaking ideas and inventions.',
		icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
		image: getImageUrl('ProntoSalud.png'),
		hoverImage:
			'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGxmNWlqeGxtYWMzZWN2MnR6dGs1NHJ0MTgwbDEyN2YxZjlxcG9yNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHWcKwyZKYX7g6rS3R/giphy.gif',
	},
	{
		title: 'The Digital Revolution',
		description: 'Dive into the transformative power of technology.',
		icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
		image: getImageUrl('dev.jpg'),
		hoverImage:
			'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGxmNWlqeGxtYWMzZWN2MnR6dGs1NHJ0MTgwbDEyN2YxZjlxcG9yNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHWcKwyZKYX7g6rS3R/giphy.gif',
	},
	{
		title: 'The Art of Design',
		description: 'Discover the beauty of thoughtful and functional design.',
		icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
		image: getImageUrl('dev.jpg'),
		hoverImage:
			'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGxmNWlqeGxtYWMzZWN2MnR6dGs1NHJ0MTgwbDEyN2YxZjlxcG9yNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHWcKwyZKYX7g6rS3R/giphy.gif',
	},
	{
		title: 'The Art of Design',
		description: 'Discover the beauty of thoughtful and functional design.',
		icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
		image: getImageUrl('dev.jpg'),
		hoverImage:
			'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGxmNWlqeGxtYWMzZWN2MnR6dGs1NHJ0MTgwbDEyN2YxZjlxcG9yNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHWcKwyZKYX7g6rS3R/giphy.gif',
	},
	{
		title: 'The Dawn of Innovation',
		description: 'Explore the birth of groundbreaking ideas and inventions.',
		icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
		image: getImageUrl('dev.jpg'),
		hoverImage:
			'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGxmNWlqeGxtYWMzZWN2MnR6dGs1NHJ0MTgwbDEyN2YxZjlxcG9yNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHWcKwyZKYX7g6rS3R/giphy.gif',
	},
	{
		title: 'The Digital Revolution',
		description: 'Dive into the transformative power of technology.',
		icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
		image: getImageUrl('dev.jpg'),
		hoverImage:
			'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGxmNWlqeGxtYWMzZWN2MnR6dGs1NHJ0MTgwbDEyN2YxZjlxcG9yNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHWcKwyZKYX7g6rS3R/giphy.gif',
	},
];
