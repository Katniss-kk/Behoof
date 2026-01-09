// utils/cookieUtils.ts
/**
 * Устанавливает куки
 * @param name - название куки
 * @param value - значение
 * @param days - срок хранения в днях
 */
export const setCookie = (
  name: string,
  value: string,
  days: number = 7
): void => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

/**
 * Получает значение куки
 * @param name - название куки
 */
export const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
};

/**
 * Удаляет куки
 * @param name - название куки
 */
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
