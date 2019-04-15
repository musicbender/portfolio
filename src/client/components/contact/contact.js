import React from 'react';
import PropTypes from 'prop-types';
import DotFormation from '../_particles/dot-formation';
import cn from 'classnames/bind';
import style from './contact.css';
const cx = cn.bind(style);

const Contact = ({ handlBottom }) => {
  return (
    <div className={cx(style.contact)}>
      <DotFormation />
    </div>
  );
}

Contact.propTypes = {

}

Contact.defaultProps = {

}

export default Contact;
