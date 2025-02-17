import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? "",
    }),
    YandexProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_YANDEX_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_AUTH_YANDEX_SECRET ?? "",
    }),
  ],
});

console.log(handler)

export { handler as GET, handler as POST };
