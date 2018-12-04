import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';

const StepType = new GraphQLObjectType({
  name: 'StepType',
  description: 'Step count type',
  fields: () => ({
    stepCount: { type: GraphQLInt },
    date: { type: GraphQLString }
  })
});

export default StepType;
