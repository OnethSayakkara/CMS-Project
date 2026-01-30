import React from 'react'
import { Hero } from '../customer/Hero'
import { StatsBar } from '../customer/StatsBar'
import { CertificationPrograms } from '../customer/CertificationPrograms'
import { HowItWorks } from '../customer/HowItWorks'
import { WhoShouldGetCertified } from '../customer/WhoShouldGetCertified'
import Testimonials from '../customer/Testimonials'
import { Footer } from '../Footer'
import { ScrollToTop } from '../ScrollToTop'
import { Header } from '../Header'
import { IntroductionSection } from '../customer/IntroductionSection'



export function Homepage ()  {
  return (
    <>
         <Header/>
         <Hero/>
         <StatsBar/>
         <IntroductionSection/>
         <CertificationPrograms/>
         <HowItWorks/>
         <WhoShouldGetCertified/>
         <Testimonials/>
         <Footer/>
         <ScrollToTop />
         
         
    
    </>
  )
}

