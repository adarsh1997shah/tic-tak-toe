function ChooseMode({ handleMode }) {
  return (
    <div className="choose-mode-wrap">
      <div className="status-message">Choose mode</div>

      <div className="action-cta-wrap">
        <button id="single" type="button" className="btn" onClick={handleMode}>
          Single player
        </button>

        <button id="double" type="button" className="btn" onClick={handleMode}>
          Double player
        </button>
      </div>
    </div>
  );
}

export default ChooseMode;
