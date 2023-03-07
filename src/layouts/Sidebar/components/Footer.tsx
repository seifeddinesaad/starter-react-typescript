import React from 'react';
import constants from '../../../data/constants';

const list = constants.SOCIALS_LIST;

const Footer = () => {
  return (
    <div className="footer">
      {/* <span>Nos contacts</span>
      <div className="contacts">
        <span className="contact-phone">73.832.000</span>
      </div>
      <span>Nos réseaux sociaux</span>
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img alt={item.name} src={item.img} />
                </a>
              </li>
            );
          })}
      </ul> */}
      <p style={{ color: 'white' }}>Footer</p>
    </div>
  );
};

export default Footer;
