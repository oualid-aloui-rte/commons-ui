/**
 * Copyright (c) 2024, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { FunctionComponent, ReactElement } from 'react';
import type {
    CheckboxProps,
    SwitchProps,
    SxProps,
    TextFieldProps,
} from '@mui/material';

/**
 * Section to export generated type declarations
 */

export {
    default as TreeViewFinder,
    TreeViewFinderProps,
    TreeViewFinderNodeProps,
} from './components/TreeViewFinder';
export { default as AboutDialog } from './components/TopBar/AboutDialog';
export { default as AuthenticationRouter } from './components/AuthenticationRouter';
export { default as MuiVirtualizedTable } from './components/MuiVirtualizedTable';
export {
    KeyedColumnsRowIndexer,
    CHANGE_WAYS,
} from './components/MuiVirtualizedTable';
export { default as ReportViewer } from './components/ReportViewer';
export { default as ReportViewerDialog } from './components/ReportViewerDialog';
export { default as ElementSearchDialog } from './components/ElementSearchDialog';
export { default as MultipleSelectionDialog } from './components/MultipleSelectionDialog';

export {
    Equipment,
    EquipmentInfos,
    EQUIPMENT_TYPE,
    EquipmentType,
    getEquipmentsInfosForSearchBar,
    equipmentStyles,
    Identifiable,
} from './utils/EquipmentType';

export {
    initializeAuthenticationDev,
    initializeAuthenticationProd,
    dispatchUser,
    getPreLoginPath,
} from './utils/AuthService';

export {
    DEFAULT_CELL_PADDING,
    DEFAULT_HEADER_HEIGHT,
    DEFAULT_ROW_HEIGHT,
} from './components/MuiVirtualizedTable/MuiVirtualizedTable';

export {
    DARK_THEME,
    LIGHT_THEME,
    LANG_SYSTEM,
    LANG_ENGLISH,
    LANG_FRENCH,
} from './components/TopBar/TopBar';
export {
    USER,
    setLoggedUser,
    SIGNIN_CALLBACK_ERROR,
    setSignInCallbackError,
    UNAUTHORIZED_USER_INFO,
    LOGOUT_ERROR,
    USER_VALIDATION_ERROR,
    RESET_AUTHENTICATION_ROUTER_ERROR,
    SHOW_AUTH_INFO_LOGIN,
} from './utils/actions';
export {
    getCriteriaBasedFormData,
    getCriteriaBasedSchema,
} from './components/filter/utils/criteria-based-utils';
export { default as report_viewer_en } from './components/translations/report-viewer-en';
export { default as report_viewer_fr } from './components/translations/report-viewer-fr';
export { default as login_en } from './components/translations/login-en';
export { default as login_fr } from './components/translations/login-fr';
export { default as top_bar_en } from './components/translations/top-bar-en';
export { default as top_bar_fr } from './components/translations/top-bar-fr';
export { default as table_en } from './components/translations/table-en';
export { default as table_fr } from './components/translations/table-fr';
export { default as treeview_finder_en } from './components/translations/treeview-finder-en';
export { default as treeview_finder_fr } from './components/translations/treeview-finder-fr';
export { default as element_search_en } from './components/translations/element-search-en';
export { default as element_search_fr } from './components/translations/element-search-fr';
export { default as equipment_search_en } from './components/translations/equipment-search-en';
export { default as equipment_search_fr } from './components/translations/equipment-search-fr';
export { default as filter_en } from './components/translations/filter-en';
export { default as filter_fr } from './components/translations/filter-fr';
export { default as card_error_boundary_en } from './components/translations/card-error-boundary-en';
export { default as card_error_boundary_fr } from './components/translations/card-error-boundary-fr';
export { default as flat_parameters_en } from './components/translations/flat-parameters-en';
export { default as flat_parameters_fr } from './components/translations/flat-parameters-fr';
export { default as multiple_selection_dialog_en } from './components/translations/multiple-selection-dialog-en';
export { default as multiple_selection_dialog_fr } from './components/translations/multiple-selection-dialog-fr';
export { default as common_button_en } from './components/translations/common-button-en';
export { default as common_button_fr } from './components/translations/common-button-fr';
export { default as directory_items_input_en } from './components/translations/directory-items-input-en';
export { default as directory_items_input_fr } from './components/translations/directory-items-input-fr';

