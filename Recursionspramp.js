function flattenDictionary(dict) {
    let newDict = {}
    /*
    for (const [key, value] of dict.entries()) {
    console.log(key, value);
    typeof value; 
  }
    
    */

    for (const [key, value] of dict.entries()) {
        if (typeof value === "string") {
            newDict.push(key, value);
        } else {
            // recursion

            newSubDict = callRecursiveFuncion(value)
            for (newSubDict) {
                newKey = Key + subKey
                newDict.concat(newKey, subvalue)
            }

        }
    }
}