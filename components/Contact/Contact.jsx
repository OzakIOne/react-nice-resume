import React from 'react';

const Contact = ({ message, name, street, city, state, zip, phone }) => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center py-16 bg-gray-500"
    >
      <div className="flex justify-around w-2/3 items- lg:w-2/3">
        <div className="flex flex-col items-center w-1/3 row section-head">
          <div className="two columns header-col">
            <h4 className="pb-4 text-2xl">Get In Touch.</h4>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <aside className="w-1/3 four columns footer-widgets">
          <div className="widget widget_contact">
            <h4 className="pb-4 text-2xl">Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
