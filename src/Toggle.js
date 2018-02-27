// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
//
// // import { toggleMessage } from "./actions.js";
//
// const Toggle = ({ messageVisibility, toggleMessage }) => (
//   <div>
//     {messageVisibility && <p>this is the message</p>}
//     <button onClick={toggleMessage}>Toggle Message</button>
//   </div>
// );
//
// const mapStateToProps = state => ({
//   messageVisibility: state.message.messageVisibility
// });
//
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       toggleMessage
//     },
//     dispatch
//   );
//
// export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
