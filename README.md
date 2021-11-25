# Dependencies

## CSS / Styling

- [Tailwindcss](https://tailwindcss.com/docs/guides/create-react-app)
  - `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
  - ...and then follow the rest of the instructions
  - If using components, install `npm install @headlessui/react`
  - If using tailwind forms, typography, line-clamp, or aspect ratio, install these ([tailwindPlugins](https://tailwindcss.com/docs/plugins)):
  - `npm install @tailwindcss/forms`
  - `npm install @tailwindcss/typography`
  - `npm install @tailwindcss/line-clamp`
  - `npm install @tailwindcss/aspect-ratio`
  - add this to tailwind.config.js

```
        plugins: [
            require('@tailwindcss/typography'),
            require('@tailwindcss/forms'),
            require('@tailwindcss/line-clamp'),
            require('@tailwindcss/aspect-ratio'),
      ]
```

## Icons

- Heroicons are the main icons and easy to use with react and tailwind: `npm i heroicons`
- Additional icons to supplement heroicons: `npm i @graywolfai/react-heroicons`
