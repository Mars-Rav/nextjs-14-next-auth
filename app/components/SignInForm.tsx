"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

const SignInForm = () => {
    const [email, setEmail] = useState<null | string>(null);

    async function signInWithEmail() {
        const signInResult = await signIn("email", {
            email,
            callbackUrl: `${window.location.origin}`,
            redirect: false
        });

        if (!signInResult?.ok) {
            return toast({
                title: "Well this did not work...",
                description: "Something went wrong, please try again.",
                variant: "destructive"
            });
        }

        return toast({
            title: "Check your email.",
            description: "A magic link has been sent to your email."
        });
    }

    return (
        <form action={signInWithEmail} className="flex flex-col gap-y-2">
            <div>
                <Label>Email:</Label>
                <Input onChange={e => setEmail(e.target.value)} name="email" type="email" placeholder="email@example.com" />
            </div>
            <Button type="submit">Log in with email</Button>
        </form>
    )
}

export default SignInForm
