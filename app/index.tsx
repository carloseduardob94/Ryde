import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function Home() {

  const { isSignedIn } = useAuth()

  console.log('isSignedIn', isSignedIn)

  if (isSignedIn) {
    return <Redirect href='/(root)/(tabs)/home' />
  }

  return <Redirect href="/(auth)/welcome" />;
}
