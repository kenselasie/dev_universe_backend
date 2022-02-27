import UserModel from '../models/userModel.js'

const GetUser = async (request, response) => {
    try {
        const users = await UserModel.find().select('name email age createdAt')
        return response.json({
            message: 'Success from Refactoring',
            data: users
        })
    } catch(err) {
        return response.json({
            message: 'Error fetching users',
            err
        })
    }
    
}


const AddUser = async (request, response) => {
    const { name, email, age, password } = request.body

    const user = new UserModel({
        name: name,
        email: email,
        age: age,
        password: password
    })
     // Do some more validations

    try {
        let result = await user.save()
        return response.json({
            message: 'User is successfully saved'
        })
    } catch (err) {
        return response.json({
            message: 'Error saving user',
            err
        })
    }
}

const UpdateUser = async (request, response) => {
    const { name, age, hometown } = request.body
    const { id } = request.params

    console.log(id)

    // Go to the database
    // Extract the user with ID that was sent
    // Replace the existing information with the new information coming.

    response.json({
        message: `User with ID ${id} is successfully updated`
    })

}

const DeleteUser = async (request, response) => {
    const { id } = request.params

    // Go to the database and delete the user with the ID that was passed

    response.json({
        message: `User with ID ${id} is successfully deleted`
    })
}


export { GetUser, AddUser, UpdateUser, DeleteUser }