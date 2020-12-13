'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let chakraUIDocsComparison = vscode.commands.registerCommand('extension.chakraUIDocsComparison', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/comparison'));
    });
    context.subscriptions.push(chakraUIDocsComparison);
    let chakraUIDocsAccordion = vscode.commands.registerCommand('extension.chakraUIDocsAccordion', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/accordion'));
    });
    context.subscriptions.push(chakraUIDocsAccordion);
    let chakraUIDocsBreadcrumb = vscode.commands.registerCommand('extension.chakraUIDocsBreadcrumb', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/breadcrumb'));
    });
    context.subscriptions.push(chakraUIDocsBreadcrumb);
    let chakraUIDocsCloseButton = vscode.commands.registerCommand('extension.chakraUIDocsCloseButton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/close-button'));
    });
    context.subscriptions.push(chakraUIDocsCloseButton);
    let chakraUIDocsIcon = vscode.commands.registerCommand('extension.chakraUIDocsIcon', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/icon'));
    });
    context.subscriptions.push(chakraUIDocsIcon);
    let chakraUIDocsLink = vscode.commands.registerCommand('extension.chakraUIDocsLink', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/link'));
    });
    context.subscriptions.push(chakraUIDocsLink);
    let chakraUIDocsTabs = vscode.commands.registerCommand('extension.chakraUIDocsTabs', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/tabs'));
    });
    context.subscriptions.push(chakraUIDocsTabs);
    let chakraUIDocsTransitions = vscode.commands.registerCommand('extension.chakraUIDocsTransitions', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/transitions'));
    });
    context.subscriptions.push(chakraUIDocsTransitions);
    let chakraUIDocsVisuallyHidden = vscode.commands.registerCommand('extension.chakraUIDocsVisuallyHidden', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/components/visually-hidden'));
    });
    context.subscriptions.push(chakraUIDocsVisuallyHidden);
    let chakraUIDocsContributing = vscode.commands.registerCommand('extension.chakraUIDocsContributing', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/contributing'));
    });
    context.subscriptions.push(chakraUIDocsContributing);
    let chakraUIDocsAvatar = vscode.commands.registerCommand('extension.chakraUIDocsAvatar', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/avatar'));
    });
    context.subscriptions.push(chakraUIDocsAvatar);
    let chakraUIDocsBadge = vscode.commands.registerCommand('extension.chakraUIDocsBadge', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/badge'));
    });
    context.subscriptions.push(chakraUIDocsBadge);
    let chakraUIDocsCode = vscode.commands.registerCommand('extension.chakraUIDocsCode', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/code'));
    });
    context.subscriptions.push(chakraUIDocsCode);
    let chakraUIDocsDivider = vscode.commands.registerCommand('extension.chakraUIDocsDivider', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/divider'));
    });
    context.subscriptions.push(chakraUIDocsDivider);
    let chakraUIDocsImage = vscode.commands.registerCommand('extension.chakraUIDocsImage', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/image'));
    });
    context.subscriptions.push(chakraUIDocsImage);
    let chakraUIDocsKbd = vscode.commands.registerCommand('extension.chakraUIDocsKbd', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/kbd'));
    });
    context.subscriptions.push(chakraUIDocsKbd);
    let chakraUIDocsList = vscode.commands.registerCommand('extension.chakraUIDocsList', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/list'));
    });
    context.subscriptions.push(chakraUIDocsList);
    let chakraUIDocsStat = vscode.commands.registerCommand('extension.chakraUIDocsStat', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/stat'));
    });
    context.subscriptions.push(chakraUIDocsStat);
    let chakraUIDocsTable = vscode.commands.registerCommand('extension.chakraUIDocsTable', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/table'));
    });
    context.subscriptions.push(chakraUIDocsTable);
    let chakraUIDocsTag = vscode.commands.registerCommand('extension.chakraUIDocsTag', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/data-display/tag'));
    });
    context.subscriptions.push(chakraUIDocsTag);
    let chakraUIDocsChakraFactory = vscode.commands.registerCommand('extension.chakraUIDocsChakraFactory', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/features/chakra-factory'));
    });
    context.subscriptions.push(chakraUIDocsChakraFactory);
    let chakraUIDocsColorMode = vscode.commands.registerCommand('extension.chakraUIDocsColorMode', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/features/color-mode'));
    });
    context.subscriptions.push(chakraUIDocsColorMode);
    let chakraUIDocsGlobalStyles = vscode.commands.registerCommand('extension.chakraUIDocsGlobalStyles', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/features/global-styles'));
    });
    context.subscriptions.push(chakraUIDocsGlobalStyles);
    let chakraUIDocsResponsiveStyles = vscode.commands.registerCommand('extension.chakraUIDocsResponsiveStyles', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/features/responsive-styles'));
    });
    context.subscriptions.push(chakraUIDocsResponsiveStyles);
    let chakraUIDocsStyleProps = vscode.commands.registerCommand('extension.chakraUIDocsStyleProps', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/features/style-props'));
    });
    context.subscriptions.push(chakraUIDocsStyleProps);
    let chakraUIDocsTextAndLayerStyles = vscode.commands.registerCommand('extension.chakraUIDocsTextAndLayerStyles', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/features/text-and-layer-styles'));
    });
    context.subscriptions.push(chakraUIDocsTextAndLayerStyles);
    let chakraUIDocsAlert = vscode.commands.registerCommand('extension.chakraUIDocsAlert', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/feedback/alert'));
    });
    context.subscriptions.push(chakraUIDocsAlert);
    let chakraUIDocsCircularProgress = vscode.commands.registerCommand('extension.chakraUIDocsCircularProgress', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/feedback/circular-progress'));
    });
    context.subscriptions.push(chakraUIDocsCircularProgress);
    let chakraUIDocsProgress = vscode.commands.registerCommand('extension.chakraUIDocsProgress', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/feedback/progress'));
    });
    context.subscriptions.push(chakraUIDocsProgress);
    let chakraUIDocsSkeleton = vscode.commands.registerCommand('extension.chakraUIDocsSkeleton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/feedback/skeleton'));
    });
    context.subscriptions.push(chakraUIDocsSkeleton);
    let chakraUIDocsSpinner = vscode.commands.registerCommand('extension.chakraUIDocsSpinner', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/feedback/spinner'));
    });
    context.subscriptions.push(chakraUIDocsSpinner);
    let chakraUIDocsToast = vscode.commands.registerCommand('extension.chakraUIDocsToast', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/feedback/toast'));
    });
    context.subscriptions.push(chakraUIDocsToast);
    let chakraUIDocsButton = vscode.commands.registerCommand('extension.chakraUIDocsButton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/button'));
    });
    context.subscriptions.push(chakraUIDocsButton);
    let chakraUIDocsCheckbox = vscode.commands.registerCommand('extension.chakraUIDocsCheckbox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/checkbox'));
    });
    context.subscriptions.push(chakraUIDocsCheckbox);
    let chakraUIDocsEditable = vscode.commands.registerCommand('extension.chakraUIDocsEditable', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/editable'));
    });
    context.subscriptions.push(chakraUIDocsEditable);
    let chakraUIDocsFormControl = vscode.commands.registerCommand('extension.chakraUIDocsFormControl', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/form-control'));
    });
    context.subscriptions.push(chakraUIDocsFormControl);
    let chakraUIDocsIconButton = vscode.commands.registerCommand('extension.chakraUIDocsIconButton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/icon-button'));
    });
    context.subscriptions.push(chakraUIDocsIconButton);
    let chakraUIDocsInput = vscode.commands.registerCommand('extension.chakraUIDocsInput', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/input'));
    });
    context.subscriptions.push(chakraUIDocsInput);
    let chakraUIDocsNumberInput = vscode.commands.registerCommand('extension.chakraUIDocsNumberInput', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/number-input'));
    });
    context.subscriptions.push(chakraUIDocsNumberInput);
    let chakraUIDocsPinInput = vscode.commands.registerCommand('extension.chakraUIDocsPinInput', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/pin-input'));
    });
    context.subscriptions.push(chakraUIDocsPinInput);
    let chakraUIDocsRadio = vscode.commands.registerCommand('extension.chakraUIDocsRadio', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/radio'));
    });
    context.subscriptions.push(chakraUIDocsRadio);
    let chakraUIDocsSelect = vscode.commands.registerCommand('extension.chakraUIDocsSelect', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/select'));
    });
    context.subscriptions.push(chakraUIDocsSelect);
    let chakraUIDocsSlider = vscode.commands.registerCommand('extension.chakraUIDocsSlider', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/slider'));
    });
    context.subscriptions.push(chakraUIDocsSlider);
    let chakraUIDocsSwitch = vscode.commands.registerCommand('extension.chakraUIDocsSwitch', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/switch'));
    });
    context.subscriptions.push(chakraUIDocsSwitch);
    let chakraUIDocsTextarea = vscode.commands.registerCommand('extension.chakraUIDocsTextarea', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/form/textarea'));
    });
    context.subscriptions.push(chakraUIDocsTextarea);
    let chakraUIDocsGettingStarted = vscode.commands.registerCommand('extension.chakraUIDocsGettingStarted', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/getting-started'));
    });
    context.subscriptions.push(chakraUIDocsGettingStarted);
    let chakraUIDocsUseBreakpointValue = vscode.commands.registerCommand('extension.chakraUIDocsUseBreakpointValue', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/hooks/use-breakpoint-value'));
    });
    context.subscriptions.push(chakraUIDocsUseBreakpointValue);
    let chakraUIDocsUseClipboard = vscode.commands.registerCommand('extension.chakraUIDocsUseClipboard', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/hooks/use-clipboard'));
    });
    context.subscriptions.push(chakraUIDocsUseClipboard);
    let chakraUIDocsUseControllable = vscode.commands.registerCommand('extension.chakraUIDocsUseControllable', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/hooks/use-controllable'));
    });
    context.subscriptions.push(chakraUIDocsUseControllable);
    let chakraUIDocsUseDisclosure = vscode.commands.registerCommand('extension.chakraUIDocsUseDisclosure', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/hooks/use-disclosure'));
    });
    context.subscriptions.push(chakraUIDocsUseDisclosure);
    let chakraUIDocsUseMediaQuery = vscode.commands.registerCommand('extension.chakraUIDocsUseMediaQuery', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/hooks/use-media-query'));
    });
    context.subscriptions.push(chakraUIDocsUseMediaQuery);
    let chakraUIDocsUsePrefersReducedMotion = vscode.commands.registerCommand('extension.chakraUIDocsUsePrefersReducedMotion', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/hooks/use-prefers-reduced-motion'));
    });
    context.subscriptions.push(chakraUIDocsUsePrefersReducedMotion);
    let chakraUIDocsUseTheme = vscode.commands.registerCommand('extension.chakraUIDocsUseTheme', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/hooks/use-theme'));
    });
    context.subscriptions.push(chakraUIDocsUseTheme);
    let chakraUIDocsUseToken = vscode.commands.registerCommand('extension.chakraUIDocsUseToken', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/hooks/use-token'));
    });
    context.subscriptions.push(chakraUIDocsUseToken);
    let chakraUIDocsAspectRatio = vscode.commands.registerCommand('extension.chakraUIDocsAspectRatio', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/aspect-ratio'));
    });
    context.subscriptions.push(chakraUIDocsAspectRatio);
    let chakraUIDocsBox = vscode.commands.registerCommand('extension.chakraUIDocsBox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/box'));
    });
    context.subscriptions.push(chakraUIDocsBox);
    let chakraUIDocsCenter = vscode.commands.registerCommand('extension.chakraUIDocsCenter', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/center'));
    });
    context.subscriptions.push(chakraUIDocsCenter);
    let chakraUIDocsContainer = vscode.commands.registerCommand('extension.chakraUIDocsContainer', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/container'));
    });
    context.subscriptions.push(chakraUIDocsContainer);
    let chakraUIDocsFlex = vscode.commands.registerCommand('extension.chakraUIDocsFlex', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/flex'));
    });
    context.subscriptions.push(chakraUIDocsFlex);
    let chakraUIDocsGrid = vscode.commands.registerCommand('extension.chakraUIDocsGrid', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/grid'));
    });
    context.subscriptions.push(chakraUIDocsGrid);
    let chakraUIDocsSimpleGrid = vscode.commands.registerCommand('extension.chakraUIDocsSimpleGrid', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/simple-grid'));
    });
    context.subscriptions.push(chakraUIDocsSimpleGrid);
    let chakraUIDocsStack = vscode.commands.registerCommand('extension.chakraUIDocsStack', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/stack'));
    });
    context.subscriptions.push(chakraUIDocsStack);
    let chakraUIDocsWrap = vscode.commands.registerCommand('extension.chakraUIDocsWrap', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/layout/wrap'));
    });
    context.subscriptions.push(chakraUIDocsWrap);
    let chakraUIDocsMigration = vscode.commands.registerCommand('extension.chakraUIDocsMigration', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/migration'));
    });
    context.subscriptions.push(chakraUIDocsMigration);
    let chakraUIDocsAlertDialog = vscode.commands.registerCommand('extension.chakraUIDocsAlertDialog', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/overlay/alert-dialog'));
    });
    context.subscriptions.push(chakraUIDocsAlertDialog);
    let chakraUIDocsDrawer = vscode.commands.registerCommand('extension.chakraUIDocsDrawer', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/overlay/drawer'));
    });
    context.subscriptions.push(chakraUIDocsDrawer);
    let chakraUIDocsMenu = vscode.commands.registerCommand('extension.chakraUIDocsMenu', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/overlay/menu'));
    });
    context.subscriptions.push(chakraUIDocsMenu);
    let chakraUIDocsModal = vscode.commands.registerCommand('extension.chakraUIDocsModal', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/overlay/modal'));
    });
    context.subscriptions.push(chakraUIDocsModal);
    let chakraUIDocsPopover = vscode.commands.registerCommand('extension.chakraUIDocsPopover', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/overlay/popover'));
    });
    context.subscriptions.push(chakraUIDocsPopover);
    let chakraUIDocsTooltip = vscode.commands.registerCommand('extension.chakraUIDocsTooltip', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/overlay/tooltip'));
    });
    context.subscriptions.push(chakraUIDocsTooltip);
    let chakraUIDocsPrinciples = vscode.commands.registerCommand('extension.chakraUIDocsPrinciples', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/principles'));
    });
    context.subscriptions.push(chakraUIDocsPrinciples);
    let chakraUIDocsAdvanced = vscode.commands.registerCommand('extension.chakraUIDocsAdvanced', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/theming/advanced'));
    });
    context.subscriptions.push(chakraUIDocsAdvanced);
    let chakraUIDocsComponentStyle = vscode.commands.registerCommand('extension.chakraUIDocsComponentStyle', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/theming/component-style'));
    });
    context.subscriptions.push(chakraUIDocsComponentStyle);
    let chakraUIDocsCustomizeTheme = vscode.commands.registerCommand('extension.chakraUIDocsCustomizeTheme', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/theming/customize-theme'));
    });
    context.subscriptions.push(chakraUIDocsCustomizeTheme);
    let chakraUIDocsTheme = vscode.commands.registerCommand('extension.chakraUIDocsTheme', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/theming/theme'));
    });
    context.subscriptions.push(chakraUIDocsTheme);
    let chakraUIDocsHeading = vscode.commands.registerCommand('extension.chakraUIDocsHeading', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/typography/heading'));
    });
    context.subscriptions.push(chakraUIDocsHeading);
    let chakraUIDocsText = vscode.commands.registerCommand('extension.chakraUIDocsText', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/docs/typography/text'));
    });
    context.subscriptions.push(chakraUIDocsText);

}