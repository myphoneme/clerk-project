import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import CategoryList from './Images';
import './Auth.css';
function App() {
    return (
      <div className="custom-container"> 
       {/* <div className="flex flex-col items-center justify-center min-h-screen"> */}
            <SignedIn>
                <div className="flex flex-col items-center gap-4">
                    <h1>Welcome, You are signed in!</h1>
                    <UserButton />
                </div>
            </SignedIn>

            <SignedOut>
                <SignIn />
            </SignedOut>
            {/* <CategoryList /> */}
        </div>
    );
}

export default App;
