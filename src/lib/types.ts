export interface StateCacheItem {
    lastSync: number;
    lastHit: number;
    validTill: number;
    pipelines: Record<string, StateCachePipeline>;
}

export interface StateCachePipeline {
    status: string;
    coverage?: string;
}

export enum Styles {
    PLASTIC = 'plastic',
    FLAT = 'flat',
    FLATSQUARE = 'flat-square',
    FORTHEBADGE = 'for-the-badge',
    SOCIAL = 'social'
}

export type Style = 'plastic' | 'flat' | 'flat-square' | 'for-the-badge' | 'social';
