import NextAuth from "next-auth"
import AzureADProvider from 'next-auth/providers/azure-ad';

 

export const options = {
    providers: [
        AzureADProvider({
          clientId: process.env.AZURE_AD_CLIENT_ID,
          clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
          tenantId: process.env.AZURE_AD_TENANT_ID,
          /* authorization: {
            params: { scope: 'openid profile user.Read email' },
            url: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize`,
          },
          token: {
            params: { scope: 'openid profile user.Read email' },
            url: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`,
          }, */
        }),
      ],
      callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
              token.accessToken = account.access_token
            }
            return token
          },
          async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
          }
},
debug: true,
}

export default NextAuth(options)