function capitalize(str: string): string {
    if (str.length > 0 && str.length > 1)
        return str.charAt(0).toUpperCase() + str.slice(1);
    if (str.length > 0)
        return str.charAt(0)
    return str
}

export {capitalize}