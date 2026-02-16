export type PlaylistSortBy =
  | 'addedAt'
  | 'updatedAt'
  | 'title'
  | 'likesCount'
  | 'tracksCount';

export type SortDirection = 'asc' | 'desc';

export type GetPlaylistsQueryParams = Partial<{
  pageNumber: number;
  pageSize: number;
  search: string;

  sortBy: PlaylistSortBy;
  sortDirection: SortDirection;

  tagsIds: string[];
  userId: string;
  trackId: string;
}>;

export interface GetPlaylistsResponse {
  data: PlaylistDto[];
}

export interface PlaylistDto {
  id: string;
  type: 'playlists';
  attributes: PlaylistAttributesDto;
}

export interface PlaylistAttributesDto {
  title: string;
  addedAt: string;
  updatedAt: string;
  order: number;

  user: PlaylistUserDto;
  images: PlaylistImagesDto;
  tags: string[];

  currentUserReaction: number;
  likesCount: number;
  dislikesCount: number;
  tracksCount: number;
}
export interface PlaylistUserDto {
  id: string;
  name: string;
}

export interface PlaylistImagesDto {
  main: PlaylistImageDto[];
}

export interface PlaylistImageDto {
  url: string;
  width: number;
  height: number;
  fileSize: number;
  type: 'original' | 'thumbnail' | 'medium';
}
