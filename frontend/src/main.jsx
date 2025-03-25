import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/home.jsx'

const pages = createBrowserRouter([
	{
	  path: '/',
	  element: <App />,
	  children: [
		{ path: '/', element: <Home /> },
	  ],
	},
  ])

ReactDom.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={pages}></RouterProvider>
	</React.StrictMode>,
)