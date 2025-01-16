import nextAuth, { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

const authConfig: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialProvider({
      credentials: {},
      async authorize(credentials, request) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email === 'sunny@gmail.com' && password === '1234') {
          return { email, id: '123', name: 'Sunny Varanasi' };
        }

        return null;
      },
    }),
  ],
};

export const {
  auth,
  handlers: { GET, POST },
} = nextAuth(authConfig);
