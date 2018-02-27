import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPhotos } from "./actions.js";

class Photos extends React.Component {
  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos();
  }

  render() {
    const { photos } = this.props.photos;
    console.log("this is them", this.props.photos);
    return (
      <ul>
        {this.props.photos.map(item => {
          return (
            <li key={item.id}>
              <img src={item.urls.thumb} />
              <a href={item.links.html}>{item.links.html}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPhotos
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

// <ul>
//   photos.map(item => ( return (
//   <li key={item.id}>
//     <img src={item.urls.thumb} />
//     <a href={item.links.html}>{item.links.html}</a>
//   </li>
//   ); ))
// </ul>

// <ul>{this.state.photos.map(this.createPhotos)}</ul>;
