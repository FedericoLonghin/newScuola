import { T as s } from './vendor-c12218c7.js';
const e = {
	subscribe: (e) =>
		(() => {
			const e = s('__svelte__');
			return {
				page: { subscribe: e.page.subscribe },
				navigating: { subscribe: e.navigating.subscribe },
				get preloading() {
					return (
						console.error('stores.preloading is deprecated; use stores.navigating instead'),
						{ subscribe: e.navigating.subscribe }
					);
				},
				session: e.session
			};
		})().page.subscribe(e)
};
export { e as p };
