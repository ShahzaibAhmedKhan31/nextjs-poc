import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data } = useSession()
  console.log(data);
  return <div>Access Token: {data}</div>
}