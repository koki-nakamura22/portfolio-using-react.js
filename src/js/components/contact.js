import React, { Component } from 'react';
import Utils from '../utils/utils';
import profileData from './../../json/profile.json';
import contactData from './../../json/contact.json';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      subject: "",
      message: ""
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChangeName(e) {
    this.setState({name: e.target.value});
  }

  onChangeSubject(e) {
    this.setState({subject: e.target.value});
  }

  onChangeMessage(e) {
    this.setState({message: e.target.value});
  }

  submit(e) {
    e.preventDefault();
    const newLineCharsWebPage = "\n";
    const newLineCharsMail = "%0D%0A";
    const lines = this.state.message.split(newLineCharsWebPage);
    let message = "";
    for (let line of lines) {
      message += `${line}${newLineCharsMail}`;
    }
const overallMessage = `Hi! I'm ${this.state.name}. I will send you an e-mail from your portfolio page.
    ${newLineCharsMail}${newLineCharsMail}${message}${newLineCharsMail}`;
    window.location.href = `mailto:${profileData.email}?subject=${this.state.subject}&body=${overallMessage}`;
  }

  render() {
    return (
      <section className="section">
        <form onSubmit={this.submit}>
          <div className="container">
            <div className="section-heading">
              <h3 className="title is-2">{Utils.escapeHtml(contactData.title)}</h3>
              <h4 className="subtitle is-5">{Utils.escapeHtml(contactData.subTitle)}</h4>
            </div>
            <br />

            <div className="columns">
              <div className="column is-6 is-offset-3">
                <div className="box">
                  <div className="field">
                    <label className="label">{Utils.escapeHtml(contactData.nameLabel)}</label>
                    <div className="control">
                      <input
                        id="name"
                        className="input"
                        type="text"
                        placeholder="Name input"
                        value={this.state.name}
                        onChange={this.onChangeName}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">{Utils.escapeHtml(contactData.subjectLabel)}</label>
                    <div className="control">
                      <input
                        id="subject"
                        className="input"
                        type="text"
                        placeholder="Subject input"
                        value={this.state.value}
                        onChange={this.onChangeSubject}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">{Utils.escapeHtml(contactData.messageLabel)}</label>
                    <div className="control">
                      <textarea
                        id="message"
                        className="textarea"
                        placeholder="Message input"
                        value={this.state.value}
                        onChange={this.onChangeMessage}
                      ></textarea>
                    </div>
                  </div>

                  <div className="field is-grouped has-text-centered">
                    <div className="control">
                      <button type="submit" id="submit-button" className="button is-link is-large">
                        <span className="icon"> <i className="fas fa-envelope"></i> </span>
                        <span>{Utils.escapeHtml(contactData.submitLabel)}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Contact;