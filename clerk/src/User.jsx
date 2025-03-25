import { useUser } from "@clerk/clerk-react";

const UserProfile = () => {
    const { user } = useUser();

    if (!user) {
        return <p>Loading...</p>;
    }

    return <p>Signed-in User ID: {user.id}</p>;
};

export default UserProfile;
