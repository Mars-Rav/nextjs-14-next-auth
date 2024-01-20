"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

const GitHubSignIn = async () => {
    return (
        <Button variant={"secondary"}
            onClick={() => signIn("github", {
                callbackUrl: `${window.location.origin}`
            })}
        >
            Log in with GitHub <Github className="w-4 h-4 ml-1" />
        </Button>
    )
}

export default GitHubSignIn;
