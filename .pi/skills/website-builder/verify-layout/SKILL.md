---
name: verify-layout
description: Audit an existing page against its GPSS specification in layout.md, checking SEO, components, and ADX compliance.
---

# Verify Layout Skill

This skill provides instructions for auditing an existing page against its "GPSS" (Global Page Structural Specification) found in `layout.md`. Use this when the user asks to `/verify_page <slug>`.

## 1. Audit Process
- **Locate Files**: 
  - Implementation: `page.tsx`
  - Specification: `layout.md`
- **Metadata Check**: Verify `generateMetadata` matches `seo_metadata` (Title, Description, Keywords).
- **FAQ Section**: Ensure if there is a FAQ that the `FAQSection` component is being used.
- **Content Accuracy**: Compare headers, lists (e.g., "16 Rules"), and flow steps in the code against the verbatim strings in the GPSS.
- **ADX Compliance**: Check for:
  - Usage of `SmartJapaneseText` on all headers and sub-headlines if needed.
  - Proper use of Tailwind theme variables (no hardcoded hex).
  - Use of `@/` alias for imports.
  - Use of local `/images/` instead of external domains.

## 2. Report Format
Return a concise "Verification Report" with the following structure:

### 📋 [Slug] Verification Report
- **SEO Status**: ✅ (Match) / ⚠️ (Mismatch details)
- **Structure**: ✅ (Correct) / ❌ (Missing [Component Name])
- **Content Fidelity**:
  - Headers: [Match status]
  - Specialized Lists: [e.g., 16 Rules found/missing]
  - External Nodes: [Presence of Validation/Knowledge cards]
- **ADX Checks**:
  - SmartJapaneseText: ✅ / ⚠️ [Locations missing it]
  - Theme/Assets: ✅ / ⚠️ [Hardcoded colors or wrong paths]

**Overall Result**: [Pass/Fail/Partial]

## 3. Corrective Action
If the report finds discrepancies, offer to fix them immediately by re-applying the GPSS.
