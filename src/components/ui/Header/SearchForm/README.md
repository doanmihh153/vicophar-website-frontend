# SearchForm Component

This directory contains the search functionality for the Vicophar website header.

## Structure

- `SearchForm.jsx`: Main component used in the Header. Handles desktop search and triggers mobile drawer.
- `SuggestionsList.jsx`: Dropdown component for desktop search suggestions.
- `MobileSearchDrawer.jsx`: Full-screen search interface for mobile/tablet devices (< 1024px).
- `useMobileSearch.js`: Custom hook managing logic for the mobile drawer (state, filtering).

## Mobile Search Logic (< 1024px)

When the user clicks on the search input on a device with width < 1024px:
1. The default focus event is intercepted.
2. The `MobileSearchDrawer` is opened via a React Portal.
3. The drawer provides a full-screen experience with auto-focus on its own input.
4. Results are separated into "Products" and "Articles" sections.

## Desktop Search Logic (≥ 1024px)

Standard behavior:
1. Input focus triggers a dropdown (`SuggestionsList`).
2. Results are mixed or displayed as a single list.
3. Keyboard navigation is supported.
