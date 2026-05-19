# Your photos go here

Drop your images into this folder, then open `content/images.ts` and change the
matching URL from the Unsplash placeholder to `/images/<your-filename>.jpg`.

Suggested filenames (so you can copy-paste with no edits):

| File                          | What it is                                                     | Used in                       |
| ----------------------------- | -------------------------------------------------------------- | ----------------------------- |
| `hero.jpg`                    | Wide shot of your studio or a calm spa interior with the lamp  | Hero                          |
| `formula.jpg`                 | Close-up of the whitening gel / applicator                     | Showcase — "The formula"      |
| `light.jpg`                   | The professional LED whitening lamp (your unit if possible)    | Showcase — "The lamp"         |
| `studio.jpg`                  | Wide shot of the spa-style treatment room                      | Showcase — "The studio"       |
| `before.jpg` + `after.jpg`    | Real before/after smile photos (with client consent)           | Before/after slider           |
| `specialist.jpg`              | Portrait of you, the specialist                                | About section                 |

Then in `content/images.ts`:

```ts
export const images = {
  hero: "/images/hero.jpg",
  formula: "/images/formula.jpg",
  light: "/images/light.jpg",
  studio: "/images/studio.jpg",
  before: "/images/before.jpg",
  after: "/images/after.jpg",
  specialist: "/images/specialist.jpg",
};
```

## Sizing tips

- Hero & showcase images: **at least 1600px wide**, landscape orientation
- Specialist portrait: **at least 1000px wide**, portrait orientation (4:5)
- Before / after: **at least 1200px wide**, similar framing on both shots so the
  draggable comparison feels honest

JPEG is fine for photos; use PNG only if you need transparency. Optimize with
[squoosh.app](https://squoosh.app) if files are larger than ~500KB.
