
# Media Files Structure

## PDF Magazine Files
Place your magazine PDF files in the `/pdfs/` directory. The application expects PDF files to be named according to their route identifier.

For example:
- `/pdfs/insider-insights.pdf` for the Insider Insights magazine
- `/pdfs/first-edition.pdf` for the First Edition magazine
- `/pdfs/career-success.pdf` for the Career Success magazine

## Website Photos
Place your website photos in the `/photos/` directory. You can organize them in subdirectories if needed.

For example:
- `/photos/team/` for team member photos
- `/photos/events/` for event photos
- `/photos/articles/` for article thumbnails

## How to Reference Files in Your Code

### For PDFs:
```tsx
// Example in magazine data
{
  title: "Magazine Title",
  pdfUrl: "/pdfs/your-pdf-name.pdf"
}
```

### For Images:
```tsx
// Example in components
<img src="/photos/your-image.jpg" alt="Description" />
```
