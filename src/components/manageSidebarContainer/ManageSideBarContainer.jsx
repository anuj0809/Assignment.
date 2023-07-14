import "./ManageSideBarContainer.css";
const ManageSideBarContainer = () => {
  return (
    <div className="side-bar">
      <div className="bg4" />
      <img className="side-bar-child" alt="" src="/vector-14.svg" />
      <div className="manage">MANAGE</div>
      <div className="other">OTHER</div>
      <div className="dashboard-menu">
        <div className="indikator" />
        <div className="dashboard">
          <img className="icon-dashboard" alt="" src="/icon--dashboard.svg" />
          <div className="transaction">Dashboard</div>
        </div>
      </div>
      <div className="dashboard-menu1">
        <div className="indikator" />
        <div className="iconlyboldwallet-parent">
          <img
            className="iconlyboldwallet"
            alt=""
            src="/iconlyboldwallet.svg"
          />
          <div className="transaction">Transaction</div>
        </div>
      </div>
      <div className="dashboard-menu2">
        <div className="indikator" />
        <div className="iconlyboldwallet-parent">
          <img className="iconlyboldwallet" alt="" src="/iconlyboldswap.svg" />
          <div className="transaction">My Wallet</div>
        </div>
      </div>
      <div className="dashboard-menu3">
        <div className="indikator" />
        <div className="iconlyboldwallet-parent">
          <img className="icon-dashboard" alt="" src="/icon--graph.svg" />
          <div className="transaction">Analytics</div>
        </div>
      </div>
      <div className="dashboard-menu4">
        <div className="indikator4" />
        <div className="iconlyboldwallet-parent">
          <img className="icon-dashboard" alt="" src="/setting.svg" />
          <div className="transaction">Setting</div>
        </div>
      </div>
      <div className="dashboard-menu5">
        <div className="indikator" />
        <div className="iconlyboldwallet-parent">
          <div className="toggle">
            <div className="toggle-child" />
          </div>
          <div className="transaction">Theme</div>
        </div>
      </div>
      <div className="dashboard-menu6">
        <div className="indikator" />
        <div className="iconlyboldwallet-parent">
          <img className="icon-dashboard" alt="" src="/password1.svg" />
          <div className="transaction">Security</div>
        </div>
      </div>
      <div className="logo">
        <b className="finpro">
          <span>Fin</span>
          <span className="dash">Dash</span>
        </b>
      </div>
    </div>
  );
};

export default ManageSideBarContainer;