import React, { useContext } from 'react';
import { AppContext } from '../App';

function ResidentsList() {
  const { residents } = useContext(AppContext);

  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{residents.map((resident, index) => (
					<li key={`item${index}`} className="slide-up-fade-in">
						{resident.name}
					</li>
				))}
      </ul>
    </div>
  );
}

export default ResidentsList;