export { TagRenderer } from './components/ElementSearchDialog';
export { EquipmentItem } from './components/ElementSearchDialog/equipment-item';
export { useIntlRef } from './hooks/useIntlRef';
export { default as SelectClearable } from './components/inputs/select-clearable';
export { useCustomFormContext } from './components/react-hook-form/provider/use-custom-form-context';
export { default as CustomFormProvider } from './components/react-hook-form/provider/custom-form-provider';
export { default as SliderInput } from './components/react-hook-form/slider-input';
export { default as TextFieldWithAdornment } from './components/react-hook-form/utils/text-field-with-adornment';
export { default as SelectInput } from './components/react-hook-form/select-inputs/select-input';
export { default as ErrorInput } from './components/react-hook-form/error-management/error-input';
export { default as AutocompleteInput } from './components/react-hook-form/autocomplete-input';
export { default as TextInput } from './components/react-hook-form/text-input';
export { default as FloatInput } from './components/react-hook-form/numbers/float-input';
export { default as RadioInput } from './components/react-hook-form/radio-input';
export { default as SubmitButton } from './components/react-hook-form/utils/submit-button';
export { default as CancelButton } from './components/react-hook-form/utils/cancel-button';
export { default as FieldLabel } from './components/react-hook-form/utils/field-label';
export { default as FieldErrorAlert } from './components/react-hook-form/error-management/field-error-alert';
export { default as FilterCreationDialog } from './components/filter/filter-creation-dialog';
export { default as ExpertFilterEditionDialog } from './components/filter/expert/expert-filter-edition-dialog';
export { default as ExplicitNamingFilterEditionDialog } from './components/filter/explicit-naming/explicit-naming-filter-edition-dialog';
export { default as CriteriaBasedFilterEditionDialog } from './components/filter/criteria-based/criteria-based-filter-edition-dialog';
export { default as ExpandingTextField } from './components/react-hook-form/expanding-text-field';
export { default as CustomMuiDialog } from './components/dialogs/custom-mui-dialog';
export {
    genHelperPreviousValue,
    genHelperError,
    identity,
    isFieldRequired,
    gridItem,
    isFloatNumber,
    toFloatOrNullValue,
} from './components/react-hook-form/utils/functions';
export { default as DirectoryItemsInput } from './components/react-hook-form/directory-items-input';
export { default as DirectoryItemSelector } from './components/DirectoryItemSelector/directory-item-selector';
export { RawReadOnlyInput } from './components/react-hook-form/raw-read-only-input';
export { UserManagerMock } from './utils/UserManagerMock';
export {
    keyGenerator,
    areArrayElementsUnique,
    mergeSx,
    isObjectEmpty,
} from './utils/functions';

export { ElementType, getFileIcon } from './utils/ElementType';
export {
    saveExplicitNamingFilter,
    saveCriteriaBasedFilter,
    saveExpertFilter,
} from './components/filter/utils/filters-utils';
export {
    RangeInput,
    DEFAULT_RANGE_VALUE,
    getRangeInputDataForm,
    getRangeInputSchema,
} from './components/react-hook-form/range-input';
export { InputWithPopupConfirmation } from './components/react-hook-form/select-inputs/input-with-popup-confirmation';
export { MuiSelectInput } from './components/react-hook-form/select-inputs/mui-select-input';
export {
    CountriesInput,
    getSystemLanguage,
    getComputedLanguage,
} from './components/react-hook-form/select-inputs/countries-input';
export { MultipleAutocompleteInput } from './components/react-hook-form/autocomplete-inputs/multiple-autocomplete-input';
export { CsvUploader } from './components/react-hook-form/ag-grid-table-rhf/csv-uploader/csv-uploader';
export { UniqueNameInput } from './components/react-hook-form/unique-name-input';

export {
    Line,
    Generator,
    Load,
    Battery,
    SVC,
    DanglingLine,
    LCC,
    VSC,
    Hvdc,
    BusBar,
    TwoWindingTransfo,
    ThreeWindingTransfo,
    ShuntCompensator,
    VoltageLevel,
    Substation,
    noSelectionForCopy,
} from './components/filter/constants/equipment-types';

export { FieldConstants } from './components/filter/constants/field-constants';

export {
    GRIDSUITE_DEFAULT_PRECISION,
    roundToPrecision,
    roundToDefaultPrecision,
    isBlankOrEmpty,
    unitToMicroUnit,
    microUnitToUnit,
} from './utils/conversion-utils';

export { useSnackMessage } from './hooks/useSnackMessage';
export { useDebounce } from './hooks/useDebounce';
export { ROW_DRAGGING_SELECTION_COLUMN_DEF } from './components/react-hook-form/ag-grid-table-rhf/custom-ag-grid-table';
export { FILTER_EQUIPMENTS } from './components/filter/utils/criteria-based-utils';
export { CONTINGENCY_LIST_EQUIPMENTS } from './components/filter/utils/criteria-based-utils';

/**
 * Section to export manual type declarations of .js and .jsx files
 */

export const CardErrorBoundary: FunctionComponent<any>;
export const TopBar: FunctionComponent<any>;
export const SnackbarProvider: FunctionComponent<any>;

export function logout(
    dispatch: any,
    userManagerInstance: any
): Promise<any | undefined>;

export const MidFormError: FunctionComponent;

export const IntegerInput: FunctionComponent<
    Omit<
        TextInputProps,
        'outputTransform' | 'inputTransform' | 'acceptValue' // already defined in IntegerInput
    >
>;

interface SwitchInputProps {
    name: string;
    label?: string;
    formProps?: Omit<SwitchProps, 'disabled'>;
}

export const SwitchInput: FunctionComponent<SwitchInputProps>;

interface CheckboxInputProps {
    name: string;
    label?: string;
    formProps?: Omit<CheckboxProps, 'disabled'>;
}

export const CheckboxInput: FunctionComponent<CheckboxInputProps>;

interface Parameters {
    name: string;
    description: string;
    type: string;
    defaultValue: any;
    possibleValues?: string[] | null;
}

interface FlatParametersProps extends Pick<TextFieldProps, 'variant'> {
    paramsAsArray: Parameters[];
    initValues: Record<string, any>;
    onChange: (paramName: string, value: any, isEdit: boolean) => void;
    showSeparator?: boolean;
    selectionWithDialog?: (parameters: Parameters) => boolean;
}

export const FlatParameters: FunctionComponent<FlatParametersProps>;

interface OverflowableTextProps {
    sx?: SxProps;
    text?: string | ReactElement;
}

export const OverflowableText: FunctionComponent<OverflowableTextProps>;
