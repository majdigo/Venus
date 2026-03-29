/**
 * Agent runtime utilities.
 */

let counter = 0;

export function generateId(prefix: string): string {
  counter++;
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 6);
  return `${prefix}_${timestamp}_${random}_${counter}`;
}

export function generateLeadId(): string {
  const year = new Date().getFullYear();
  const seq = Math.floor(10000 + Math.random() * 90000);
  return `VE-${year}-${seq}`;
}
