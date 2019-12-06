'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var styles = {
  layer: { position: 'absolute', top: '0px', left: '0px', width: '342px', height: '342px', overflow: 'hidden' },
  bg: { position: 'absolute', top: '0px', left: '0px', opacity: '1.00', width: '342px', height: '342px' },
  riverdinwei: { opacity: '1.00', width: '14px', height: '18px' },
  distance: {
    marginLeft: '4px',
    width: '84px',
    height: '22px',
    lineHeight: '22px',
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 400,
    lines: 1
  },
  wrap: {
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '18px',
    marginLeft: '18px',
    borderRadius: '15px',
    backgroundColor: 'rgba(0,0,0,0.40)',
    paddingRight: '9px',
    paddingLeft: '10px',
    height: '30px'
  },
  bd: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    opacity: '1.00',
    width: '342px',
    height: '342px'
  },
  title: {
    marginTop: '22px',
    width: '300px',
    height: '88px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '44px',
    color: '#333333',
    fontSize: '30px',
    fontWeight: 400,
    lines: 2
  },
  main: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '342px',
    height: '114px'
  },
  xianjin: { width: '30px', height: '30px' },
  fashionHome: {
    marginLeft: '6px',
    width: '96px',
    height: '28px',
    lineHeight: '28px',
    whiteSpace: 'nowrap',
    color: '#666666',
    fontSize: '24px',
    fontWeight: 300,
    lines: 1
  },
  block: { display: 'flex', alignItems: 'center', flexDirection: 'row', height: '30px' },
  favorite: { width: '22px', height: '22px' },
  num: {
    marginLeft: '5px',
    width: '36px',
    height: '26px',
    lineHeight: '26px',
    whiteSpace: 'nowrap',
    color: '#999999',
    fontSize: '22px',
    fontWeight: 400,
    lines: 1
  },
  group: { display: 'flex', alignItems: 'center', flexDirection: 'row', height: '30px' },
  ft: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    backgroundColor: '#ffffff',
    paddingRight: '17px',
    paddingLeft: '18px',
    width: '342px',
    height: '78px',
    overflow: 'hidden'
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: '534px'
  }
};

class Mod extends Component {
  render() {
    return (
      <div style={styles.box}>
        <div>
          <div style={styles.bd}>
            <img style={styles.layer} src={'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'} />
            <img style={styles.bg} src={this.item.coverImage} />
            <div style={styles.wrap}>
              <img
                style={styles.riverdinwei}
                src={'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'}
              />
              <span style={styles.distance}>距离500m</span>
            </div>
          </div>
          <div style={styles.main}>
            <span style={styles.title}>{this.item.title}</span>
          </div>
          <div style={styles.ft}>
            <div style={styles.block}>
              <img style={styles.xianjin} src={'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'} />
              <span style={styles.fashionHome}>{this.item.user.userName}</span>
            </div>
            <div style={styles.group}>
              <img style={styles.favorite} src={'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'} />
              <span style={styles.num}>{this.item.readCount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Mod />, document.getElementById('container'));
