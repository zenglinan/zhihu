const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  password: { type: String, required: true, select: false },
  banner: { type: String },
  avatar: { type: String },
  sex: { type: String, enum: ['male', 'female'], required: true },
  headline: { type: String },
  resident: { type: [{ type: String }] },
  career : { type: [{
    company: { type: String },
    job: { type: String }
  }] },
  educations: { type: [{
    school: { type: String },
    major: { type: String },
    record: { type: Number, enum: [1,2,3,4,5] },
    entrance_year: { type: Number },
    graduation_year: { type: Number }
  }] }
})

module.exports = model('User', UserSchema)