import mongoose, {Schema} from 'mongoose';
import timestamps from "mongoose-timestamp";

const liveStreamingSchema = Schema({
    socketId:String,
    userId:String,
    requestId:String,
    liveStreamId:String
}, { timestamps: {createdAt:'created_at'} })

export const liveSchema = mongoose.model('livechat',liveStreamingSchema);