import * as React from 'react';
import serialize from 'form-serialize';

import jsonp from 'jsonp';
const groups = {
  leaders: 2,
  launchpad: 1,
  movement: 4
}
class LeaderForm extends React.Component {
  state = {
    complete: false,
    error: false,
    message: ""
  }
  onSubmit = (event: any) => {
    event.preventDefault();

    const url = 'https://exodevhub.us20.list-manage.com/subscribe/post-json?u=ccfff1ccf7951d4ec0af22cac&amp;id=8ca8438865'
    + '&' + serialize(event.target);

    jsonp(url,{ param: `c` }, (err,data)=> {
      if(data !== null && data.result === "success"){
        this.setState({
          complete: true,
          message: "Thanks for joining our community"
        })
      } else {
        this.setState({
          complete: false,
          error: true,
          message: data.msg
        })
      }
    })
  }
  render() {
    if(this.state.complete){
      return ( <div className="domain-form-warp center">
      <div id="mc_embed_signup">
      <h3>{this.state.message}</h3>
      </div></div>
      )
    }
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
                {/*  */}
                <input type="hidden" value={groups.leaders} name={`group[189][${groups.leaders}]`} id="mce-group[189]-189-0" />
                <div className="checkbox">
                  <input type="checkbox" value={groups.movement} name={`group[189][${groups.movement}]`} id="mce-group[189]-189-1" />
                  <label htmlFor="mce-group[189]-189-2">ExO Movement</label>
                </div>
              </div>

              <div id="mce-responses" className="clear">
                {this.state.error ? <div className="response" id="mce-error-response"
                  dangerouslySetInnerHTML={{ __html: this.state.message }}
                /> : undefined}

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

