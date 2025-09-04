import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
import { ToastContainer} from 'react-toastify';

const Layout = ({children,title,description,author,keywords}) => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta name='keywords' content={keywords}/>
    </Helmet>
    <div className='min-h-screen flex flex-col'>
      <Header/>
       <main className='flex-1 px-6 sm:px-8 md:px-12 pt-16'>
        <ToastContainer/>
        {children}</main> 
     <Footer/>
    </div>
    </>
  )
}

Layout.defaultProps= {
  title: "Auction Based Ecommerce App",
  description:"A Web-Based E-Commerce System Incorporating Auctions for Dynamic Pricing",
  keywords: "online auctions, auction website, auction platform, live auctions online, auction marketplace",
  author:"AuroBhuyan"
}

export default Layout