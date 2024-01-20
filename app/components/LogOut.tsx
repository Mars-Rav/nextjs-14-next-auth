"use client";

import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react";

const LogOut = () => {
  return (
      <Button onClick={() => signOut({
        callbackUrl: `${window.location.origin}`
    })}>
      Logout
    </Button>
  )
}

export default LogOut;
