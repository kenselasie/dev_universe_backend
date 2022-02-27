import { Router } from "express"
import { GetUser, AddUser, UpdateUser, DeleteUser } from "../controllers/UserController.js"
const router = Router()


router.get('/profile', async(request, response) => {
    return GetUser(request, response)
})

router.post('/profile', async (request, response) => {
    return AddUser(request, response)  
})

router.patch('/profile/:id', (request, response) => {
    return UpdateUser(request, response)
})

router.delete('/profile/:id', (request, response) => {
    return DeleteUser(request, response)
})

export default router