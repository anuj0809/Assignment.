import "./UpgradeContainer.css";

const UpgradeContainer = () => {
  return (
    <div className="upgrade-to-pro">
      <div className="bg3" />
      <img  alt="" src="/patern.svg" />
      <div className="description">
        <div className="upgrade-to-pro1">Upgrade to PRO</div>
        <div className="courses">{`Get your pro feature by Subscribe FinPro and easy to manage your financial `}</div>
      </div>
      <div className="button">
        <div className="label1">
          <div >Upgrade</div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeContainer;