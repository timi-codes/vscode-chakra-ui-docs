'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let chakraUIDocsBadge = vscode.commands.registerCommand('extension.chakraUIDocsBadge', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/data-display/badge'));
    });
    context.subscriptions.push(chakraUIDocsBadge);
    let chakraUIDocsCode = vscode.commands.registerCommand('extension.chakraUIDocsCode', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/data-display/code'));
    });
    context.subscriptions.push(chakraUIDocsCode);
    let chakraUIDocsDivider = vscode.commands.registerCommand('extension.chakraUIDocsDivider', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/data-display/divider'));
    });
    context.subscriptions.push(chakraUIDocsDivider);
    let chakraUIDocsKbd = vscode.commands.registerCommand('extension.chakraUIDocsKbd', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/data-display/kbd'));
    });
    context.subscriptions.push(chakraUIDocsKbd);
    let chakraUIDocsList = vscode.commands.registerCommand('extension.chakraUIDocsList', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/data-display/list'));
    });
    context.subscriptions.push(chakraUIDocsList);
    let chakraUIDocsStat = vscode.commands.registerCommand('extension.chakraUIDocsStat', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/data-display/stat'));
    });
    context.subscriptions.push(chakraUIDocsStat);
    let chakraUIDocsTable = vscode.commands.registerCommand('extension.chakraUIDocsTable', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/data-display/table'));
    });
    context.subscriptions.push(chakraUIDocsTable);
    let chakraUIDocsTag = vscode.commands.registerCommand('extension.chakraUIDocsTag', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/data-display/tag'));
    });
    context.subscriptions.push(chakraUIDocsTag);
    let chakraUIDocsAccordion = vscode.commands.registerCommand('extension.chakraUIDocsAccordion', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/disclosure/accordion'));
    });
    context.subscriptions.push(chakraUIDocsAccordion);
    let chakraUIDocsTabs = vscode.commands.registerCommand('extension.chakraUIDocsTabs', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/disclosure/tabs'));
    });
    context.subscriptions.push(chakraUIDocsTabs);
    let chakraUIDocsVisuallyHidden = vscode.commands.registerCommand('extension.chakraUIDocsVisuallyHidden', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/disclosure/visually-hidden'));
    });
    context.subscriptions.push(chakraUIDocsVisuallyHidden);
    let chakraUIDocsAlert = vscode.commands.registerCommand('extension.chakraUIDocsAlert', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/feedback/alert'));
    });
    context.subscriptions.push(chakraUIDocsAlert);
    let chakraUIDocsCircularProgress = vscode.commands.registerCommand('extension.chakraUIDocsCircularProgress', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/feedback/circular-progress'));
    });
    context.subscriptions.push(chakraUIDocsCircularProgress);
    let chakraUIDocsProgress = vscode.commands.registerCommand('extension.chakraUIDocsProgress', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/feedback/progress'));
    });
    context.subscriptions.push(chakraUIDocsProgress);
    let chakraUIDocsSkeleton = vscode.commands.registerCommand('extension.chakraUIDocsSkeleton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/feedback/skeleton'));
    });
    context.subscriptions.push(chakraUIDocsSkeleton);
    let chakraUIDocsSpinner = vscode.commands.registerCommand('extension.chakraUIDocsSpinner', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/feedback/spinner'));
    });
    context.subscriptions.push(chakraUIDocsSpinner);
    let chakraUIDocsToast = vscode.commands.registerCommand('extension.chakraUIDocsToast', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/feedback/toast'));
    });
    context.subscriptions.push(chakraUIDocsToast);
    let chakraUIDocsButton = vscode.commands.registerCommand('extension.chakraUIDocsButton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/button'));
    });
    context.subscriptions.push(chakraUIDocsButton);
    let chakraUIDocsCheckbox = vscode.commands.registerCommand('extension.chakraUIDocsCheckbox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/checkbox'));
    });
    context.subscriptions.push(chakraUIDocsCheckbox);
    let chakraUIDocsEditable = vscode.commands.registerCommand('extension.chakraUIDocsEditable', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/editable'));
    });
    context.subscriptions.push(chakraUIDocsEditable);
    let chakraUIDocsFormControl = vscode.commands.registerCommand('extension.chakraUIDocsFormControl', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/form-control'));
    });
    context.subscriptions.push(chakraUIDocsFormControl);
    let chakraUIDocsIconButton = vscode.commands.registerCommand('extension.chakraUIDocsIconButton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/icon-button'));
    });
    context.subscriptions.push(chakraUIDocsIconButton);
    let chakraUIDocsInput = vscode.commands.registerCommand('extension.chakraUIDocsInput', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/input'));
    });
    context.subscriptions.push(chakraUIDocsInput);
    let chakraUIDocsNumberInput = vscode.commands.registerCommand('extension.chakraUIDocsNumberInput', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/number-input'));
    });
    context.subscriptions.push(chakraUIDocsNumberInput);
    let chakraUIDocsPinInput = vscode.commands.registerCommand('extension.chakraUIDocsPinInput', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/pin-input'));
    });
    context.subscriptions.push(chakraUIDocsPinInput);
    let chakraUIDocsRadio = vscode.commands.registerCommand('extension.chakraUIDocsRadio', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/radio'));
    });
    context.subscriptions.push(chakraUIDocsRadio);
    let chakraUIDocsRangeSlider = vscode.commands.registerCommand('extension.chakraUIDocsRangeSlider', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/range-slider'));
    });
    context.subscriptions.push(chakraUIDocsRangeSlider);
    let chakraUIDocsSelect = vscode.commands.registerCommand('extension.chakraUIDocsSelect', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/select'));
    });
    context.subscriptions.push(chakraUIDocsSelect);
    let chakraUIDocsSlider = vscode.commands.registerCommand('extension.chakraUIDocsSlider', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/slider'));
    });
    context.subscriptions.push(chakraUIDocsSlider);
    let chakraUIDocsSwitch = vscode.commands.registerCommand('extension.chakraUIDocsSwitch', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/switch'));
    });
    context.subscriptions.push(chakraUIDocsSwitch);
    let chakraUIDocsTextarea = vscode.commands.registerCommand('extension.chakraUIDocsTextarea', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/form/textarea'));
    });
    context.subscriptions.push(chakraUIDocsTextarea);
    let chakraUIDocsAspectRatio = vscode.commands.registerCommand('extension.chakraUIDocsAspectRatio', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/aspect-ratio'));
    });
    context.subscriptions.push(chakraUIDocsAspectRatio);
    let chakraUIDocsBox = vscode.commands.registerCommand('extension.chakraUIDocsBox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/box'));
    });
    context.subscriptions.push(chakraUIDocsBox);
    let chakraUIDocsCenter = vscode.commands.registerCommand('extension.chakraUIDocsCenter', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/center'));
    });
    context.subscriptions.push(chakraUIDocsCenter);
    let chakraUIDocsContainer = vscode.commands.registerCommand('extension.chakraUIDocsContainer', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/container'));
    });
    context.subscriptions.push(chakraUIDocsContainer);
    let chakraUIDocsFlex = vscode.commands.registerCommand('extension.chakraUIDocsFlex', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/flex'));
    });
    context.subscriptions.push(chakraUIDocsFlex);
    let chakraUIDocsGrid = vscode.commands.registerCommand('extension.chakraUIDocsGrid', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/grid'));
    });
    context.subscriptions.push(chakraUIDocsGrid);
    let chakraUIDocsSimpleGrid = vscode.commands.registerCommand('extension.chakraUIDocsSimpleGrid', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/simple-grid'));
    });
    context.subscriptions.push(chakraUIDocsSimpleGrid);
    let chakraUIDocsStack = vscode.commands.registerCommand('extension.chakraUIDocsStack', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/stack'));
    });
    context.subscriptions.push(chakraUIDocsStack);
    let chakraUIDocsWrap = vscode.commands.registerCommand('extension.chakraUIDocsWrap', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/layout/wrap'));
    });
    context.subscriptions.push(chakraUIDocsWrap);
    let chakraUIDocsAvatar = vscode.commands.registerCommand('extension.chakraUIDocsAvatar', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/media-and-icons/avatar'));
    });
    context.subscriptions.push(chakraUIDocsAvatar);
    let chakraUIDocsIcon = vscode.commands.registerCommand('extension.chakraUIDocsIcon', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/media-and-icons/icon'));
    });
    context.subscriptions.push(chakraUIDocsIcon);
    let chakraUIDocsImage = vscode.commands.registerCommand('extension.chakraUIDocsImage', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/media-and-icons/image'));
    });
    context.subscriptions.push(chakraUIDocsImage);
    let chakraUIDocsBreadcrumb = vscode.commands.registerCommand('extension.chakraUIDocsBreadcrumb', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/navigation/breadcrumb'));
    });
    context.subscriptions.push(chakraUIDocsBreadcrumb);
    let chakraUIDocsLink = vscode.commands.registerCommand('extension.chakraUIDocsLink', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/navigation/link'));
    });
    context.subscriptions.push(chakraUIDocsLink);
    let chakraUIDocsLinkOverlay = vscode.commands.registerCommand('extension.chakraUIDocsLinkOverlay', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/navigation/link-overlay'));
    });
    context.subscriptions.push(chakraUIDocsLinkOverlay);
    let chakraUIDocsCloseButton = vscode.commands.registerCommand('extension.chakraUIDocsCloseButton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/other/close-button'));
    });
    context.subscriptions.push(chakraUIDocsCloseButton);
    let chakraUIDocsPortal = vscode.commands.registerCommand('extension.chakraUIDocsPortal', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/other/portal'));
    });
    context.subscriptions.push(chakraUIDocsPortal);
    let chakraUIDocsShowHide = vscode.commands.registerCommand('extension.chakraUIDocsShowHide', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/other/show-hide'));
    });
    context.subscriptions.push(chakraUIDocsShowHide);
    let chakraUIDocsTransitions = vscode.commands.registerCommand('extension.chakraUIDocsTransitions', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/other/transitions'));
    });
    context.subscriptions.push(chakraUIDocsTransitions);
    let chakraUIDocsAlertDialog = vscode.commands.registerCommand('extension.chakraUIDocsAlertDialog', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/overlay/alert-dialog'));
    });
    context.subscriptions.push(chakraUIDocsAlertDialog);
    let chakraUIDocsDrawer = vscode.commands.registerCommand('extension.chakraUIDocsDrawer', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/overlay/drawer'));
    });
    context.subscriptions.push(chakraUIDocsDrawer);
    let chakraUIDocsMenu = vscode.commands.registerCommand('extension.chakraUIDocsMenu', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/overlay/menu'));
    });
    context.subscriptions.push(chakraUIDocsMenu);
    let chakraUIDocsModal = vscode.commands.registerCommand('extension.chakraUIDocsModal', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/overlay/modal'));
    });
    context.subscriptions.push(chakraUIDocsModal);
    let chakraUIDocsPopover = vscode.commands.registerCommand('extension.chakraUIDocsPopover', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/overlay/popover'));
    });
    context.subscriptions.push(chakraUIDocsPopover);
    let chakraUIDocsTooltip = vscode.commands.registerCommand('extension.chakraUIDocsTooltip', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/overlay/tooltip'));
    });
    context.subscriptions.push(chakraUIDocsTooltip);
    let chakraUIDocsOverview = vscode.commands.registerCommand('extension.chakraUIDocsOverview', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/overview'));
    });
    context.subscriptions.push(chakraUIDocsOverview);
    let chakraUIDocsAsProp = vscode.commands.registerCommand('extension.chakraUIDocsAsProp', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/recipes/as-prop'));
    });
    context.subscriptions.push(chakraUIDocsAsProp);
    let chakraUIDocsFloatingLabels = vscode.commands.registerCommand('extension.chakraUIDocsFloatingLabels', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/recipes/floating-labels'));
    });
    context.subscriptions.push(chakraUIDocsFloatingLabels);
    let chakraUIDocsHorizontalCollapse = vscode.commands.registerCommand('extension.chakraUIDocsHorizontalCollapse', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/recipes/horizontal-collapse'));
    });
    context.subscriptions.push(chakraUIDocsHorizontalCollapse);
    let chakraUIDocsZIndex = vscode.commands.registerCommand('extension.chakraUIDocsZIndex', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/recipes/z-index'));
    });
    context.subscriptions.push(chakraUIDocsZIndex);
    let chakraUIDocsHeading = vscode.commands.registerCommand('extension.chakraUIDocsHeading', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/typography/heading'));
    });
    context.subscriptions.push(chakraUIDocsHeading);
    let chakraUIDocsText = vscode.commands.registerCommand('extension.chakraUIDocsText', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/typography/text'));
    });
    context.subscriptions.push(chakraUIDocsText);

}