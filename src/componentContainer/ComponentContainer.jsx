import SettingsContainer from "../components/settingsContainer/SettingsContainer";
import ProfileContainer from "../components/profileContainer/ProfileContainer";
import DirectDebitContainer from "../components/directDebitContainer/DirectDebitContainer";
import UpgradeContainer from "../components/upgradeContainer/UpgradeContainer";
import ManageSideBarContainer from "../components/manageSidebarContainer/ManageSideBarContainer";
import DataPrivacyContainer from "../components/dataPrivacyContainer/DataPrivacyContainer";
import "./ComponentContainer.css";

const ComponentContainer = () => {
  return (
    <div className="setting-4">
      <div className="bg" />
      <div className="bg1" />
      <div className="bg2" />
      <SettingsContainer />
      <div className="personal-info">
        <ProfileContainer />
        <DirectDebitContainer />
      </div>
      <UpgradeContainer />
      <ManageSideBarContainer />
      <DataPrivacyContainer />
    </div>
  );
};

export default ComponentContainer;
