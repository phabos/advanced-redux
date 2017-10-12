import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default function(props) {
  return (
    <td>
      <Sparklines data={props.data} limit={40} width={100} height={120} margin={5}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <span>{average(props.data)}</span>
    </td>
  );
}
