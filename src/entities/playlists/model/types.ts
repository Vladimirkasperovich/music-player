export interface PlaylistUpdateParams {
  body: UpdatePlaylistBody;
  playlistId: string;
}
export interface UpdatePlaylistBody {
  data: {
    type: 'playlists';
    attributes: {
      title: string;
      description: string;
      tagIds: string[];
    };
  };
}
export interface PlaylistCreationData {
  title: string;
  description: string;
}
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
export type PlaylistSortBy =
  | 'addedAt'
  | 'updatedAt'
  | 'title'
  | 'likesCount'
  | 'tracksCount';

export type SortDirection = 'asc' | 'desc';
export interface PlaylistsResponse {
  data: PlaylistsDto[];
  meta: MetaDto;
}

export interface PlaylistsDto {
  id: string;
  type: 'playlists';
  attributes: {
    title: string;
    addedAt: string;
    updatedAt: string;
    order: number;

    user: PlaylistOwnerDto;
    images: PlaylistImagesDto;
    tags: TagDto[];

    likesCount: number;
    dislikesCount: number;
    currentUserReaction: number;

    tracksCount: number;
    duration: number;
  };
}

export interface TagDto {
  id: string;
  name: string;
}

export interface PlaylistOwnerDto {
  id: string;
  name: string;
}

export interface PlaylistImagesDto {
  main: ImageDto[];
}

export interface ImageDto {
  type: 'original' | 'medium' | 'thumbnail';
  width: number;
  height: number;
  fileSize: number;
  url: string;
}

export interface MetaDto {
  page: number;
  pageSize: number;
  totalCount: number;
  pagesCount: number;
}
