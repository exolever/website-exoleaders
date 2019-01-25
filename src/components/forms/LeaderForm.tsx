import * as React from 'react';
import serialize from 'form-serialize';
import jsonp from 'jsonp';

class LeaderForm extends React.Component {
  onSubmit = (event: any) => {
    event.preventDefault();
    const test = serialize(event.target);

  }
  render() {
    return (
      <div className="domain-form-warp">
        <div id="mc_embed_signup">
          <form
            className="domain-search-form validate"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            onSubmit={this.onSubmit}
          >
            <div id="mc_embed_signup_scroll">
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span>
                </label>
                <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-NAME">Name </label>
                <input type="text" defaultValue="" name="NAME" className="" id="mce-NAME" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LOCATION">Preferred Location of Summit/Workshop </label>
                <input type="text" defaultValue="" name="LOCATION" className="" id="mce-LOCATION" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LINKEDIN">LinkedIn URL </label>
                <input type="text" defaultValue="" name="LINKEDIN" className="" id="mce-LINKEDIN" />
              </div>
              <div className="mc-field-group input-group">
                <strong>Join the general ExO Movement email list </strong>
                <div className="checkbox">
                  <input type="checkbox" value="4" name="group[189][4]" id="mce-group[189]-189-2" />
                  <label htmlFor="mce-group[189]-189-2">ExOMovement</label>
                </div>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_ccfff1ccf7951d4ec0af22cac_8ca8438865" defaultValue="" />
              </div>
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="site-btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LeaderForm;

