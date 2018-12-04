import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';

const StepInputType = new GraphQLInputObjectType({
  name: 'StepInputType',
  description: 'Step count input type',
  fields: () => ({
    stepCount: { type: GraphQLInt },
    date: { type: GraphQLString }
  })
});

export default StepInputType;
