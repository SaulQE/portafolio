import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProyectosPage } from './pages/ProyectosPage';
import { SobreMiPage } from './pages/SobreMiPage';
import { BlogPage } from './pages/BlogPage';

function App() {
	return (
		<>
			<div className='bg-black'>
				<Router>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/proyectos' element={<ProyectosPage />} />
						<Route path='/sobre-mi' element={<SobreMiPage />} />
						<Route path='/blog' element={<BlogPage />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
