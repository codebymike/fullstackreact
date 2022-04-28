import { IResolvers } from 'graphql-tools'
// import { listings } from '../listings'

export const resolvers: IResolvers = {
    Query: {
        listings: () => {
            // return listings
        }
    },
    Mutation: {
        deleteListing: (_root: undefined,  { id }: { id: string } ) => { return id }
    }
}