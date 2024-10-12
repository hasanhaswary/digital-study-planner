const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    subject: String,
    priority: { type: String, default: 'Medium' },
    dueDate: { type: Date, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    completed: { type: Boolean, default: false }
  });
  
  module.exports = mongoose.model('Task', TaskSchema);