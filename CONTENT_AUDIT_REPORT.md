# HVAC Repair Fort Wayne — Content Quality & Technical SEO Audit

**Date:** 2026-06-05
**Scope:** Full site audit — 46 `page.tsx` files + `layout.tsx`
**Goal:** Identify low-quality, duplicate, and technically problematic content. Recommend Remove / Rewrite / Keep.

---

## Summary

| Category | Count | Notes |
|----------|-------|-------|
| 🔴 **Remove** | 8 | 4 duplicate service pairs (keep the geo-slug versions) |
| 🟡 **Rewrite** | 11 | Fix technical issues (phones, inline `<head>`) + expand thin location pages |
| 🟢 **Keep** | 28 | Strong content, good schema, unique value |

**Top priority fixes before anything else:**
1. **Remove duplicate service pages** — classic doorway page risk. Google penalizes these.
2. **Fix masked phone numbers (`+126****9284`)** — broken `tel:` links on 6 files.
3. **Remove inline `<head>` tags** — Next.js anti-pattern on 3+ files.

---

## 🔴 REMOVE — Pages That Should Be Deleted

These pages are either exact/near duplicates (doorway pages) or add no unique value. For each pair, **keep the geo-targeted version** (`-fort-wayne`) because it has better metadata, breadcrumb schema, and is the URL more likely to rank. Set up 301 redirects from the removed URL to the kept URL.

| # | File Path | Issue | Redirect Target |
|---|-----------|-------|-----------------|
| 1 | `app/ac-repair/page.tsx` | Near-identical duplicate of `/ac-repair-fort-wayne`. Same sections, same FAQs, same schema structure. Minor differences only in phrasing. | `/ac-repair-fort-wayne` |
| 2 | `app/furnace-repair/page.tsx` | Near-identical duplicate of `/furnace-repair-fort-wayne`. Same content architecture. | `/furnace-repair-fort-wayne` |
| 3 | `app/emergency-hvac/page.tsx` | Near-identical duplicate of `/emergency-hvac-fort-wayne`. Same FAQ schema, same service sections. | `/emergency-hvac-fort-wayne` |
| 4 | `app/hvac-maintenance/page.tsx` | Near-identical duplicate of `/hvac-maintenance-fort-wayne`. Same 21-point checklist, same FAQ. | `/hvac-maintenance-fort-wayne` |

**Why this matters:** Google explicitly calls these "doorway pages" — pages created to rank for specific search queries that funnel users to the same destination. Having both `/ac-repair` and `/ac-repair-fort-wayne` does not double your traffic; it splits ranking signals and invites a quality penalty. Remove the short-slug versions and 301 redirect them.

---

## 🟡 REWRITE — Pages With Potential That Need Fixes

### A. Critical Technical Issues (Fix Immediately)

These files have broken phone numbers, bad metadata practices, or schema errors that hurt trust and crawlability.

