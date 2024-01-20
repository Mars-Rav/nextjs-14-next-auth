import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import GitHubSignIn from "../components/GitHubSignIn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import SignInForm from "../components/SignInForm";

const AuthRoute = async () => {
    const session = await getServerSession(authOptions);

    if (session)
        return redirect("/");

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>You must be authenticated to access protected pages.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-3">
                    <SignInForm />

                    <GitHubSignIn />
                </CardContent>
            </Card>
        </div>
    )
}

export default AuthRoute;
