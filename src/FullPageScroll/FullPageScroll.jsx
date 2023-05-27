import React from 'react'
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import HomePage from '../components/Homepage/HomePage'
import Service from '../components/Service/Service'
import Project from '../components/Project/Project'
import Contacts from '../components/Contacts/Contacts'
const FullPageScroll = () => {
        return (
                <div>
                 
                        <Fullpage>
                                {/* <FullpageNavigation /> */}
                                <FullPageSections >
                                        <FullpageSection style={{ height: "100vh" }}>
                                                <HomePage/>
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