import React from 'react';
import Capitalize from './Capitalize'

export const Stats = ({ stats }) => (
  <div>
    <h3>Base Stats: </h3>
    {stats.reverse().map(statsInfo => (
      <div key={statsInfo.stat.name}>{Capitalize(statsInfo.stat.name)} {statsInfo.base_stat} </div>
    ))}
  </div>
)

export default Stats