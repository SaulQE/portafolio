import { IconClipboardCopy } from '@tabler/icons-react';
import { cn } from '../utils/utils';

export function CardDemo() {
	return (
		<div className='max-w-xs w-full'>
			<div
				className={cn(
					'group w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800',
					'bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover',
					// Preload hover image by setting it in a pseudo-element
					'before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]',
					'hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]',
					"hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
					'transition-all duration-500 hover:shadow-xl group/bento row-span-1 rounded-xl group/bento shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4',
				)}
			>
				<div className='text relative z-50'>
					<div className='group-hover/bento:translate-x-2 transition duration-200'>
						<IconClipboardCopy className='h-4 w-4 text-neutral-500' />
						<div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
							The Dawn of Innovation
						</div>
						<div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
							Explore the birth of groundbreaking ideas and inventions
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
