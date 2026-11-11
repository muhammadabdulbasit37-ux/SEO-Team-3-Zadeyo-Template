type SupportChannel = { readonly path: string; readonly destination: string; readonly label: string };

export declare const SUPPORT_CHANNELS: Readonly<Record<'tickets' | 'documentation' | 'faq', SupportChannel>>;
export declare function resolveOutboundRedirect(pathname: string, search: string): string | null;
