const db = require('../db')
const Employee = require("../models/employees")

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const employees = [
        {   first_name: "Miguel",
            last_name: "Lo",
            email: "MiguelLo@YOLO.com",
            job_title: "Software Engineering Instructor",
            address: {
                street: "5th Ave",
                city: "New York",
                state: "NY",
                zip: "10010"}
        },
        {   first_name: "Stephanus",
        last_name: "Juwana",
        email: "Sjuwana@YOLO.com",
        job_title: "Software Engineering Trainee",
        address: {
            street: "Yolo Ave",
            city: "New York",
            state: "NY",
            zip: "10015"}
        },
        {   first_name: "Demmy",
        last_name: "Rodriguez",
        email: "Drodriguez@YOLO.com",
        job_title: "Software Engineering Traine",
        address: {
            street: "10th Ave",
            city: "New York",
            state: "NY",
            zip: "10008"},
        },
        {   first_name: "Nayeli",
        last_name: "Rodriguez",
        email: "Nrodriguez@YOLO.com",
        job_title: "Driver",
        address: {
            street: "941 Catherine Street",
            city: "Elizabeth",
            state: "NJ",
            zip: "07206"},
        },
        {   first_name: "Abby",
        last_name: "Rodriguez",
        email: "Arodriguez@YOLO.com",
        job_title: "Not Applicable",
        address: {
            street: "200 William Street",
            city: "Newark",
            state: "NJ",
            zip: "07106"},
        }
    ]

    await Employee.insertMany(employees)
        console.log("Created employees!")
}


const run = async () => {
    await main()
    db.close()
}
run()