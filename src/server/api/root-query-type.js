import { GraphQLObjectType } from 'graphql';
import {
  steps
} from './queries';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    steps
  })
});

export default RootQuery;
