import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteContact(id);
  };

  onShowCLick() {}

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className='card card-body mb-3'>
        <h4>
          {name} <i onClick={this.onShowClick} className='fas fa-sort-down' />{" "}
        </h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            Email:
            {email}
          </li>
          <li className='list-group-item'>
            Phone:
            {phone}
          </li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
