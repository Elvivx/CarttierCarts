import { Client, Account } from "appwrite"

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("6744e5b00037076d6f18")

const account = new Account(client)
export { account, client }
