import React from "react"
import PropTypes from "prop-types"
class GroupsList extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.groups.map((group) => {
          return <p class="users-group"><a href={"/groups/" + group.id }>{group.name}</a></p>;
        })}
      </React.Fragment>
    );
  }
}

//return <a href={"/groups/" + {group.id}}>{group.name}</a>;
//reactに組み込まれた型指定方法で， 意図しない型の変数が入らないように指定している
GroupsList.propTypes = {
  groups: PropTypes.string
};

export default GroupsList
