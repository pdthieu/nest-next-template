import { Api } from './sdk';

const client = new Api({
  format: 'json',
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'https://nest-next-template-api.sipher.gg',
});

export default client;
