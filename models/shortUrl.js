import { Schema, model } from 'mongoose';
import { nanoid } from 'nanoid';

const shortUrlSchema = new Schema({
  full: { type: String, required: true },
  short: { type: String, required: true, default: () => nanoid(8) },
  clicks: { type: Number, default: 0 },
});

export default model('ShortUrl', shortUrlSchema);
