"use client"

import {Button} from "@mantine/core";
import Link from "next/link";
import React from "react";


const NavButton = ({className, to, btnTxt, variant = "filled", icon}: {
    className?: string,
    to: string,
    btnTxt: string,
    variant?: string,
    icon?: React.ReactNode,
}) => {
    return (<Link className={className} href={to}>
        <Button className={"hover:bg-rose-600"}
                variant={variant}
                leftIcon={icon}>{btnTxt}</Button>
    </Link>)
}

export default NavButton