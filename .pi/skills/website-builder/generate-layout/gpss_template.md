# 📋 Universal Page Structural Specification (GPSS) Template

## 1. Page Context & SEO Header

```json
{
  "page_identifier": "[Unique slug or purpose description, e.g., corporate_contact, single_move_landing]",
  "seo_metadata": {
    "page_title": "[Verbatim <title> content]",
    "meta_description": "[Verbatim description string]",
    "meta_keywords": ["[Array of keywords parsed from header, if any]"],
    "og_image_fallback": "[Primary image URL asset for context]"
  },
  "navigation_breadcrumbs": [
    { "index": 0, "label": "[Home or parent node]", "url": "[Path]" }
  ]
}

```

---

## 2. Top-of-Page / Utility Navigation Triggers

> Capture transient actions positioned above the primary content (e.g., promotional announcements, sticky call bars, immediate header phone numbers).

* **Banner Announcement / Micro-Campaign:**
* Raw Text: `[Verbatim Japanese text/copy]`
* Intended Action/Target: `[e.g., Call trigger, modal popup, internal redirect link]`


* **Primary Utility Hooks Array:**
* Channel 1: `[Label/Text]` $\rightarrow$ Target: `[URL/Tel/App flow]`
* Channel 2: `[Label/Text]` $\rightarrow$ Target: `[URL/Tel/App flow]`



---

## 3. Hero & Introductory Node

> The primary view of the page designed to anchor the user's intent.

* **Primary Title (H1 Level):** `[Verbatim page main headline copy]`
* **Sub-Headline / Secondary Hook:** `[Verbatim secondary introductory sub-text]`
* **Core Pitch Paragraph:** > `[Full verbatim textual introduction or value proposition paragraphs block]`
* **Hero Badges / Visual Value Triggers:**
* Core Highlight Element: `[e.g., "50% OFF", "Free Trial", "No Hidden Fees"]`
* Associated Context Note: `[e.g., "Tax inclusive", "Limited time offer"]`



---

## 4. Sequential Page Content Blocks (Flexible Array)

> Instruct your parsing agent to map every mid-page block into one of the following dynamic section types.

### [Block Type: Feature Grid / Tiered List]

* **Section Heading:** `[H2/H3 Level text]`
* **Block Objective:** `[Brief context: e.g., breaking down pricing tiers or specific workflows]`
* **Items Collection:**
* **Item 1 Name:** `[Title]`
* Description: `[Paragraph text]`
* Detailed Attributes: `[Bullet points list array]`
* Warning / Dynamic Note: `[Red text or bracketed warning text copy]`





### [Block Type: Data / Comparison Matrix]

* **Matrix Heading:** `[Section subtitle or table objective header]`
* **Headers/Columns Definition:** `[Array of column names / plan variations]`
* **Rows Structural Dataset:**
```json
[
  { "metric/feature_label": "[Row title]", "values": ["col1_val", "col2_val", "col3_val"] }
]

```


* **Matrix-Specific Footnotes:** `[Array of notes tightly bound below this specific chart or component]`

### [Block Type: Form / User Intake Interactive Elements]

* **Intake Objective:** `[e.g., Request a callback, estimate booking scheduler]`
* **Headline Context:** `[Text prompting input execution]`
* **Form Structure Layout:**
* Field 1: `[Label text]` $\rightarrow$ Input Type: `[Text/Select option dropdown/Radio/Checkbox]`
* Field 2: `[Label text]` $\rightarrow$ Input Type: `[Text/Select option dropdown/Radio/Checkbox]`



### [Block Type: Social Proof & Evidence Section]

* **Evidence Heading:** `[e.g., ご利用頂いたお客様の声 / Customer Feedback]`
* **Content Source Element:** `[Specify if it pulls text blocks, review quote cards, or logo images grid]`



---

## 7. Sibling Links & Global Site Footer Configuration

### Sibling Directory / Cross-Linking Block

* **Directory Subtitle:** `[e.g., 引っ越しプラン一覧 / Alternative Service Paths]`
* **Navigational Array Data:**
```json
[
  { "anchor_display_text": "[Service name text]", "destination_url": "[Link path]" }
]

```



### Structural Legal Footprint Profile

* **Corporate Statement / Pitch:** `[Verbatim boilerplate footer copy, e.g., "創業55年..."]`
* **Licensing, Registration, & Regulatory Strings:** `[Verbatim legal business profiles text, permit numbers, physical corporate address]`
* **Copyright Identity:** `[Verbatim copyright string, e.g., "© 2026..."]`