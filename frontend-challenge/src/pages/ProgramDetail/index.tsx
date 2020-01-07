import React from 'react';
import Head from 'next/head';

/*
  import necessary items
*/
import { withRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_PROGRAM } from '../../graphQL/queries';

import Layout from '../../components/Layout/Layout';
import { Spinner } from '../../components/Spinner/Spinner';
import SchoolBanner from '../../components/SchoolBanner/SchoolBanner';
import ProgramInfoBanner from '../../components/ProgramInfoBanner/ProgramInfoBanner';
import ProgramInfo from '../../components/ProgramInfo/ProgramInfo';

//TODO: Build the School Page page
/* 
  renderBody:
    * should set the title of the page to the name of the program
  
  SchoolPage:
    * the contents of the page should be wrapped in the layout component
    * should trigger the GET_PROGRAM query when loaded
      the route for the school page should contain the query parameter "id"
    * while the query is loading, the page should display the Spinner
*/

const renderBody = ({
  name,
  programDescription,
  deliveryMode,
  degreeType,
  school,
  costPerCredit,
  requiredCredits,
}) => {

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <SchoolBanner school={school} name={name} />
      <ProgramInfoBanner
        costPerCredit={costPerCredit}
        requiredCredits={requiredCredits}
        schoolType={school.schoolType}
        deliveryMode={deliveryMode}
        degreeType={degreeType}
      />
      <ProgramInfo
        programDescription={programDescription}
        schoolDescription={school.schoolDescription}
        schoolName={school.name}
        costPerCredit={costPerCredit}
        requiredCredits={requiredCredits}
      />
    </>
  );
};

const SchoolPage = ({ router }) => {
  // trigger the GET_PROGRAM query as soon as the page appears
  const { loading, data } = useQuery(GET_PROGRAM, {
    variables: {
      data: { id: router.query.id },
    },
  });

  return (
    <Layout>
      {/* render the spinner or the renderBody function */}
      {loading ? <Spinner /> : renderBody(data.program)}
    </Layout>
  );
};

export default withRouter(SchoolPage);
