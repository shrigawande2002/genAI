import express from 'express'
import { getData } from '../Controllers/getData.js'
import {registerOrLoginWithGoogle , registerOrLoginWithEmail} from '../Controllers/auth.js'
import { createPost, getAllPosts } from '../Controllers/Posts.js'
import { generateImage } from '../Controllers/generateImg.js'
const router = express.Router()


// login APIs 
router.post('/sign-up', registerOrLoginWithGoogle)
router.post('/sign-up/email', registerOrLoginWithEmail)
router.post('/post-img', createPost)
router.get('/posts', getAllPosts)
router.post('/generate-img', generateImage)


export default router
