const StudySessionSchema = new mongoose.Schema({
    subject: String,
    date: { type: Date, required: true },
    duration: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  module.exports = mongoose.model('StudySession', StudySessionSchema);