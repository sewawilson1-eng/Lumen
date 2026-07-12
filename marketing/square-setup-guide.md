# Lumen — Square Client-Management Setup Guide

Turns your existing Square account into the client system: automated
booking emails, e-signed consent forms saved to each client's profile,
before/after photos, and per-visit treatment notes.

**The one plan decision (make this first):**

| | Free plan | Appointments Plus — $49/mo |
|---|---|---|
| Booking confirmations + reminders | ✅ | ✅ (more control over timing) |
| Consent contract with e-signature, auto-sent at booking, PDF on profile | ✅ | ✅ |
| Client **fills in answers** on the form (the 11-question medical screening) | ❌ signature-only | ✅ data-collecting fields |
| Send form only to first-time / unsigned clients or specific services | ✅ | ✅ |
| Cancellation-policy enforcement, waitlist, multiple staff | ❌ | ✅ |

**Recommendation while you're launching:** start **free**. Put the full
consent text (Sections 3–6 of the consent form) in a Square Contract that
clients e-sign before arrival, and have them answer the 11 medical
screening questions on your phone or a printed sheet when they arrive —
you keep it by snapping a photo into their profile (Step 4). Upgrade to
Plus (~1 extra booking/month pays for it) when you want the questionnaire
answered online ahead of time.

---

## Step 1 — Create the consent contract

1. Log in at **squareup.com/dashboard**
2. In the left menu (or the search bar) find **Customers → Contracts**
3. **Create a contract / template** → choose a blank or "consent" template
4. Paste in the consent form from `marketing/whitening-consent-form.md`:
   - Free plan: Sections 3, 4, 5, 6 as body text (turn each "Initials"
     line into its own acknowledgment clause) + the signature block
   - Plus plan: also add Section 2's eleven screening questions as
     required form fields (Yes/No), and Section 1's contact fields
5. Name it **"Teeth Whitening Consent & Intake"** and save

## Step 2 — Auto-send it when someone books

1. Go to **Appointments → Settings → Digital forms** (Square's name for
   contracts attached to bookings — see their guide:
   [Create automated digital forms with appointments](https://squareup.com/help/us/en/article/7104-contracts))
2. Enable auto-send for your whitening services
3. Choose **"Only send to clients who haven't signed"** — repeat clients
   won't be nagged, and their signed PDF stays on file
4. Result: book → confirmation email → form link → signed PDF lands on
   the client's profile automatically. Clients who didn't sign show as
   pending, so you know to have them sign on your phone/iPad at arrival.

## Step 3 — Client profiles (already working)

Every online booking auto-creates a profile in **Customers → Directory**
with contact info and full appointment history. Open any profile to see
their signed contracts, notes, files, and upcoming visits — this is your
admin dashboard, searchable by name/phone/email, on desktop or the
Square app.

Add birthday: open profile → Edit → add their birthday (useful later for
birthday promos via Square Marketing).

## Step 4 — Before/after photos (per visit)

Square profiles accept file uploads — use them as the photo record:

1. Before treatment: take 2–4 photos on your phone (same spot, same
   lighting each time — consistency is what makes comparisons dramatic)
2. Open the client in the Square app → their profile → **add file/photo**
3. Name files with a strict convention so they sort into pairs:
   - `2026-07-15-before-1.jpg`, `2026-07-15-before-2.jpg`
   - `2026-07-15-after-1.jpg`, `2026-07-15-after-2.jpg`
4. After treatment: matching photos, same angles

Square won't show side-by-sides; for marketing composites, drop the pair
into a Canva before/after template (only for clients who checked "YES"
on the photo release).

## Step 5 — Treatment note after every visit

Open the client's profile → **Notes** → paste and fill:

```
[2026-07-15] Signature 60min
Initial shade: A3 | Final shade: B1 (VITA)
Cycles: 2 x 20min | Sensitivity: none
Comments: excellent lift on canines
Next recommended: ~6 months (Jan 2027)
```

Shade guide tip: a physical VITA classical shade guide is ~$15–25 online
and makes the before/after numbers real — clients love hearing "you
jumped six shades."

## Step 6 — Reminders & confirmations

**Appointments → Settings → Communications**: confirm the automatic
email/text confirmation and reminder timing (e.g., 24h before). Add a
line to the confirmation message: *"Please complete your consent form
before arrival — it takes 2 minutes."*

## Later, when you're busier (all inside Square)

| Future feature from your list | Square product |
|---|---|
| "It's been 6 months since your whitening" | Square Marketing automations |
| Package balances ("2 sessions remaining") | Sell packages as items; track on profile notes (or Appointments Plus packages) |
| Memberships / loyalty rewards | Square Loyalty add-on |
| SMS campaigns | Square Marketing (SMS) |
| Referral tracking | Coupon codes per client in Square Marketing |

Sources: [Square Appointments pricing](https://squareup.com/us/en/appointments/pricing) ·
[Square digital forms guide](https://squareup.com/help/us/en/article/7104-contracts)
