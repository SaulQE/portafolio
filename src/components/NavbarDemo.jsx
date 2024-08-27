/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from '../ui/navbar-menu';
import { cn } from '../utils/utils';
import { Link } from 'react-router-dom';

export function NavbarDemo() {
	return (
		<div className='relative w-full flex items-center justify-center'>
			<Navbar className='top-2' />
		</div>
	);
}

function Navbar({ className }) {
	const [active, setActive] = useState(null);
	return (
		<div
			className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}
		>
			<Menu setActive={setActive}>
				<MenuItem setActive={setActive} active={active} item='Servicios'>
					<div className='flex flex-col space-y-4 text-sm'>
						<HoveredLink href='/web-dev'>Desarrollo web</HoveredLink>
						<HoveredLink href='/interface-design'>
							Diseño de interfaz
						</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item='Proyectos '>
					<div className='text-sm grid grid-cols-2 gap-10 p-4'>
						<ProductItem
							title='Tienda de Ropa'
							href='https://algochurn.com'
							src='https://assets.aceternity.com/demos/algochurn.webp'
							description='Prepare for tech interviews like never before.'
						/>
						<ProductItem
							title='Pronto Salud'
							href='https://prontosalud.com.pe'
							src='https://assets.aceternity.com/demos/tailwindmasterkit.webp'
							description='Production ready Tailwind css components for your next project'
						/>
						<ProductItem
							title='Moonbeam'
							href='https://gomoonbeam.com'
							src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png'
							description='Never write from scratch again. Go from idea to blog in minutes.'
						/>
						<ProductItem
							title='Rogue'
							href='https://userogue.com'
							src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png'
							description='Respond to government RFPs, RFIs and RFQs 10x faster using AI'
						/>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item='Sobre Mí'>
					<div className='flex flex-col space-y-4 text-sm'>
						<HoveredLink href='/pasatiempo'>Pasatiempo</HoveredLink>
						<HoveredLink href='/habilidades'>Habilidades</HoveredLink>
						<HoveredLink href='/descargar-cv'>Descargar CV</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} item='Blog'>
					<Link to='/blog' className='hovered-link-class'>
						Blog
					</Link>
				</MenuItem>
				<MenuItem setActive={setActive} item='Contacto' />
			</Menu>
		</div>
	);
}
