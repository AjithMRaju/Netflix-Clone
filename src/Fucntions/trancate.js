 export function trancate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
