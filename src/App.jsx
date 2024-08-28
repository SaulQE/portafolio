import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProyectosPage } from './pages/ProyectosPage';
import { SobreMiPage } from './pages/SobreMiPage';
import { BlogPage } from './pages/BlogPage';
import { ContactoPage } from './pages/ContactoPage';
import { NavbarDemo } from './components/NavbarDemo';
import { ScrollToTop } from './components/ScrollToTop ';

function App() {
	return (
		<>
			<div className='bg-black'>
				<Router>
					<ScrollToTop />
					<NavbarDemo />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/proyectos' element={<ProyectosPage />} />
						<Route path='/sobre-mi' element={<SobreMiPage />} />
						<Route path='/blog' element={<BlogPage />} />
						<Route path='/contacto' element={<ContactoPage />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
