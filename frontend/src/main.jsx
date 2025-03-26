import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Presentation from './pages/presentation/presentation.jsx'
import Home from './pages/home/home.jsx'

const pages = createBrowserRouter([
	{
	  path: '/',
	  element: <App />,
	  children: [
		{ path: '/', element: <Presentation /> },
		{ path: '/home', element: <Home /> },
	  ],
	},
  ])

ReactDom.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={pages}></RouterProvider>
	</React.StrictMode>,
)