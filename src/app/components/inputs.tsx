import * as csx from "csx";
import {textColor} from "../styles/styles";
import * as React from "react";
import * as ui from "../ui";
import * as styles from "../styles/styles";
import * as fstyle from "../base/fstyle";

const inputBlackClassName = fstyle.style(styles.modal.inputStyleBase, {
    fontSize: '.7rem',
    lineHeight: '.7rem',
    fontFamily: 'sans-serif',
    flex: '1',
});

export const InputBlack = ui.Radium((props: {
    style?: React.CSSProperties,
    value: string,
    onChange: (value: string) => any,
    onKeyDown?: () => any,
    placeholder?: string,
}) => {
    return (
        <input
            className={inputBlackClassName}
            style={props.style}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e)=>props.onChange((e.target as HTMLInputElement).value)}
            onKeyDown={props.onKeyDown}
        />
    );
});
