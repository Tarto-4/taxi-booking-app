import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  vehicle: {
    make: String,
    model: String,
    year: Number,
    color: String,
    licensePlate: String,
    type: {
      type: String,
      enum: ['sedan', 'suv', 'van'],
      required: true
    }
  },
  documents: {
    license: {
      number: String,
      expiry: Date,
      verified: Boolean
    },
    insurance: {
      number: String,
      expiry: Date,
      verified: Boolean
    }
  },
  currentLocation: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  },
  lastLocationUpdate: Date,
  isAvailable: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    default: 0
  },
  totalRatings: {
    type: Number,
    default: 0
  }
});

driverSchema.index({ currentLocation: '2dsphere' });

export const Driver = mongoose.model('Driver', driverSchema);
