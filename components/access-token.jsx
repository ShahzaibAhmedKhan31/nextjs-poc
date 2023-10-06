import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data } = useSession()
  //const { accessToken } = data
  console.log(data);
  return <div>Access Token: {data.accessToken}</div>
}