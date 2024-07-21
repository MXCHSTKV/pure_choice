import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
import Header from './header'
import Footer from './footer'

const NotFound = () => {
  useEffect(() => {}, [])
  return (
    <div className="bg-gray-100 flex flex-col min-w-[370px] min-h-screen select-none">
      <Head title="Page not found"/>
      <Header />
          <h1 className="text-4xl mt-24 mx-auto">404</h1>
          <p className="mx-auto text-xl">Page Not Found</p>
          <p className="mx-auto" >Something went wrong,</p>
          <p className="mx-auto" >but you can <Link to="/">Go to Main</Link></p>
          <p className="mx-auto" >Lets try again!</p>
      <div className="flex-grow"></div>
      <Footer />
    </div>
  )
}

NotFound.propTypes = {}

export default NotFound