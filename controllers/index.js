const Students = require('../models/students');


exports.getData = async (req,res, next) => {
    const rollNumber = req.query.rollNumber;
    try{
        const data = await Students.findOne({ rollNumber: rollNumber});
        if(!data){
            return res.status(401).json({
                msg: 'No Student Found'
            });
        }
        res.status(201).json(data);
    }
    catch(error){
        console.log(error);
    }
}

exports.postData = async (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = parseInt(req.body.phone);
    const rollNumber = parseInt(req.body.rollNumber);
    const dob = req.body.dob;
    const branch = req.body.branch;
    const year = req.body.year;
    const sex = req.body.sex;

    try{
        const currentStudent = await Students.findOne({ rollNumber: rollNumber });
        if( currentStudent){
            return res.status(401).json({ msg: 'Data already saved '});
        }
    const students = new Students({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        rollNumber: rollNumber,
        dob: dob,
        branch: branch,
        year: year,
        sex: sex
    });

    const response = await students.save();
    res.status(201).json({ msg: 'Data Saved '});
    }
    catch(error){
        console.log(error);
    }
}