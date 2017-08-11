import React from 'react';
import BaseComponent from 'lib/BaseComponent';

export default class MailingListButton extends BaseComponent {
  render() {
    return (
      <div className="mailing-list-button">
        <a href="http://eepurl.com/bc1FSn" className="float">
          {/* eslint-disable max-len */}
          <svg viewBox="0 0 512 512" className="mail-button my-float">
            <path
              d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"
            />
          </svg>
        </a>
        {/* eslint-enable max-len */}
        <div className="label-container">
          <div className="label-text">Newsletter</div>
          <i className="fa fa-play label-arrow"></i>
        </div>
      </div>
    );
  }
}
