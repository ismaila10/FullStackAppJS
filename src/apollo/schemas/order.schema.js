import {gql} from "apollo-server-express";

module.exports = gql`
  type Order {
    id: ID!
    totalAmount: Float
    user: User
    products: [Product]
  }
  input OrderInput {
    totalAmount: Float,
    user: ID,
    products: [ID]
  }
  extend type Query {
    orders: [Order]
    order(id: ID!): Order
  }
  extend type Mutation {
    createOrder(totalAmount: Float, user: ID, products: [ID]): Order,
    updateOrder(id: ID!, totalAmount: Float, user: [ID], products: [ID]): Order,
    deleteOrder(id:ID!): Order
  }
`;