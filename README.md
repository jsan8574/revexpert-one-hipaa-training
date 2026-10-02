# HIPAA in Practice Every Record Matters

A story-driven, self-paced HIPAA Privacy & Security course for RevExpert One. The course is a responsive static Next.js experience designed for GitHub Pages.

## Course features

- Eight-part story path from prologue through final mission
- PHI flip cards and sorting, authorization and minimum-necessary decisions
- Branching secure-message and social-engineering simulations
- Remote-work inspection and incident-response decision tree
- Editable 2026 civil penalty, criminal context, and OCR case data
- Confidence-aware feedback and adaptive remediation
- Progress persistence, badges, 10-question assessment, Guardian's Pledge, and printable completion certificate

## Edit regulatory data

Penalty ranges, case examples, source URLs, the module list, and assessment questions live in `app/courseData.ts`. Review these values with qualified compliance counsel before each annual release.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Publish with GitHub Pages

1. Create a GitHub repository and add this project at its root.
2. Push to the `main` branch.
3. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. The included workflow builds and publishes the static `out` directory.

For a custom domain hosted at the root, remove the `PAGES_BASE_PATH` line from `.github/workflows/deploy-pages.yml`.

## Important implementation note

This standalone version stores course progress in the learner's browser. It does not transmit learner records, issue a verifiable credential, or connect to an LMS. The certificate is learner-entered and printable. Integrate with an LMS/LRS if formal completion tracking is required.

## Content disclaimer

This course is educational content, not legal advice. Pair it with the organization's approved policies, systems, reporting channels, and role definitions. Regulatory data is labeled as current through September 2026.
