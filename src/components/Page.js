import React from "react"

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to page: {this.props.params.id}</h2>
      </div>
    )
  }
}
