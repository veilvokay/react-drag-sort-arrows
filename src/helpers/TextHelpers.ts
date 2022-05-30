export const convertToString = (input?: string | number) => {
    if (input) {
        if (typeof input === 'string') {
            return input;
        }

        return String(input);
    }
    return '';
}

export const toWords = (input: string | number) => {
    if (!input) return;

    input = convertToString(input);

    const regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

    return input.match(regex);
}

export const toCamelCaseArray = (inputArray: string[]) => {
    if (!inputArray) return;

    let result = '';

    for (let i = 0, len = inputArray.length; i < len; i++) {
        let currentString = inputArray[i];
        let tempString = currentString.toLowerCase();

        if (i !== 0) {
            tempString = tempString.substr(0, 1).toUpperCase() + tempString.substr(1);
        }

        result += tempString;
    }

    return result;
}

export const toCamelCaseString = (input: string | number) => {
    let words = toWords(input);
    return toCamelCaseArray(words as string[]);
}