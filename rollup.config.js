import json from '@rollup/plugin-json';

// other config code...

plugins: [
	json({
		compact: true
	})
	// other plugins...
];
