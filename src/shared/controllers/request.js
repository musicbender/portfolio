import axios from 'axios';
import { GraphQLClient } from 'graphql-request'

export const graphQL = () => {
  return new GraphQLClient(process.env.GRAPHQL_URL, {
    mode: 'cors',
    headers: {
      "X-REQUEST-ID": Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7)
    }
  })
}
