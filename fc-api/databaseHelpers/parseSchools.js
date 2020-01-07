require('dotenv').config()
const { convertRGBToHex } = require('./convertRGBtoHex')

/*
University Name	
Departments	
Campus Locations	
School Type	
Accreditation	
Accrediting Logo	
Certifications	
School Logo	
School Description	
Total Enrollment	
Background Color	
Gradient Color	
Programs	
Engineering Division Description	
Cost Per Unit


export const schoolSchema = new Schema({
    name: String,
    programs: [{type: Schema.Types.ObjectId, ref: "Program"}],
    universityName: String,
    departments: [String],
    campusLocations: String,	
    schoolType: String,
    accreditation: String,
    schoolLogo:	String,
    schoolDescription: String,	
    totalEnrollment: Number,	
    backgroundColor: String,	
    gradientColor: [String],		
    costPerUnit
})


*/

const fs = require('fs')

const processTSV = fileName => {
    let x = fs
      .readFileSync(fileName)
      .toString()
      .split("\r\n")
  
    return x.map(el => el.split("\t"));
  };

  const schoolsInArrayFormat = processTSV('./School.tsv')
  const parseGradientColor = (str) => str.split(',')

  const createSchoolObject = (schoolInfo) => {
    const [name, department, campusLocation, schoolType, accreditation, accreditingLogo, certifications, schoolLogo, schoolDescription,totalEnrollment, bgColorRGB, gradientColor, programs, engineeringDevisionDescription, costPerUnit ] = schoolInfo
    const backgroundColor = convertRGBToHex(bgColorRGB)
    const notused = [accreditingLogo, certifications, programs] 
    return {
        name,
        departments: department === "" ? []: [department], 
        campusLocation,
        schoolType,
        schoolDescription,
        accreditation,
        schoolLogo,
        totalEnrollment,
        backgroundColor,
        gradientColor: parseGradientColor(gradientColor),
        engineeringDevisionDescription,
        costPerUnit,
        programs: []
    }


  }

  let tempArray = []

  for(let school of schoolsInArrayFormat){
      const schoolObj = createSchoolObject(school)
      tempArray.push(schoolObj)
  }

  let jsonArray = JSON.stringify(tempArray)

  fs.writeFileSync('./Schools.json',jsonArray)





  //process the schools
  //create JSON file to save them in
  //add processed schools to JSON file.

