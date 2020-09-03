import mongoose, {Schema} from 'mongoose';
import timestamps from "mongoose-timestamp";

const cordinatesSchema = Schema({
    userId:String,
    Latitude:String,
    Longitude:String
}, { timestamps: {createdAt:'created_at'} })

export const CordinateData = mongoose.model('cordinate',cordinatesSchema);
