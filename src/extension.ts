'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let chakraUIDocsAccordion = vscode.commands.registerCommand('extension.chakraUIDocsAccordion', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/accordion'));
    });
    context.subscriptions.push(chakraUIDocsAccordion);
    let chakraUIDocsAlert = vscode.commands.registerCommand('extension.chakraUIDocsAlert', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/alert'));
    });
    context.subscriptions.push(chakraUIDocsAlert);
    let chakraUIDocsAlertdialog = vscode.commands.registerCommand('extension.chakraUIDocsAlertdialog', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/alertdialog'));
    });
    context.subscriptions.push(chakraUIDocsAlertdialog);
    let chakraUIDocsAspectratiobox = vscode.commands.registerCommand('extension.chakraUIDocsAspectratiobox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/aspectratiobox'));
    });
    context.subscriptions.push(chakraUIDocsAspectratiobox);
    let chakraUIDocsAvatar = vscode.commands.registerCommand('extension.chakraUIDocsAvatar', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/avatar'));
    });
    context.subscriptions.push(chakraUIDocsAvatar);
    let chakraUIDocsBadge = vscode.commands.registerCommand('extension.chakraUIDocsBadge', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/badge'));
    });
    context.subscriptions.push(chakraUIDocsBadge);
    let chakraUIDocsBox = vscode.commands.registerCommand('extension.chakraUIDocsBox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/box'));
    });
    context.subscriptions.push(chakraUIDocsBox);
    let chakraUIDocsBreadcrumb = vscode.commands.registerCommand('extension.chakraUIDocsBreadcrumb', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/breadcrumb'));
    });
    context.subscriptions.push(chakraUIDocsBreadcrumb);
    let chakraUIDocsButton = vscode.commands.registerCommand('extension.chakraUIDocsButton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/button'));
    });
    context.subscriptions.push(chakraUIDocsButton);
    let chakraUIDocsCheckbox = vscode.commands.registerCommand('extension.chakraUIDocsCheckbox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/checkbox'));
    });
    context.subscriptions.push(chakraUIDocsCheckbox);
    let chakraUIDocsCircularprogress = vscode.commands.registerCommand('extension.chakraUIDocsCircularprogress', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/circularprogress'));
    });
    context.subscriptions.push(chakraUIDocsCircularprogress);
    let chakraUIDocsClosebutton = vscode.commands.registerCommand('extension.chakraUIDocsClosebutton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/closebutton'));
    });
    context.subscriptions.push(chakraUIDocsClosebutton);
    let chakraUIDocsCode = vscode.commands.registerCommand('extension.chakraUIDocsCode', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/code'));
    });
    context.subscriptions.push(chakraUIDocsCode);
    let chakraUIDocsCollapse = vscode.commands.registerCommand('extension.chakraUIDocsCollapse', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/collapse'));
    });
    context.subscriptions.push(chakraUIDocsCollapse);
    let chakraUIDocsColorMode = vscode.commands.registerCommand('extension.chakraUIDocsColorMode', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/color-mode'));
    });
    context.subscriptions.push(chakraUIDocsColorMode);
    let chakraUIDocsContributing = vscode.commands.registerCommand('extension.chakraUIDocsContributing', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/contributing'));
    });
    context.subscriptions.push(chakraUIDocsContributing);
    let chakraUIDocsControlbox = vscode.commands.registerCommand('extension.chakraUIDocsControlbox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/controlbox'));
    });
    context.subscriptions.push(chakraUIDocsControlbox);
    let chakraUIDocsDivider = vscode.commands.registerCommand('extension.chakraUIDocsDivider', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/divider'));
    });
    context.subscriptions.push(chakraUIDocsDivider);
    let chakraUIDocsDrawer = vscode.commands.registerCommand('extension.chakraUIDocsDrawer', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/drawer'));
    });
    context.subscriptions.push(chakraUIDocsDrawer);
    let chakraUIDocsEditable = vscode.commands.registerCommand('extension.chakraUIDocsEditable', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/editable'));
    });
    context.subscriptions.push(chakraUIDocsEditable);
    let chakraUIDocsFlex = vscode.commands.registerCommand('extension.chakraUIDocsFlex', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/flex'));
    });
    context.subscriptions.push(chakraUIDocsFlex);
    let chakraUIDocsFormcontrol = vscode.commands.registerCommand('extension.chakraUIDocsFormcontrol', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/formcontrol'));
    });
    context.subscriptions.push(chakraUIDocsFormcontrol);
    let chakraUIDocsGettingStarted = vscode.commands.registerCommand('extension.chakraUIDocsGettingStarted', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/getting-started'));
    });
    context.subscriptions.push(chakraUIDocsGettingStarted);
    let chakraUIDocsGrid = vscode.commands.registerCommand('extension.chakraUIDocsGrid', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/grid'));
    });
    context.subscriptions.push(chakraUIDocsGrid);
    let chakraUIDocsHeading = vscode.commands.registerCommand('extension.chakraUIDocsHeading', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/heading'));
    });
    context.subscriptions.push(chakraUIDocsHeading);
    let chakraUIDocsIcon = vscode.commands.registerCommand('extension.chakraUIDocsIcon', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/icon'));
    });
    context.subscriptions.push(chakraUIDocsIcon);
    let chakraUIDocsIconbutton = vscode.commands.registerCommand('extension.chakraUIDocsIconbutton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/iconbutton'));
    });
    context.subscriptions.push(chakraUIDocsIconbutton);
    let chakraUIDocsImage = vscode.commands.registerCommand('extension.chakraUIDocsImage', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/image'));
    });
    context.subscriptions.push(chakraUIDocsImage);
    let chakraUIDocsInput = vscode.commands.registerCommand('extension.chakraUIDocsInput', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/input'));
    });
    context.subscriptions.push(chakraUIDocsInput);
    let chakraUIDocsLink = vscode.commands.registerCommand('extension.chakraUIDocsLink', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/link'));
    });
    context.subscriptions.push(chakraUIDocsLink);
    let chakraUIDocsList = vscode.commands.registerCommand('extension.chakraUIDocsList', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/list'));
    });
    context.subscriptions.push(chakraUIDocsList);
    let chakraUIDocsMenu = vscode.commands.registerCommand('extension.chakraUIDocsMenu', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/menu'));
    });
    context.subscriptions.push(chakraUIDocsMenu);
    let chakraUIDocsModal = vscode.commands.registerCommand('extension.chakraUIDocsModal', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/modal'));
    });
    context.subscriptions.push(chakraUIDocsModal);
    let chakraUIDocsNumberinput = vscode.commands.registerCommand('extension.chakraUIDocsNumberinput', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/numberinput'));
    });
    context.subscriptions.push(chakraUIDocsNumberinput);
    let chakraUIDocsPopover = vscode.commands.registerCommand('extension.chakraUIDocsPopover', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/popover'));
    });
    context.subscriptions.push(chakraUIDocsPopover);
    let chakraUIDocsPrinciples = vscode.commands.registerCommand('extension.chakraUIDocsPrinciples', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/principles'));
    });
    context.subscriptions.push(chakraUIDocsPrinciples);
    let chakraUIDocsProgress = vscode.commands.registerCommand('extension.chakraUIDocsProgress', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/progress'));
    });
    context.subscriptions.push(chakraUIDocsProgress);
    let chakraUIDocsPseudobox = vscode.commands.registerCommand('extension.chakraUIDocsPseudobox', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/pseudobox'));
    });
    context.subscriptions.push(chakraUIDocsPseudobox);
    let chakraUIDocsRadio = vscode.commands.registerCommand('extension.chakraUIDocsRadio', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/radio'));
    });
    context.subscriptions.push(chakraUIDocsRadio);
    let chakraUIDocsRecipes = vscode.commands.registerCommand('extension.chakraUIDocsRecipes', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/recipes'));
    });
    context.subscriptions.push(chakraUIDocsRecipes);
    let chakraUIDocsResponsiveStyles = vscode.commands.registerCommand('extension.chakraUIDocsResponsiveStyles', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/responsive-styles'));
    });
    context.subscriptions.push(chakraUIDocsResponsiveStyles);
    let chakraUIDocsSelect = vscode.commands.registerCommand('extension.chakraUIDocsSelect', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/select'));
    });
    context.subscriptions.push(chakraUIDocsSelect);
    let chakraUIDocsSimplegrid = vscode.commands.registerCommand('extension.chakraUIDocsSimplegrid', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/simplegrid'));
    });
    context.subscriptions.push(chakraUIDocsSimplegrid);
    let chakraUIDocsSkeleton = vscode.commands.registerCommand('extension.chakraUIDocsSkeleton', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/skeleton'));
    });
    context.subscriptions.push(chakraUIDocsSkeleton);
    let chakraUIDocsSlider = vscode.commands.registerCommand('extension.chakraUIDocsSlider', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/slider'));
    });
    context.subscriptions.push(chakraUIDocsSlider);
    let chakraUIDocsSpinner = vscode.commands.registerCommand('extension.chakraUIDocsSpinner', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/spinner'));
    });
    context.subscriptions.push(chakraUIDocsSpinner);
    let chakraUIDocsStack = vscode.commands.registerCommand('extension.chakraUIDocsStack', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/stack'));
    });
    context.subscriptions.push(chakraUIDocsStack);
    let chakraUIDocsStat = vscode.commands.registerCommand('extension.chakraUIDocsStat', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/stat'));
    });
    context.subscriptions.push(chakraUIDocsStat);
    let chakraUIDocsStyleProps = vscode.commands.registerCommand('extension.chakraUIDocsStyleProps', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/style-props'));
    });
    context.subscriptions.push(chakraUIDocsStyleProps);
    let chakraUIDocsSwitch = vscode.commands.registerCommand('extension.chakraUIDocsSwitch', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/switch'));
    });
    context.subscriptions.push(chakraUIDocsSwitch);
    let chakraUIDocsTabs = vscode.commands.registerCommand('extension.chakraUIDocsTabs', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/tabs'));
    });
    context.subscriptions.push(chakraUIDocsTabs);
    let chakraUIDocsTag = vscode.commands.registerCommand('extension.chakraUIDocsTag', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/tag'));
    });
    context.subscriptions.push(chakraUIDocsTag);
    let chakraUIDocsText = vscode.commands.registerCommand('extension.chakraUIDocsText', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/text'));
    });
    context.subscriptions.push(chakraUIDocsText);
    let chakraUIDocsTextarea = vscode.commands.registerCommand('extension.chakraUIDocsTextarea', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/textarea'));
    });
    context.subscriptions.push(chakraUIDocsTextarea);
    let chakraUIDocsTheme = vscode.commands.registerCommand('extension.chakraUIDocsTheme', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/theme'));
    });
    context.subscriptions.push(chakraUIDocsTheme);
    let chakraUIDocsToast = vscode.commands.registerCommand('extension.chakraUIDocsToast', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/toast'));
    });
    context.subscriptions.push(chakraUIDocsToast);
    let chakraUIDocsTooltip = vscode.commands.registerCommand('extension.chakraUIDocsTooltip', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/tooltip'));
    });
    context.subscriptions.push(chakraUIDocsTooltip);
    let chakraUIDocsUseclipboard = vscode.commands.registerCommand('extension.chakraUIDocsUseclipboard', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/useclipboard'));
    });
    context.subscriptions.push(chakraUIDocsUseclipboard);
    let chakraUIDocsUsedisclosure = vscode.commands.registerCommand('extension.chakraUIDocsUsedisclosure', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/usedisclosure'));
    });
    context.subscriptions.push(chakraUIDocsUsedisclosure);
    let chakraUIDocsUsetheme = vscode.commands.registerCommand('extension.chakraUIDocsUsetheme', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://chakra-ui.com/usetheme'));
    });
    context.subscriptions.push(chakraUIDocsUsetheme);
}