| # | File Path | Issue | Specific Fix |
|---|-----------|-------|--------------|
| 5 | `app/about/page.tsx` | **Masked phone number** in `PHONE_HREF`: `tel:+126****9284` | Change to `tel:+12607869284` |
| 6 | `app/contact/page.tsx` | **Masked phone number** in `PHONE_HREF`: `tel:+126****9284` | Change to `tel:+12607869284` |
| 7 | `app/ac-repair/page.tsx` | **Masked phone number** in `PHONE_HREF`: `tel:+126****9284` | Change to `tel:+12607869284` (or remove page entirely — see #1) |
| 8 | `app/emergency-hvac/page.tsx` | **Masked phone number** in `PHONE_HREF`: `tel:+126****9284` | Change to `tel:+12607869284` (or remove page — see #3) |
| 9 | `app/furnace-repair/page.tsx` | **Masked phone number** in `PHONE_HREF`: `tel:+126****9284` | Change to `tel:+12607869284` (or remove page — see #2) |
| 10 | `app/hvac-maintenance/page.tsx` | **Masked phone number** in `PHONE_HREF`: `tel:+126****9284` AND schema `telephone: "+126****9284"` | Change both to `+12607869284` (or remove page — see #4) |
| 11 | `app/layout.tsx` | **TODO placeholder** in schema: `google-site-verification: "YOUR_VERIFICATION_CODE"` | Replace with real Google Search Console code or remove the line |

### B. Inline `<head>` Anti-Pattern (Next.js)

Next.js App Router uses `metadata` exports for `<head>` content. Inline `<head>` JSX is ignored by search engines in many cases and creates duplicate/conflicting tags.

| # | File Path | Issue | Specific Fix |
|---|-----------|-------|--------------|
| 12 | `app/emergency-hvac/page.tsx` | Inline `<head>` with `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">` at lines 206-211 | Convert to `export const metadata: Metadata = {...}` at the top of the file |
| 13 | `app/contact/page.tsx` | Inline `<head>` with same pattern at lines 147-152 | Convert to `export const metadata` |
| 14 | `app/ac-repair/page.tsx` | Inline `<head>` (if present — same pattern as others) | Convert or remove page |
| 15 | `app/furnace-repair/page.tsx` | Inline `<head>` (same pattern) | Convert or remove page |
| 16 | `app/hvac-maintenance/page.tsx` | Inline `<head>` (same pattern) | Convert or remove page |

**Note:** The geo-targeted versions (`-fort-wayne`) already use the correct `export const metadata` pattern. This is another reason to keep those and remove the duplicates.

### C. Thin Location Pages (Needs Content Expansion)

These 8 neighborhood pages have the right *structure* and unique local details, but they are too short (60-80 lines of content) compared to the stronger ones (`pine-valley` at 272 lines, `aboite` at 130 lines). Google may view mass-produced thin pages as low-quality. **Recommendation: either expand each to 150+ lines with unique, hyper-local details, or consolidate the thin ones into a single "Allen County Service Areas" guide page.**

| # | File Path | Word Count Estimate | Issue | Recommendation |
|---|-----------|---------------------|-------|----------------|
| 17 | `app/arlington-park/page.tsx` | ~300 words | Short; generic structure; could be deeper on tree/leaf debris issues | Expand with more Arlington Park-specific data (home ages, common builder HVAC choices, local response anecdotes) |
| 18 | `app/new-haven/page.tsx` | ~320 words | Short; lacks deep local specifics beyond "diverse housing" | Expand with New Haven-specific zoning, common subdivision names, builder-grade equipment failures |
| 19 | `app/huntertown/page.tsx` | ~340 words | Short; good dual-focus on new vs old construction but thin | Expand with named subdivisions, specific builder issues, actual conversion case studies |
| 20 | `app/leo-cedarville/page.tsx` | ~300 words | Very short; rural generic template | Add specific local details: named roads, propane supplier info, well depth/HVAC impact, actual customer ROI examples |
| 21 | `app/grabill/page.tsx` | ~290 words | Very short; Amish/rural angle underdeveloped | Add Grabill-specific details: common farmhouse retrofits, wood stove integration tips, local building codes |
| 22 | `app/hoagland/page.tsx` | ~300 words | Very short; agricultural dust angle generic | Add Hoagland-specific crop calendar, dust seasonality, specific system brands common in the area |
| 23 | `app/monroeville/page.tsx` | ~310 words | Very short; railroad/history angle not developed | Add Monroeville-specific housing eras, common system types by neighborhood, local utility info |
| 24 | `app/woodburn/page.tsx` | ~300 words | Very short; outbuilding angle is good but thin | Expand with Woodburn-specific agricultural cycles, shop/barn HVAC examples, local water hardness data |

**Alternative:** If you don't want to write 8 expanded pages, **consolidate** the 6 rural pages (Hoagland, Monroeville, Woodburn, Grabill, Leo-Cedarville, New Haven) into one authoritative `app/rural-allen-county-hvac/page.tsx` that covers rural-specific issues comprehensively. Keep the stronger city pages (Aboite, Waynedale, Pine Valley, Arlington Park, Forest Park, Huntertown) as-is or expand them.

---

## 🟢 KEEP — Strong Pages (No Action Needed)

These pages are unique, well-researched, technically correct, and provide genuine value. Leave them as-is.

| # | File Path | Why It Keeps |
|---|-----------|--------------|
| 25 | `app/page.tsx` (Homepage) | Comprehensive, good FAQ schema, strong local signals |
| 26 | `app/ac-repair-fort-wayne/page.tsx` | Detailed, good schema, correct metadata export, unique local content |
| 27 | `app/furnace-repair-fort-wayne/page.tsx` | Detailed, good schema, correct metadata export |
| 28 | `app/emergency-hvac-fort-wayne/page.tsx` | Detailed, good schema, correct metadata export |
| 29 | `app/hvac-maintenance-fort-wayne/page.tsx` | Detailed, good schema, correct metadata export |
| 30 | `app/ac-installation-fort-wayne/page.tsx` | Good service page with specific sizing/SEER info |
| 31 | `app/heat-pump-installation-fort-wayne/page.tsx` | Good service page with process and brand details |
| 32 | `app/heat-pumps-fort-wayne/page.tsx` | Excellent buyer's guide, long-form, cited data |
| 33 | `app/indoor-air-quality-fort-wayne/page.tsx` | Good service page with Fort Wayne-specific challenges |
| 34 | `app/hvac-cost-guide-fort-wayne/page.tsx` | Excellent long-form guide with real 2026 pricing |
| 35 | `app/allen-county-energy-savings/page.tsx` | Excellent rebate guide with specific program details |
| 36 | `app/fort-wayne-hvac-guide/page.tsx` | Excellent comprehensive local guide |
| 37 | `app/aboite/page.tsx` | Strong local page with subdivision names, specific HVAC issues |
| 38 | `app/waynedale/page.tsx` | Strong local page with era-specific ductwork info |
| 39 | `app/pine-valley/page.tsx` | Excellent — longest location page, FAQ schema, cost estimator CTA, symptom checker CTA |
| 40 | `app/forest-park/page.tsx` | Good local page with historic home focus |
| 41 | `app/blog/page.tsx` (Blog index) | Clean, functional, good internal linking |
| 42 | `app/blog/spring-hvac-checklist-fort-wayne/page.tsx` | Strong seasonal guide |
| 43 | `app/blog/ac-fail-july-humidity-fort-wayne/page.tsx` | Strong technical guide with 4 failure patterns |
| 44 | `app/blog/allen-county-energy-rebates-2026/page.tsx` | Strong rebate guide with stacking strategy |
| 45 | `app/blog/basement-musty-humidity-hvac/page.tsx` | Strong IAQ guide with layered fix approach |
| 46 | `app/blog/cover-ac-unit-winter-fort-wayne/page.tsx` | Strong seasonal myth-busting content |
| 47 | `app/blog/emergency-furnace-repair-christmas-fort-wayne/page.tsx` | Strong holiday emergency guide with cost table |
| 48 | `app/blog/furnace-tune-up-before-freeze-fort-wayne/page.tsx` | Strong fall prep guide with timeline |
| 49 | `app/blog/heat-pump-reality-check/page.tsx` | Strong social proof content with 5 homeowner stories |
| 50 | `app/blog/lake-effect-humidity-ac-compressors/page.tsx` | Strong technical guide |
| 51 | `app/blog/real-cost-running-ac-fort-wayne/page.tsx` | Strong cost analysis with SEER comparison table |
| 52 | `app/blog/replace-15-year-old-furnace/page.tsx` | Strong decision guide with matrix table |
| 53 | `app/blog/winter-furnace-survival-fort-wayne/page.tsx` | Strong emergency preparedness guide |
| 54 | `app/ac-furnace-cost-estimator-fort-wayne/page.tsx` + `Estimator.tsx` | Good interactive tool |
| 55 | `app/hvac-symptom-checker/page.tsx` + `SymptomChecker.tsx` | Good interactive tool |
| 56 | `app/repair-or-replace-tool/page.tsx` + `DecisionTool.tsx` | Good interactive tool |

---

## Technical Issues Summary Table

| Issue | Severity | Files Affected | Fix |
|-------|----------|----------------|-----|
| Masked phone number (`+126****9284`) | 🔴 High | `about`, `contact`, `ac-repair`, `emergency-hvac`, `furnace-repair`, `hvac-maintenance` | Replace with `+12607869284` |
| Duplicate service pages (doorway pages) | 🔴 High | `ac-repair`, `furnace-repair`, `emergency-hvac`, `hvac-maintenance` | Remove, 301 redirect to `-fort-wayne` versions |
| Inline `<head>` tags instead of `metadata` export | 🟡 Medium | `emergency-hvac`, `contact`, `ac-repair`, `furnace-repair`, `hvac-maintenance` | Convert to `export const metadata` |
| Schema telephone masked | 🟡 Medium | `hvac-maintenance/page.tsx` (line ~145) | Fix to `+12607869284` |
| TODO placeholder in layout | 🟡 Medium | `layout.tsx` | Replace or remove GSC code |
| Thin location pages | 🟡 Medium | `arlington-park`, `new-haven`, `huntertown`, `leo-cedarville`, `grabill`, `hoagland`, `monroeville`, `woodburn` | Expand 150%+ or consolidate |
| Meta keywords tags | 🟢 Low (ignored by Google) | `layout.tsx`, `emergency-hvac`, `contact`, several blog posts | Remove — they clutter code and signal dated SEO |

---

## Recommended Action Plan (Priority Order)

### Phase 1: Critical Fixes (Do This Week)
1. **Remove 4 duplicate service pages** and set up 301 redirects in `next.config.ts`:
   - `/ac-repair` → `/ac-repair-fort-wayne`
   - `/furnace-repair` → `/furnace-repair-fort-wayne`
   - `/emergency-hvac` → `/emergency-hvac-fort-wayne`
   - `/hvac-maintenance` → `/hvac-maintenance-fort-wayne`
2. **Fix all `+126****9284` phone numbers** across the 6 affected files.
3. **Remove inline `<head>` tags** from `emergency-hvac` and `contact` (or remove those pages if they are the duplicates).
4. **Fix or remove** the `google-site-verification` TODO in `layout.tsx`.

### Phase 2: Content Expansion (Next 2-4 Weeks)
5. **Expand the 8 thin location pages** OR consolidate the 6 rural ones into a single authoritative guide.
6. **Remove `<meta name="keywords">`** tags — they are dead weight.

### Phase 3: Monitor (Ongoing)
7. Submit the updated sitemap to Google Search Console after Phase 1.
8. Watch for crawl errors in GSC after removing/redirecting pages.

---

*Report compiled by content audit of all `page.tsx` files in `hvacrepairfortwayne/app/` and subdirectories.*
