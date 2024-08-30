/* eslint-disable no-undef */
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import {
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
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
		image:
			'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
		hoverImage:
			'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif',
	},
	{
		title: 'The Digital Revolution',
		description: 'Dive into the transformative power of technology.',
		icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
		image:
			'https://images.unsplash.com/photo-1724757090342-59922ed19e39?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
];
