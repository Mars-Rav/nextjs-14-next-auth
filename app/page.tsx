import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogOut from "./components/LogOut";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-10">
      <h1>Welcome</h1>
      {
        session ? (
          <div>
            <h1>You are logged in.</h1>
            <LogOut />
          </div>
        ) : (
          <div>
            <h1>Log in to see something special.</h1>
            <Button asChild>
              <Link href="/auth">Log In</Link>
            </Button>
          </div>
        )
      }
    </div>
  );
}
