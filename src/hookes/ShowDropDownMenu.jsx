'use client';

import { useState } from "react";

export function useShowDropDownMenu() {
    const [showDropdown, setShowDropdown] = useState(false);

    return {
        showDropdown,
        setShowDropdown
    };
}