import React from 'react';
import cogoToast from 'cogo-toast';

import CodePanel from '../../../common-util/code-panel';
import Button from '../../../common-util/button';
import Section from './styles';

const types = ['success', 'info', 'loading', 'warn', 'error'];

const showMessage = type => cogoToast[type](`This is a ${type} message.`, {
	onClick: (hide) => {
		hide();
	},
});

const showAll = () => types.forEach(type => showMessage(type));

const codeBlock = (
	<CodePanel.Block>
		{types.map(type => (
			<div key={`code_${type}`}>
				cogoToast.
				{type}
				('This is a {type} message');
			</div>
		))}
	</CodePanel.Block>
);

const Types = () => (
	<CodePanel heading="5 Built in Types" code={codeBlock}>
		<Section>
			{types.map(type => (
				<Button key={type} className={type} onClick={() => showMessage(type)}>
					{type}
				</Button>
			))}
		</Section>
		<Button className="primary" onClick={showAll}>
			Show All
		</Button>
	</CodePanel>
);

export default Types;
