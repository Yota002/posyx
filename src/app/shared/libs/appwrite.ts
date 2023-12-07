import { Client, Account } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65721dde6c926099e462'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
