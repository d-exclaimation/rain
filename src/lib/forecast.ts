export const forecast = async () => {
  const api =
    (import.meta.env["VITE_API_URL"] as string) ?? "http://localhost:8000";

  const url = new URL(api);

  const timezone = region();
  const geo = await geolocation();
  if (geo) {
    url.searchParams.append("latitude", geo.latitude.toString());
    url.searchParams.append("longitude", geo.longitude.toString());
    url.searchParams.append("timezone", timezone);
  }

  const resp = await fetch(url.toString(), {
    method: "GET",
  });
  const { rain } = (await resp.json()) as { rain: string };

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return rain;
};

const geolocation = () => {
  if (!navigator || !("geolocation" in navigator)) {
    return null;
  }

  return new Promise<{ latitude: number; longitude: number } | null>(
    (resolve, reject) =>
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (reason) => resolve(null)
      )
  );
};

const region = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
