import React from 'react';

import cogoToast from 'cogo-toast';

import CodePanel from '../../../common-util/code-panel';
import CodeBlock from '../../../common-util/code-block';
import Button from '../../../common-util/button';

import Section, { Group } from './styles';

const showToast = () => cogoToast.rtl.info('من اليمين الى اليسار');

const code = `cogoToast.rtl.info('من اليمين الى اليسار');
// or
cogoToast.info('من اليمين الى اليسار', { rtl: true });`;

const SupportRTL = () => (
	<CodePanel heading="Supporting Right-to-Left Languages">
		<Section>
			<Group className="code">
				<CodeBlock>{code}</CodeBlock>
				<Button className="primary" onClick={showToast}>
					Show Me
				</Button>
			</Group>
		</Section>
	</CodePanel>
);

export default SupportRTL;
