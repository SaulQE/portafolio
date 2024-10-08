/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from '../ui/navbar-menu';
import { cn } from '../utils/utils';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import enproceso from '../img/en-proceso.jpg';
import prontosalud from '../img/ProntoSalud.png';

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
			className={cn(
				'fixed top-10 inset-x-0 w-full max-w-full md:max-w-2xl mx-auto z-50',
				className,
			)}
		>
			<Menu setActive={setActive}>
				<Link to='/'>
					<img src={logo} alt='Logo' className='h-6 pr-10 w-auto' />
				</Link>
				<MenuItem
					setActive={setActive}
					active={active}
					item='Inicio'
					linkTo={'/'}
				/>
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
							href='https://prontosalud.com.pe'
							src={enproceso}
							description='Prepare for tech interviews like never before.'
						/>
						<ProductItem
							title='Pronto Salud'
							href='https://prontosalud.com.pe'
							src={prontosalud}
							description='Production ready Tailwind css components for your next project'
						/>
						<ProductItem
							title='En proceso...'
							href='https://prontosalud.com.pe'
							src={enproceso}
							description='Never write from scratch again. Go from idea to blog in minutes.'
						/>
						<ProductItem
							title='En proceso...'
							href='https://prontosalud.com.pe'
							src={enproceso}
							description='Respond to government RFPs, RFIs and RFQs 10x faster using AI'
						/>
					</div>
					<div className='h-[50px] w-full bg-white flex justify-center items-center rounded-xl border border-transparent text-neutral-700 text-base'>
						<Link
							to='/proyectos'
							className='flex w-full h-full justify-center items-center'
						>
							Ver todos los proyectos
						</Link>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} item='Blog' linkTo='/blog' />
				<MenuItem setActive={setActive} item='Contacto' linkTo='/#' />
			</Menu>
		</div>
	);
}
