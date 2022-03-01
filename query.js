//creating the CRUD actions
const db = require('./db')
const Employee = require('./models/employees.js')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const findThem = async () => {
    const findingAll = await Employee.find( { } )
    console.log(findingAll)
}

const createEmployee = async () => {
    const creatingNew = new Employee({   first_name: "Alex",
    last_name: "Rodriguez",
    email: "Arodriguez2@YOLO.com",
    job_title: "Not Applicable",
    address: {
        street: "200 William Street",
        city: "Newark",
        state: "NJ",
        zip: "07106"},
    })
    await creatingNew.save()
    console.log(creatingNew)
}

const createEmployees = async () => {
    const creatingMore = await Employee.insertMany({   first_name: "Troll",
    last_name: "Man",
    email: "Tman@YOLO.com",
    job_title: "Unemployed",
    address: {
        street: "6th Street",
        city: "Jersey City",
        state: "NJ",
        zip: "00011"},
    },
    {   first_name: "Claire",
    last_name: "Fraser",
    email: "Cfraser@YOLO.com",
    job_title: "Doctor",
    address: {
        street: "Marry Me Street",
        city: "Brooklyn",
        state: "NJ",
        zip: "20196"},
    },
    {   first_name: "Jamie",
    last_name: "Fraser",
    email: "Jfraser@YOLO.com",
    job_title: "Horse Riding Instructor",
    address: {
        street: "Marry Me Street",
        city: "Brooklyn",
        state: "NY",
        zip: "20196"},
    }
    )
    console.log(creatingMore)
}

const updateEmployee = async () => {
    const updatedEmployee = await Employee.updateOne({   first_name: "Alex"},
    {first_name: "Alexander"})
    console.log(updatedEmployee)
}

const deleteEmployee = async () => {
    const deletedEmployee = await Employee.deleteOne({first_name: "Miguel"})
    console.log(deletedEmployee)
}

const findNames = async () => {
    const found = await Employee.find({}).select('first_name last_name -_id');
    // the - means you're taking out the ID and only leaving the first name and last name
    console.log(found);
};

const run = async() => {
    // take comments off one by one to see it work!
    // await findThem()
    // await createEmployee()
    // await createEmployees()
    // await updateEmployee()
    // await deleteEmployee()
    // await findNames()
    db.close()
}
run()