import React from 'react';
import Link from 'next/Link'

import {
  ProgramName,
  FieldHeader,
  FieldValue,
  Container,
  CollegeName,
  Logo,
  FieldWrapper,
  FieldContainer,
  TitleWrapper
} from './ProgramRow.styles';



const ProgramRow = ({program: {school, degreeType, deliveryMode, name, id, costPerCredit}}) => {


  return(
    <Link href={`/programDetail?id=${id}`}>
      <Container >

        <Logo url={school.schoolLogo}/>

        <TitleWrapper>
          <ProgramName>{name}</ProgramName>
          <CollegeName>{school.name}</CollegeName>
        </TitleWrapper>

        <FieldWrapper>
          <FieldContainer>
            <FieldHeader start={4} end={5}>
              Degree Type
            </FieldHeader>
            <FieldValue start={4} end={5}>
              {degreeType}
            </FieldValue>
          </FieldContainer>
          <FieldContainer>
            <FieldHeader start={5} end={6}>
              Delivery
            </FieldHeader>
            <FieldValue start={5} end={6}>
              {deliveryMode}
            </FieldValue>
          </FieldContainer>
          <FieldContainer>
            <FieldHeader start={6} end={7}>
              Cost Per Credit
            </FieldHeader>
            <FieldValue start={6} end={7}>
              ${costPerCredit || 100}
            </FieldValue>
          </FieldContainer>
        </FieldWrapper>
        
      </Container>
    </Link>
  )


};

export default ProgramRow;
