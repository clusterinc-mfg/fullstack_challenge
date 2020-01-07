import React from 'react'

import {Banner, ProgramName, DegreeType, CollegeName, Logo} from './SchoolBanner.styles'



const SchoolBanner = ({school, name}) => {
    return(
        <Banner backgroundColor={school.backgroundColor}>
            <Logo src={school.schoolLogo}/>
            <ProgramName>{name}</ProgramName>
            <CollegeName>{school.name}</CollegeName>
        </Banner>
    )
}

export default SchoolBanner