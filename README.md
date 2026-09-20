<div align="center">
    <a href="https://www.youtube.com/@teamtheartistweb" target="_blank">
        <img src="./banner.png" alt="The Artist Web - YouTube" style="border-radius: 32px;" width="100%" />
    </a>
</div>

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {}

.dark {}

@theme inline {
    --spacing: 4px;
   
    ...
}

@theme {
    /**
     * Spacing
     */
    --spacing-extra-small: 32px;
    --spacing-small: 40px;
    --spacing-medium: 48px;
    --spacing-large: 56px;
    --spacing-extra-large: 96px;

    /**
     * Breakpoint
     */
    --breakpoint-xs: 568px;
    --breakpoint-sm: 768px;
    --breakpoint-md: 992px;
    --breakpoint-lg: 1280px;
    --breakpoint-xl: 1440px;

    /**
     * Others
     */
    ...
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  html {
    @apply font-sans;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```
