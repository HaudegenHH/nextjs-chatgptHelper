import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

// singleton: either get the Prompt that already exist on the models object
// or if it doesnt exist create a new model based on the PromptSchema
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;