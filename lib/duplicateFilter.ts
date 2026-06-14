const lastMessageMap = new Map<string, string>();

export function isDuplicateMessage(
  userId: string,
  message: string
) {
  const last =
    lastMessageMap.get(userId);

  if (
    last &&
    last.toLowerCase().trim() ===
      message.toLowerCase().trim()
  ) {
    return true;
  }

  lastMessageMap.set(userId, message);

  return false;
}
