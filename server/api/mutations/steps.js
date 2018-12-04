import { GraphQLNonNull } from 'graphql';
import { Step } from '../../models';
import { StepType, StepInputType } from '../types';

export const addStep = {
  name: 'addStep',
  description: 'Add step data',
  type: StepType,
  args: {
    input: {
      type: new GraphQLNonNull(StepInputType)
    }
  },
  resolve(parentValue, { input }) {
    return new Promise((resolve, reject) => {
      const newStep = new Step(input);
      newStep.save((err, data) => {
        if (err) reject('ADD_STEP_ERROR');
        resolve(data);
      })
    });
  }
}
