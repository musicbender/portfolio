import { GraphQLObjectType } from 'graphql';

// mutations
import { addStep } from './steps';


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addStep
  }
});

export default mutation;
