/* eslint react/jsx-no-bind: 0 */

import React, { PropTypes } from 'react';
import { config } from 'd2/lib/d2';

import Rule from './Rule.component';

config.i18n.strings.add('external_access');

const ExternalAccess = ({ canView, disabled, onChange }, context) => (
    <Rule
        accessType="external"
        disabled={disabled}
        disableWritePermission
        primaryText={context.d2.i18n.getTranslation('external_access')}
        secondaryText={canView ? 'Anyone can view without a login' : 'No access'}
        onChange={onChange}
        accessOptions={{ canView }}
    />
);

ExternalAccess.propTypes = {
    canView: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

ExternalAccess.contextTypes = {
    d2: PropTypes.object.isRequired,
};

export default ExternalAccess;
