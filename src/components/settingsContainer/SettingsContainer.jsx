import "./SettingsContainer.css";
const SettingsContainer = () => {
  return (
    <div className="top">
      <div className="setting">Setting</div>
      <div className="notifications">
        <img className="notification-icon" alt="" src="/notification.svg" />
        <div className="notif-parent">
          <img className="notif-icon" alt="" src="/notif.svg" />
          <div className="div">8</div>
        </div>
      </div>
      <div className="user">
        <div className="user-inner">
          <img className="frame-child" alt="" src="/ellipse-73@2x.png" />
        </div>
        <img className="chevron-down-icon" alt="" src="/chevrondown.svg" />
      </div>
      <div className="input-field">
        <div className="icon-search-parent">
          <img className="icon-search" alt="" src="/icon--search.svg" />
          <div className="label">
            <div className="small-label-regular-12px">Search...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContainer;