import "./ProfileContainer.css";
const ProfileContainer = () => {
  return (
    <div className="personal-info1">
      <div className="personal-information">Personal Info</div>
      <div className="edit-profile">
        <img className="profile-icon" alt="" src="/profile.svg" />
        <div className="personal-information1">Edit Profile</div>
        <img className="arrow-right-2" alt="" src="/arrow--right-2.svg" />
      </div>
      <img className="personal-info-child" alt="" src="/vector-15.svg" />
      <div className="edit-profile">
        <img className="profile-icon" alt="" src="/password.svg" />
        <div className="personal-information1">Password</div>
        <img className="arrow-right-2" alt="" src="/arrow--right-2.svg" />
      </div>
    </div>
  );
};

export default ProfileContainer;