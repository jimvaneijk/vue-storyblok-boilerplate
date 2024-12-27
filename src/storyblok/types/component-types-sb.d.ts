// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface BlocksFeatureStoryblok {
  name?: string;
  component: "BlocksFeature";
  _uid: string;
  [k: string]: any;
}

export interface BlocksGridStoryblok {
  columns?: (BlocksFeatureStoryblok | BlocksGridStoryblok | BlocksTeaserStoryblok | ViewsPageStoryblok)[];
  component: "BlocksGrid";
  _uid: string;
  [k: string]: any;
}

export interface BlocksTeaserStoryblok {
  headline?: string;
  component: "BlocksTeaser";
  _uid: string;
  [k: string]: any;
}

export interface ViewsPageStoryblok {
  body?: (BlocksFeatureStoryblok | BlocksGridStoryblok | BlocksTeaserStoryblok | ViewsPageStoryblok)[];
  component: "ViewsPage";
  _uid: string;
  [k: string]: any;
}
