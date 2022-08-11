export interface Thumbnail {
  trending: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
}

export const defaultThumbnail = {
  trending: {
    small: "",
    large: "",
  },
  regular: {
    small: "",
    medium: "",
    large: "",
  },
};

export interface Media {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export const defaultMedia = {
  title: "",
  thumbnail: defaultThumbnail,
  year: 0,
  category: "",
  rating: "",
  isBookmarked: false,
  isTrending: false,
};
