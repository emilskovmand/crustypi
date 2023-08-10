import mongoose from 'mongoose';

const measurementSchema = new mongoose.Schema({
  temperature: {
    type: Number
  },
  humidity: {
    type: Number
  },
  pressure: {
    type: Number
  },
  timestamp: {
    type: Date
  },
  detectedMotion: {
    type: Boolean
  }
});

measurementSchema.index({ timestamp: -1 });

const Measurement = mongoose.models.Measurement || mongoose.model('Measurement', measurementSchema);
export default Measurement;