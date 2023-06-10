import React from 'react'
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import HomePage from '../components/Homepage/HomePage'
import Service from '../components/Service/Service'
import Project from '../components/Project/Project'
import Contacts from '../components/Contacts/Contacts'
import About from '../components/About/About'
import MePage from '../components/MePage/MePage'
import Trust from '../components/Trust/Trust'
import Certificat from '../components/Certificat/Certificat'
import { Modal } from '../components/Modal/Modal'
const FullPageScroll = () => {
        return (
                <div className='fullpage'>
                <Modal />
                 
                        <Fullpage>
                                <FullpageNavigation/>
                                <FullPageSections >
                                        <FullpageSection style={{ height: "100vh" }}>
                                                <HomePage/>
                                        </FullpageSection>
                                        <FullpageSection style={{ height: "100vh" }}>
                                                <About/>
                                        </FullpageSection>
                                        <FullpageSection>
                                                <MePage/>
                                        </FullpageSection>
                                        <FullpageSection style={{ height: "100vh" }}>
                                                <Trust/>
                                        </FullpageSection>
                                        <FullpageSection style={{ height: "100vh" }}>
                                                <Certificat/>
                                        </FullpageSection>
                                        <FullpageSection style={{ height: "100vh" }}>
                                                <Service/>
                                        </FullpageSection>
                                        <FullpageSection style={{ height: "100vh" }}>
                                                <Project/>
                                        </FullpageSection>
                                        <FullpageSection style={{ height: "100vh" }}>
                                                <Contacts/>
                                        </FullpageSection>
                                </FullPageSections>
                        </Fullpage>
                </div>
        )
}

export default FullPageScroll