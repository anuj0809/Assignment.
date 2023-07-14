import "./DirectDebitContainer.css";
const DirectDebitContainer = () => {
  return (
    <div className="personal-information-parent">
      <div className="personal-information2">General</div>
      <div className="direct-debits2">
        <div className="direct-debits3">Direct Debits</div>
        <img className="arrow-right-22" alt="" src="/arrow--right-21.svg" />
        <img className="wallet-icon" alt="" src="/wallet.svg" />
      </div>
      <img className="frame-item" alt="" src="/vector-15.svg" />
      <div className="direct-debits4">
        <div className="direct-debits6">Scheduled Transfer</div>
        <img className="arrow-right-22" alt="" src="/arrow--right-2.svg" />
        <img className="wallet-icon" alt="" src="/calendar.svg" />
      </div>
      <img className="frame-item" alt="" src="/vector-15.svg" />
      <div className="direct-debits4">
        <div className="direct-debits3">Data Privacy</div>
        <img className="arrow-right-22" alt="" src="/arrow--right-22.svg" />
        <img className="shield-done-icon" alt="" src="/shield-done.svg" />
      </div>
    </div>
  );
};

export default DirectDebitContainer;