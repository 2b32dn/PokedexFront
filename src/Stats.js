import React from 'react';

export const Stats = ({ stats }) => (
  <div>
    <h3>Base Stats: </h3>
    {stats.map(statsInfo => (
      <div key={statsInfo.stat.name}>{statsInfo.stat.name} {statsInfo.base_stat} </div>
    ))}
  </div>
)

export default Stats