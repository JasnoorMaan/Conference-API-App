import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Announcement from './components/Announcement.jsx'
import Timeline from './components/Timeline.jsx'
import SponsorHome from './components/SponsorHome.jsx'
import Footer from './components/Footer.jsx'
import SpeakerCard from './Components/SpeakerCard'
import CommitteeCard from './Components/CommitteeCard'
import SpeakerHeading from './pages/SpeakerHeading'
import AwardPage from './pages/AwardPage'
import ContactPage from './pages/ContactPage'



function App() {
    return(
        <>
        <Navbar />
        <ContactPage />
        <Footer />
        </>
    )
}

export default App
