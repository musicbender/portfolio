import { GraphQLString, GraphQLInt } from 'graphql';
import { Steps } from '../../models';
import { StepType } from '../types';

const steps = {
  type: StepType,
  description: 'Get all step counts',
  resolve() {
    return Steps.find();
  }
}

export default steps;
