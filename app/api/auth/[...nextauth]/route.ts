import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

// Register a provider only when both of its credentials exist.
// Missing ones are reported once at startup instead of failing silently with "" secrets.
function credentials(name: string) {
  const clientId = process.env[`${name}_CLIENT_ID`];
  const clientSecret = process.env[`${name}_CLIENT_SECRET`];
  if (!clientId || !clientSecret) {
    console.warn(`[auth] ${name}_CLIENT_ID / ${name}_CLIENT_SECRET not set — ${name.toLowerCase()} login disabled.`);
    return null;
  }
  return { clientId, clientSecret };
}

const google = credentials("GOOGLE");
const naver = credentials("NAVER");
const kakao = credentials("KAKAO");

if (!process.env.NEXTAUTH_SECRET) {
  console.warn("[auth] NEXTAUTH_SECRET not set — sessions will fail in production.");
}

const authOptions: NextAuthOptions = {
  providers: [
    ...(google ? [GoogleProvider(google)] : []),
    ...(naver ? [NaverProvider(naver)] : []),
    ...(kakao ? [KakaoProvider(kakao)] : []),
  ],
  pages: {
    signIn: '/join', // 로그인/가입 페이지를 우리가 만든 /join 페이지로 지정
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
