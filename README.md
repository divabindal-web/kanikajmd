# Kanika Gupta Shori - Personal Site

A tightened, photo-forward personal site. Clean cool palette (no beige), a single
emerald accent, Cormorant Garamond display + Inter. Built to read calm and
premium, not busy.

Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

## What changed in this pass

- Cut to a shorter scroll: Hero, Featured In (moving band, now at the top),
  Numbers, About, News, Awards, Videos, Square Yards, Connect.
- New type system: Cormorant Garamond for display, Inter for everything else.
  The old mono labels are gone.
- New palette: white, cool greys, ink, and one deep emerald accent. All beige,
  brass and warm tones removed.
- Tighter spacing throughout, less empty space between sections.
- Removed the Statement section, the Essays section, and the dance-forms detail.
- Numbers band is smaller. About is shorter with a highlights grid and her real
  quote. Featured In is a moving marquee. Awards shows two featured, with a
  presentable "all awards" page. News is a new interactive layout.
- New Videos section with her real YouTube videos (embedded player + cards).
- Every News and Awards item links to the real live article page.
- No em dashes anywhere.

## The one thing to add: photos

Two image spots use local files. Drop replacements at these exact paths:

- `public/kanika-portrait.jpg` - the About portrait (shown at 4:5). A cool
  placeholder is in there now.
- Hero photo: the hero currently pulls her own share image from
  kanikaguptashori.com. To use a specific file instead, set `heroImage` at the
  top of `lib/content.ts` to `"/kanika-hero.jpg"` and drop that file in
  `public/`. If the remote image ever fails to load, the hero automatically
  falls back to the portrait file.

Use portrait-orientation photos (taller than wide). Optional: add
`public/og.jpg` (1200x630) for the social share card.

## Deploy (GitHub Desktop -> Vercel)

1. Extract, copy everything into your `kanikasqy` repo folder (overwrite).
2. GitHub Desktop: Commit to main, Push origin.
3. Vercel auto-builds. Done.

Build is Vercel-safe: fonts load via `<link>` in `app/layout.tsx` (not
`next/font/google`), and every file is self-contained.

## Editing content

`lib/content.ts` is the single source of truth for all copy and links.

- News / Awards individual links point to the live `kanikaguptashori.com`
  article pages, so they work today. If you migrate those pages onto this site,
  switch them to relative paths.
- Videos: add or reorder items in the `videos` array. Each needs the YouTube
  `id` (from `youtube.com/watch?v=THIS_PART`), a `title`, and a short `tag`.
  Thumbnails and the embed are generated from the id automatically.
- Fonts are two knobs: `serif` and `sans` in `tailwind.config.ts` plus the
  `<link>` in `app/layout.tsx`. Swap Cormorant if it is not the right voice.

## Structure

```
app/
  layout.tsx        Root layout, fonts, SEO/OG, nav + footer
  page.tsx          Home
  about | news | awards | videos   Subpages
lib/content.ts      All copy + links
components/         Hero, FeaturedIn, Numbers, AboutSpread, News, Awards,
                    Videos, SquareYards, ConnectSection, Nav, Footer, etc.
public/kanika-portrait.jpg   <- replace
```

Note: the Essays/Articles section and page were removed in this pass. The
content still exists on the live site and can be brought back as a cleaner
section on request.
