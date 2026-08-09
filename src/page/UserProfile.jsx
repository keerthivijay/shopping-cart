import { useSelector } from "react-redux";
import data from '../../data.json';

const UserProfile = () => {

    const userDetails = useSelector((state) => state.user.userDetails);

    return (
        <>
            <div className="user-profile">
                <h1>My Account</h1>
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
            <div className="delivery-details">
                <h3>Delivery adress</h3>
                <div className="delivery-address">
                    <p>{data.deliveryInfo.name}</p>
                    <p>{data.deliveryInfo.address}</p>
                    <p>{data.deliveryInfo.phone}</p>
                    <div className="user-actions">
                        <span className="edit-icon"><img src="../src/assets/pencil.png" /></span>
                        <span className="delete-icon"><img src="../src/assets/delete.png" /></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;