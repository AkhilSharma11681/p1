const userMessageMap = new Map<string, number[]>();

export function canSendMessage(userId: string): boolean {
  const now = Date.now();

  const timestamps =
    userMessageMap.get(userId)?.filter(
      time => now - time < 10000
    ) || [];

  if (timestamps.length >= 5) {
    return false;
  }

  timestamps.push(now);

  userMessageMap.set(userId, timestamps);

  return true;
}
