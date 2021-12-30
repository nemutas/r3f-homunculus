import React, { VFC } from 'react';
import { TCanvas } from './TCanvas';

export const App: VFC = () => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<TCanvas />
		</div>
	)
}
