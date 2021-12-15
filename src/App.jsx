import PropTypes from "prop-types";
import React from "react";
function App({ title, question, confirmationHandler, cancelHandler }) {
  return (
    <div role="dialog">
      <h1>{title}</h1>
      {question}
      <button name="ok" onClick={confirmationHandler}>
        OK
      </button>
      <button name="cancel" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

App.propTypes = {
  cancelHandler: PropTypes.func.isRequired,
  confirmationHandler: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  title: PropTypes.string,
};

App.defaultProps = {
  title: "Confirmation",
};

export default App;
