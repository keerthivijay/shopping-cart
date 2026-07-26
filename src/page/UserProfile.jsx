import { useSelector } from "react-redux";

const UserProfile = () => {

    const userDetails = useSelector((state) => state.user.userDetails);

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <p>Welcome to your profile page!</p>
            {userDetails && (
                <div className="user-details">
                    <img src={userDetails.profilePicture || "src/assets/user.png"} alt="Profile" className="profile-picture" /> 
                    <div className="user-info">
                        <p><strong>Name:</strong> {userDetails.name}</p>
                        <p><strong>Email:</strong> {userDetails.email}</p>
                        <p><strong>Mobile:</strong> {userDetails.mobile}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserProfile;