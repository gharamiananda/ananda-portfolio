import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    src: string;
    description: string;
    title: string;
}

const ProjectSchema: Schema = new Schema({
    src:  { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
