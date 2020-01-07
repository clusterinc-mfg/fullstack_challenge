const mongoose = require('mongoose')

const Schema = mongoose.Schema


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



const programSchema = new Schema({
    name: String,
    school: {type: Schema.Types.ObjectId, ref: "School"},
    collegeOrDeptName: String,
    degreeType: String,
    degreeLevel: String,
    schoolName: String,
    deliveryMode: String,
    requiredCredits: Number,
    timeToComplete: String,
    schoolLogo: String,
    costPerCredit: Number,
    costPerDegree: Number,
    programUrl: String,
    programDescription: String,
    programAudience: String,
    tags: [String],
    applicationDeadline: String
})

const Program = mongoose.model('Program', programSchema)


console.log(Object.entries(Program.schema))