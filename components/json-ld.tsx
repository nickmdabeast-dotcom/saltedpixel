interface JsonLdProps {
  data: unknown;
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps) {
  const json = JSON.stringify(data, null, 2);
  const safeJson = json ? json.replace(/</g, "\\u003c") : "";

  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
}

export default JsonLd;
