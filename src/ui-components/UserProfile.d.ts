/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyfitrackrProdDB } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type UserProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    myfitrackrProdDB?: MyfitrackrProdDB;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function UserProfile(props: UserProfileProps): React.ReactElement;
