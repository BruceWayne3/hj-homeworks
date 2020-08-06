'use strict';
const propsNames = Array.from(document.getElementsByTagName('th'));

function handleTableClick(event) {
	if(event.target.classList.contains('prop__name')) {
		if(!event.target.dataset.dir || event.target.dataset.dir === '-1') {
			event.target.setAttribute('data-dir', 1);
		} else {
			event.target.setAttribute('data-dir', -1);
		}
		table.setAttribute('data-sort-by', event.target.dataset.propName);
		sortTable(event.target.dataset.propName, event.target.dataset.dir);
	}
}
