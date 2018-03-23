const m = require('mithril');

const Page = require('../page');

class CustomPage extends Page
{
	constructor(app)
	{
		super(app, {
			path: '/',
			class: 'home'
		});
	}

	view()
	{
		return m('div', {class: 'head text-center'}, [
			m('img', {src: '/assets/img/notsophone.png'}),
			m('h1', 'Make phone calls on Discord!'),
			m('span', {class: 'small-text'}, 'NotSoFoundation?'),
			m('div', {class: 'btn-group'}, [
				m('button', {class: 'btn', type: 'button'}, 'Invite'),
				m('button', {class: 'btn', type: 'button'}, 'Discord')
			])
		]);
	}
}

module.exports = CustomPage;