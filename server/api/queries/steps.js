import { GraphQLList } from 'graphql';
import { Step } from '../../models';
import { StepType } from '../types';

const steps = {
  type: new GraphQLList(StepType),
  description: 'Get all step counts',
  resolve() {
    return Step.find({});
  }
}

export default steps;
