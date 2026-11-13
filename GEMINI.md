# Workspace Coding Rules & Guidelines

## 1. JSX Syntax & Expression Order
- **Preserve Natural Order**: Always preserve the exact intended order of static text and embedded JSX expressions.
  - *Example*: Keep `"Username is {props.a}"` in that exact sequence; never move `{props.a}` before `"is"`, nor rearrange labels, prefixes, or suffixes.
- **No Unsolicited Rearrangements**: Never rearrange, reorder, or rewrite existing text, props, or component structure unless explicitly asked by the user.

## 2. React & JSX Standards
- Always use standard JSX attributes: `className` instead of `class`, `htmlFor` instead of `for`.
- Avoid dangling, duplicate, or unclosed HTML/JSX attributes.
- Ensure all components, hooks, and props match exact casing (e.g., `handleSubmit`, `useState`).

## 3. Targeted & Accurate Suggestions
- Keep edits minimal, precise, and directly focused on the user's intent.
- Ensure autocomplete suggestions and code edits match the exact context of the active file.

