# Lumen — Local SEO & Backlink Checklist

The website now links out to your profiles (footer + structured data), which
helps Google connect them into one entity. **Real backlinks flow the other
way: every profile below must link back to https://lumenteeth.com.** Work
top to bottom — the first four move rankings the most.

**NAP rule (do not break it):** everywhere you list the business, use
exactly — **Lumen · Bronx, NY 10451 · hello@lumenteeth.com ·
lumenteeth.com**. Inconsistent name/area/contact info across listings
confuses Google and dilutes local ranking.

## 1. Bio links on every social (5 min — do first)

The single easiest backlink win. Set the website field/bio link on each:

- [ ] Instagram (@lumen.smile) → profile → Edit profile → Website:
      `https://lumenteeth.com`
- [ ] Facebook page → About → Contact and basic info → Website
- [ ] TikTok → Edit profile → Website (business accounts get a clickable
      link; switch to a free Business account if you haven't)
- [ ] Also confirm each bio says "South Bronx, NYC" — local relevance
      flows both directions.

## 2. Google Business Profile (the map-pack ranking)

- [ ] Finish setup at business.google.com using
      `marketing/google-business-profile.md`
- [ ] Website field → `https://lumenteeth.com`
- [ ] Appointment link → your Square URL
- [ ] Once live: open your profile → **Share** → copy the short link
      (looks like `https://maps.app.goo.gl/...`) → **send it to me** and
      I'll wire it into the site (footer "Google Maps" chip, the Location
      section's "Find us on Google Maps" button, and `hasMap` in the
      structured data — one line in `content/site.ts`).

## 3. Bing Places (10 min)

- [ ] bingplaces.com → "Import from Google Business Profile" — one click
      syncs everything. Bing powers ChatGPT/Copilot local answers, so this
      matters for AI search too.

## 4. Apple Business Connect (15 min)

- [ ] businessconnect.apple.com → register Lumen → service-area business →
      website + booking link. This is what Siri and Apple Maps users find.

## 5. Directory citations (30 min total, all free)

Each is a backlink + a citation:

- [ ] Yelp for Business (biz.yelp.com) — category "Teeth Whitening";
      service-area listing, hide exact address
- [ ] Nextdoor Business — strong for neighborhood-level discovery in the
      Bronx
- [ ] Foursquare/Swarm places listing
- [ ] Any Bronx-specific business directories / Bronx Chamber of Commerce
      when budget allows

## 6. Review velocity (ongoing — biggest local ranking lever)

- [ ] Ask every happy client for a Google review (template in
      `marketing/google-business-profile.md`)
- [ ] Reply to every review within a few days
- [ ] Steady trickle (2–4/month) beats a burst then silence

## 7. Content signals (ongoing)

- [ ] Geo-tag Instagram/TikTok posts ("South Bronx", "Yankee Stadium")
- [ ] Weekly Google Business Profile post (before/after, offer, or tip)
- [ ] When you post a before/after on socials, occasionally link the
      site's gallery (`lumenteeth.com/#gallery`) instead of the homepage —
      deep links look more natural than 100% homepage links

## Done already (on the website)

- ✅ Footer "Follow Lumen" links: Instagram, Facebook (+ TikTok & Google
  Maps appear automatically once their URLs are in `content/site.ts`)
- ✅ `sameAs` structured data ties all profiles to the business entity
- ✅ LocalBusiness schema with 10451 geo, service offers, ReserveAction
- ✅ FAQ schema, sitemap, robots, canonical, local keywords on-page
