import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	return <Router basename={'/EaseCorps/'}>
			<Routes>
				<Route path="/" exact='true' element={<Home />}/>
			</Routes>
	</Router>
}

export default App;


