import express from "express";
import {
    createLiveStream,
    deleteLiveStream,
    fetchLiveSteam
} from './livestreaming.controller'
export const liveRouter = express.Router();
liveRouter.post('/createstream',createLiveStream)
liveRouter.post('/deletelivesteam',deleteLiveStream)
liveRouter.post('/fetchlivesteam',fetchLiveSteam)
liveRouter.post('/')