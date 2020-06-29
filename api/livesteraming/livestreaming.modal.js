import mongoose, {Schema} from 'mongoose';
import timestamps from "mongoose-timestamp";

const liveStreamingSchema = Schema({
    socketid:String,
    streamingid:String,
    requestedUserId:String,
    genrateId:String
}, { timestamps: {createdAt:'created_at'} })

export const liveSchema = mongoose.model('livechat',liveStreamingSchema);