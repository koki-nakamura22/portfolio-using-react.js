import React, { Component } from 'react';
import Utils from './../utils/utils';
import servicesData from './../../json/services.json';

class Services extends Component {
  render() {
    const NUM_OF_CONTENT_IN_COL = 2;
    let baseServiceList = Utils.devideArray(servicesData.services, NUM_OF_CONTENT_IN_COL);
    let serviceList = [];
    let colsNum = 1;
    for (let baseService of baseServiceList) {
      serviceList.push(
        <div key={colsNum} className="columns">
          {
            baseService.map((e, i) => {
              return (
                <div key={i} className="column">
                  <div className="box">
                    <div className="content">
                      <h4 className="title is-5">{Utils.escapeHtml(e.title)}</h4>
                      <span dangerouslySetInnerHTML={{__html: Utils.arrayToHtml(e.detail)}}>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      );
      colsNum++;
    }

    return (
      <div className="section">
        <div className="section-heading">
          <h3 className="title is-2">{Utils.escapeHtml(servicesData.title)}</h3>
          <h4 className="subtitle is-5">{Utils.escapeHtml(servicesData.description)}</h4>
          <div className="container">
            { serviceList }
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
