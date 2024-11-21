import mongoose, { Schema, Document } from 'mongoose';

export interface IBrand extends Document {
  name: string;
  published: boolean;
  logoUrl: string;
}

const BrandSchema: Schema = new Schema({
  name: { type: String, required: true },
  published: { type: Boolean, required: true },
  logoUrl: { type: String },
});

export default mongoose.model<IBrand>('Brand', BrandSchema);
