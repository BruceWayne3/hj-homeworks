`use strict`;
const tabsNav = document.querySelector('.tabs-nav');
const tabsContent = document.querySelector('.tabs-content');
const tabClone = tabsNav.firstElementChild.cloneNode(true);
tabsNav.removeChild(tabsNav.firstElementChild);
const articles = Array.from(document.getElementsByTagName('article'));

for(let article of articles) {
	let newTab = tabClone.cloneNode(true);
	newTab.firstElementChild.classList.add(`${article.dataset.tabIcon}`);
	newTab.firstElementChild.textContent = article.dataset.tabTitle;
	tabsNav.appendChild(newTab);
}

let items = Array.from(tabsContent.children);
let currentItem = items[0];

for(let item of items) {
	if(item !== currentItem) {
		item.classList.add('hidden');
	}
}

const tabs = Array.from(tabsNav.getElementsByTagName('li'));
let currentTab = tabs[0];
currentTab.classList.add('ui-tabs-active');

for(let tab of tabs) {
	tab.addEventListener('click', function() {
		currentTab.classList.remove('ui-tabs-active');
		currentTab = tab;
		currentTab.classList.add('ui-tabs-active');

		if(!tab.firstElementChild.classList.contains(`${currentItem.dataset.tabIcon}`)) {
			currentItem.classList.add('hidden');
			for(item of items) {
				if(tab.firstElementChild.classList.contains(`${item.dataset.tabIcon}`)) {
					currentItem = item;
					currentItem.classList.remove('hidden');
				}
			}
		}
	})
}
