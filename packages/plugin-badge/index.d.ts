
export { Notification } from './common';

export function requestPremissions(): Promise<boolean>;

export function setBadge(badge: number);

export function removeBadge();

export function applyNotification(notification: Notification, badge: number, channelId?: string);