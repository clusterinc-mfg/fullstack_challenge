require('dotenv').config()

/*
Program Name	
Schools	
College or Dept Name	
Degree Type	
Degree Level	
School Name	
Delivery Mode	
Required Credits	
Time To Complete	
School Logo	
Cost Per Credit	
Cost For Degree	
Program URL	
Program Description	
Cohort Start Dates	
Program Audience	
Tags	
Application Deadline
*/

const fs = require('fs')

const processTSV = fileName => {
    let x = fs
      .readFileSync(fileName)
      .toString()
      .split("\r\n")
  
    return x.map(el => el.split("\t"));
  };

  const programsInArrayFormat = processTSV('./Programs.tsv')

  const createProgramObject = (programInfo) => {

/*
Program Name	
Schools	
College or Dept Name	
Degree Type	
Degree Level	
School Name	
Delivery Mode	
Required Credits	
Time To Complete	
School Logo	
Cost Per Credit	
Cost For Degree	
Program URL	
Program Description	
Cohort Start Dates	
Program Audience	
Tags	
Application Deadline
*/
    const processTags = (tagString) => tagString.split(',').map(el => el.trim())
    const processSchool = (school, schoolName) => {
      var regex = /"/gi;
      return school ? school.replace(regex, "") : schoolName

    }
    const [
      programName,
      school,
      collegeOrDeptName,
      degreeType,
      degreeLevel,
      schoolName,
      deliveryMode,
      requiredCredits,
      timeToComplete,
      schoolLogo,
      costPerCredit,
      costForDegree,
      programUrl,
      programDescription,
      startDates,
      programAudience,
      tags,
      applicationDeadline
    ] = programInfo

    const used = [
      programName,
      school,
      collegeOrDeptName,
      degreeType,
      degreeLevel,
      schoolName,
      deliveryMode,
      requiredCredits,
      timeToComplete,
      schoolLogo,
      costPerCredit,
      costForDegree,
      programUrl,
      programDescription,
      startDates,
      programAudience,
      tags,
      applicationDeadline
    ]

    return {
        name: programName,
        school: processSchool(school, schoolName),
        collegeOrDeptName,
        degreeType,
        degreeLevel,
        schoolName,
        deliveryMode,
        requiredCredits,
        timeToComplete,
        schoolLogo,
        costPerCredit,
        costForDegree,
        programUrl,
        programDescription,
        programAudience,
        tags: processTags(tags),
        applicationDeadline
    }
  }

  let tempArray = []

  for(let program of programsInArrayFormat){
      const programObj = createProgramObject(program)
      tempArray.push(programObj)
  }

  let jsonArray = JSON.stringify(tempArray)

  fs.writeFileSync('./Programs.json',jsonArray)
  