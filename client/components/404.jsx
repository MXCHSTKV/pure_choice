import React, { useEffect } from 'react'
import Head from './head'
import Header from './header'
import Footer from './footer'

const NotFound = () => {
  useEffect(() => {}, [])
  return (
    <div className="bg-gray-100 flex flex-col min-w-[370px] min-h-screen select-none">
      <Head title="Page not found"/>
      <Header />
      <div className="mt-12 ml-20">
        <h1 className="pt-5 text-2xl">404</h1>
        <p>Page Not Found</p>
        <p>It looks like you found a glitch in the matrix...</p>
      </div>
      <div className="flex-grow"></div>
      <Footer />
    </div>
  )
}

NotFound.propTypes = {}

export default NotFound