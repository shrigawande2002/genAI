import express from 'express'
import { getData } from '../Controllers/getData.js'
import {registerOrLoginWithGoogle , registerOrLoginWithEmail} from '../Controllers/auth.js'
const router = express.Router()


// login APIs 
router.post('/sign-up',registerOrLoginWithGoogle)
router.post('/sign-up/email',registerOrLoginWithEmail)


export default router
