import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react";
import UserProfile from './User';
import './Auth.css';

function App() {
    const { user } = useUser();
    return (
        <div className="custom-container">
            {/* <div className="flex flex-col items-center justify-center min-h-screen"> */}
            <SignedIn>
                <div className="flex flex-col items-center gap-4">
                    <h1>Welcome, You are signed in!</h1>
                    <UserButton />
                </div>
                <UserProfile />
                {/* <p>Your User ID: {user?.id}</p> */}
            </SignedIn>

            <SignedOut>
               <SignIn />
            </SignedOut>
            {/* <CategoryList /> */}
        </div>
    );
}

export default App;
