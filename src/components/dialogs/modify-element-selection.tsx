/**
 * Copyright (c) 2023, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import React, { useContext, useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { useController } from 'react-hook-form';
import { UUID } from 'crypto';
import { FilterContext } from '../filter/filter-context.ts';
import { TreeViewFinderNodeProps } from '../TreeViewFinder';
import { FieldConstants } from '../../utils/field-constants.ts';
import DirectoryItemSelector from '../DirectoryItemSelector/directory-item-selector.tsx';
import { ElementType } from '../../utils/ElementType.ts';

export interface ModifyElementSelectionProps {
    elementType: ElementType;
    dialogOpeningButtonLabel: string;
    dialogTitleLabel: string;
    dialogMessageLabel: string;
    noElementMessageLabel?: string;
    onElementValidated?: (elementId: UUID) => void;
}

const ModifyElementSelection: React.FunctionComponent<
    ModifyElementSelectionProps
> = (props) => {
    const intl = useIntl();

    const [open, setOpen] = useState<boolean>(false);
    const [activeDirectoryName, setActiveDirectoryName] = useState('');

    const {
        fetchDirectoryContent,
        fetchRootFolders,
        fetchElementsInfos,
        fetchPath,
    } = useContext(FilterContext);

    const {
        field: { onChange, value: directory },
    } = useController({
        name: FieldConstants.DIRECTORY,
    });

    useEffect(() => {
        if (directory) {
            fetchPath &&
                fetchPath(directory).then((res: any) => {
                    setActiveDirectoryName(
                        res
                            .map((element: any) => element.elementName.trim())
                            .reverse()
                            .join('/')
                    );
                });
        }
    }, [directory, fetchPath]);

    const handleSelectFolder = () => {
        setOpen(true);
    };

    const handleClose = (nodes: TreeViewFinderNodeProps[]) => {
        if (nodes.length) {
            onChange(nodes[0].id);
            if (props.onElementValidated) {
                props.onElementValidated(nodes[0].id as UUID);
            }
        }
        setOpen(false);
    };

    return (
        <Grid
            sx={{
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Button
                onClick={handleSelectFolder}
                variant="contained"
                sx={{
                    padding: '10px 30px',
                }}
                color="primary"
                component="label"
            >
                <FormattedMessage id={props.dialogOpeningButtonLabel} />
            </Button>
            <Typography
                sx={{
                    marginLeft: '10px',
                    fontWeight: 'bold',
                }}
            >
                {activeDirectoryName
                    ? activeDirectoryName
                    : props?.noElementMessageLabel
                    ? intl.formatMessage({
                          id: props.noElementMessageLabel,
                      })
                    : ''}
            </Typography>
            <DirectoryItemSelector
                open={open}
                onClose={handleClose}
                types={[props.elementType]}
                onlyLeaves={props.elementType !== ElementType.DIRECTORY}
                multiSelect={false}
                validationButtonText={intl.formatMessage({
                    id: 'confirmDirectoryDialog',
                })}
                title={intl.formatMessage({
                    id: props.dialogTitleLabel,
                })}
                contentText={intl.formatMessage({
                    id: props.dialogMessageLabel,
                })}
                fetchDirectoryContent={fetchDirectoryContent}
                fetchRootFolders={fetchRootFolders}
                fetchElementsInfos={fetchElementsInfos}
            />
        </Grid>
    );
};

export default ModifyElementSelection;