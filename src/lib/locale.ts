import { cookies } from "next/headers";
import { dictionary, resolveLocale, type Locale, LOCALE_COOKIE } from "./i18n";

/** Server-only: resolve the active locale from the cookie. */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return resolveLocale(store.get(LOCALE_COOKIE)?.value);
}

export async function getDict() {
  const locale = await getLocale();
  return { locale, t: dictionary[locale] };
}
