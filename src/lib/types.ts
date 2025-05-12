export enum Styles {
    FLAT = 'flat',
    FLATSQUARE = 'flat-square',
    FORTHEBADGE = 'for-the-badge',
    PLASTIC = 'plastic',
    SOCIAL = 'social',
}

export interface StateCacheItem {
    lastHit: number;
    lastSync: number;
    pipelines: Record<string, StateCachePipeline>;
    validTill: number;
}

export interface StateCachePipeline {
    coverage?: string;
    status: string;
}

export type Style =
    | 'flat'
    | 'flat-square'
    | 'for-the-badge'
    | 'plastic'
    | 'social';
