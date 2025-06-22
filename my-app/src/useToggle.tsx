import React, { use, useCallback } from 'react';
import { useEffect, useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => { setValue(prev => !prev); }, []);

    return [value, toggle];
}