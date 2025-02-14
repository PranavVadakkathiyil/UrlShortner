import express, { Router } from 'express'
import { handleCreateUrlShort ,handleRedirectUrl,visitHistory} from '../controllers/Url.controller.js'
const router = Router()

router.post('/url',handleCreateUrlShort)
router.get('/:shortId',handleRedirectUrl)
router.get('/analytics/:shortId',visitHistory)
export default router