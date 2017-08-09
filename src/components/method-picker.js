import React from 'react';

export default function MethodPicker(props) {
  // const tables = props.tables
  //   .toList()
  //   .sort((a, b) => a.get('value') - b.get('value'))
  //   .map(table => {
  //     return (
  //       <div key={table.get('key')}>
  //         <label>
  //           <span style={{ width: 60, display: 'inline-block' }}>{table.get('key')}</span>
  //           <input type='checkbox' checked={table.get('included')} onChange={(e) => props.setTableIncluded(table.get('key'), e.target.checked) }/>
  //         </label>
  //       </div>
  //     );
  //   });

  return (
    <div>
      <div>
        <label>
          <span style={{ width: 60, display: 'inline-block' }}>Multiplications</span>
          <input type='checkbox' checked={table.get('included')} onChange={(e) => props.setTableIncluded(table.get('key'), e.target.checked) }/>
        </label>
      </div>
    </div>
  );
}
