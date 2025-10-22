export default function Head() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {measurementId ? <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" /> : null}
    </>
  );
}
