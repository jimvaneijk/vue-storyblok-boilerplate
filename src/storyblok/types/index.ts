import { ViewsPageStoryblok } from './component-types-sb';
export * from './component-types-sb';

export interface StoryblokPage {
    name: string;
    content: ViewsPageStoryblok;
    slug: string;
    full_slug: string;
    id: number;
    uuid: string;
    published_at: string;
    first_published_at: string;
    release_id: number;
    lang: string;
}
