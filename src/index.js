import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import Routes from './Routes'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<UserProvider>
		<BrowserRouter>
			<React.StrictMode>
				<GlobalStyles />
				<Routes />
			</React.StrictMode>
		</BrowserRouter>
	</UserProvider>
)
