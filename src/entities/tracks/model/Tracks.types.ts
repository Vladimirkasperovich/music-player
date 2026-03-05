type SortBy = 'publishedAt' | 'likesCount';
type SortDirection = 'asc' | 'desc';
type PaginationType = 'offset' | 'cursor';

export type GetTracksQueryParams = Partial<{
  pageNumber: number;
  pageSize: number;
  search: string;
  sortBy: SortBy;
  sortDirection: SortDirection;
  tagsIds: string[];
  artistsIds: string[];
  userId: string;
  includeDrafts: boolean;
  paginationType: PaginationType;
  cursor: string;
}>;

export interface GetTracksResponse {
  data: TrackDto[];
}

export interface TrackDto {
  id: string;
  type: 'tracks';
  attributes: TrackAttributesDto;
  relationships: TrackRelationshipsDto;
}

export interface TrackAttributesDto {
  title: string;

  user: TrackUserDto;

  addedAt: string;
  publishedAt: string;

  attachments: TrackAttachmentDto[];
  images: TrackImagesDto;

  currentUserReaction: number;
  likesCount: number;

  isPublished: boolean;
}

export interface TrackUserDto {
  id: string;
  name: string;
}

export interface TrackAttachmentDto {
  id: string;
  addedAt: string;
  updatedAt: string;
  version: number;

  url: string;
  contentType: string;
  originalName: string;
  fileSize: number;
}

export interface TrackImagesDto {
  main: TrackImageDto[];
}

export interface TrackImageDto {
  url: string;
  width: number;
  height: number;
  fileSize: number;
  type: 'original' | 'thumbnail' | 'medium';
}

export interface TrackRelationshipsDto {
  artists: {
    data: TrackArtistDto[];
  };
}

export interface TrackArtistDto {
  id: string;
  type: 'artists';
}
