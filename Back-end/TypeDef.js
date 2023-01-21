export const typeDefs = `

  type Book {

    title: String

    author: String

  }

  type Car {

    Brand: String

    Year: Int

  }




  type Query {

    books: [Book]
    cars:[Car]

  }

`;

