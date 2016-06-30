import { config } from 'd2/lib/d2';
import Dialog from 'material-ui/lib/dialog';
import React, { PropTypes, Component } from 'react';
import { getTranslationFormFor } from './TranslationForm.component';

config.i18n.strings.add('close');
config.i18n.strings.add('sharing_settings');

export default class TranslationDialog extends Component {
    constructor(props, context) {
        super(props, context);

        this.i18n = context.d2.i18n;

        this.state = {
            TranslationForm: getTranslationFormFor(this.props.objectToTranslate),
        };
    }

    render() {
        return (
            <Dialog
                title={this.i18n.getTranslation('translation_dialog_title')}
                autoDetectWindowHeight
                autoScrollBodyContent
                {...this.props} >
                <this.state.TranslationForm onTranslationSaved={this.translationSaved} onTranslationError={this.translationError} />
            </Dialog>
        );
    }

    closeSharingDialog() {
        this.props.onRequestClose();
    }

    translationSaved() {
        this.props.onTranslationSaved();
        this.closeSharingDialog();
    }

    translationError() {
        this.props.onTranslationError();
    }
}

TranslationDialog.propTypes = {
    objectToTranslate: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
    }).isRequired,
    onTranslationSaved: React.PropTypes.func.isRequired,
    onTranslationError: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool,
    onRequestClose: React.PropTypes.func.isRequired,
};

TranslationDialog.contextTypes = {
    d2: PropTypes.object,
};
