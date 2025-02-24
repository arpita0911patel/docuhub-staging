# DocuHub Staging Environment

This repository hosts PR preview builds for the DocuHub documentation site. Each PR gets its own subdirectory:

- PR #123: `/pr-123/`
- PR #124: `/pr-124/`
etc.

These previews are automatically deployed by GitHub Actions when PRs are created or updated in the main repository.

## Structure

```
/
├── pr-123/     # Preview for PR #123
├── pr-124/     # Preview for PR #124
└── ...
```

## Access

Preview builds are available at: `https://arpita0911patel.github.io/docuhub-staging/pr-{number}/`
