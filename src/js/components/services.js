import React, { Component } from 'react';
import Utils from './../utils/utils';
import servicesData from './../../json/services.json';
import './../../css/services.css';

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
                      <h4 className="title is-5">{e.title}</h4>
                      {
                        e.detail instanceof Array ?
                          e.detail.map((e2, i2) => {
                            return (
                              <span key={"" + i + i2}>{e2}</span>
                            );
                          }) :
                          <span>{e.detail}</span>
                      }
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
      <div id="services" className="section">
        <div className="section-heading">
          <h3 className="title is-2">{servicesData.title}</h3>
          <h4 className="subtitle is-5">{servicesData.description}</h4>
          <div className="container">
            { serviceList }
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
